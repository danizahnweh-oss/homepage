// Deploy as student-accounts, verify_jwt=false. Only a publishable project key is public.
import { withSupabase } from "npm:@supabase/server@^1";

export function studentName(input: string) {
 const display=input.normalize("NFKC").trim().replace(/\s+/g," ");
 if(display.length<3||display.length>60||!/^[\p{L}\p{N} ._'’\-]+$/u.test(display))throw new Error("Der Anmeldename braucht 3–60 Zeichen: Buchstaben, Zahlen, Leerzeichen, Punkt, Bindestrich oder Unterstrich.");
 return {display,key:display.toLowerCase()};
}
async function hash(input:string){const digest=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(input));return Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,"0")).join("");}
export async function studentAlias(input:string){return "smv-student-"+(await hash("smv-student-v1:"+studentName(input).key)).slice(0,48)+"@students.invalid";}
const origins=new Set(["https://smv.daniel-zahnweh.de","https://smv-zimmer-buchung.zahnweh.chatgpt.site"]);
const json=(value:unknown,status=200)=>Response.json(value,{status,headers:{"Cache-Control":"no-store"}});
const handler=withSupabase({auth:"publishable"},async(request,ctx)=>{
 if(request.method!=="POST")return json({message:"Methode nicht erlaubt"},405);
 const raw=await request.text();if(raw.length>4096)return json({message:"Anfrage zu groß"},413);
 let body:Record<string,unknown>;try{body=JSON.parse(raw);if(!body||typeof body!=="object"||Array.isArray(body))throw new Error();}catch{return json({message:"Ungültige Anfrage"},400);}
 const db=ctx.supabaseAdmin;
 if(body.action==="status"){
  const {error}=await db.from("student_accounts").select("user_id").limit(0);
  return error?json({ready:false},503):json({ready:true});
 }
 if(body.action==="register"){
  if(typeof body.name!=="string"||typeof body.password!=="string")return json({message:"Name und Passwort fehlen"},400);
  let name;try{name=studentName(body.name);}catch(e){return json({message:(e as Error).message},400);}
  if(body.password.length<10||body.password.length>128)return json({message:"Das Passwort muss 10 bis 128 Zeichen lang sein."},400);
  const ip=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
  const {data:allowed,error:limitError}=await db.rpc("claim_student_registration",{p_name_hash:await hash(name.key),p_ip_hash:await hash(ip)});
  if(limitError)return json({message:"Die Schüleranmeldung ist noch nicht vollständig eingerichtet."},503);
  if(!allowed)return json({message:"Zu viele Registrierungen. Bitte versuche es später erneut."},429);
  const {data:created,error:createError}=await db.auth.admin.createUser({email:await studentAlias(name.display),password:body.password,email_confirm:true,app_metadata:{account_type:"student"},user_metadata:{login_name:name.display}});
  if(createError||!created.user)return json({message:"Der Name ist bereits vergeben oder das Konto konnte nicht angelegt werden. Verwende bei Namensgleichheit ein Kürzel."},400);
  const {error:profileError}=await db.from("student_accounts").insert({user_id:created.user.id,login_name:name.display,name_key:name.key});
  if(profileError){await db.auth.admin.deleteUser(created.user.id);return json({message:"Das Konto konnte nicht angelegt werden. Bitte versuche es erneut."},409);}
  return json({created:true},201);
 }
 if(body.action==="reset_password"){
  const token=request.headers.get("authorization")?.match(/^Bearer (.+)$/i)?.[1];
  if(!token)return json({message:"Bitte als Admin anmelden"},401);
  const {data:userData,error:userError}=await db.auth.getUser(token);
  const user=userData?.user;
  if(userError||!user||!user.email||!user.email_confirmed_at)return json({message:"Bitte als Admin anmelden"},401);
  const {data:callerStudent,error:callerError}=await db.from("student_accounts").select("user_id").eq("user_id",user.id).maybeSingle();
  const {data:admins,error:adminError}=await db.from("smv_admins").select("email");
  if(callerError||adminError)return json({message:"Berechtigung konnte nicht geprüft werden"},503);
  if(callerStudent||!(admins??[]).some((a:{email:string})=>a.email.toLowerCase()===user.email!.toLowerCase()))return json({message:"Keine Adminberechtigung"},403);
  if(typeof body.user_id!=="string"||!/^[0-9a-f-]{36}$/i.test(body.user_id)||typeof body.password!=="string"||body.password.length<10||body.password.length>128)return json({message:"Zielkonto und Passwort mit 10 bis 128 Zeichen angeben"},400);
  const {data:target,error:targetError}=await db.from("student_accounts").select("user_id").eq("user_id",body.user_id).maybeSingle();
  if(targetError||!target)return json({message:"Schülerkonto nicht gefunden"},404);
  const {error}=await db.auth.admin.updateUserById(target.user_id,{password:body.password});
  return error?json({message:"Passwort konnte nicht geändert werden"},503):json({updated:true});
 }
 return json({message:"Unbekannte Aktion"},400);
});
export default {
 async fetch(request:Request){
  const origin=request.headers.get("origin");
  if(origin&&!origins.has(origin))return json({message:"Origin nicht zugelassen"},403);
  const headers={"Access-Control-Allow-Origin":origin||"https://smv.daniel-zahnweh.de","Access-Control-Allow-Headers":"authorization, apikey, content-type, x-client-info","Access-Control-Allow-Methods":"POST, OPTIONS","Vary":"Origin","Cache-Control":"no-store"};
  if(request.method==="OPTIONS")return new Response(null,{status:204,headers});
  try{const response=await handler(request);const copy=new Response(response.body,response);for(const [key,value] of Object.entries(headers))copy.headers.set(key,value);return copy;}catch{return Response.json({message:"Schüleranmeldung derzeit nicht erreichbar"},{status:503,headers});}
 }
};
