// Keep these identity rules identical to the self-contained Edge Function.
export function studentName(input: string) {
 const display=input.normalize("NFKC").trim().replace(/\s+/g," ");
 if(display.length<3||display.length>60||!/^[\p{L}\p{N} ._'’\-]+$/u.test(display))throw new Error("Der Anmeldename braucht 3–60 Zeichen: Buchstaben, Zahlen, Leerzeichen, Punkt, Bindestrich oder Unterstrich.");
 return {display,key:display.toLowerCase()};
}
export async function studentAlias(input:string){
 const {key}=studentName(input);
 const digest=await crypto.subtle.digest("SHA-256",new TextEncoder().encode("smv-student-v1:"+key));
 return "smv-student-"+Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,"0")).join("").slice(0,48)+"@students.invalid";
}
export function validateStudentPassword(password:string){if(password.length<10||password.length>128)throw new Error("Das Passwort muss 10 bis 128 Zeichen lang sein.");}
