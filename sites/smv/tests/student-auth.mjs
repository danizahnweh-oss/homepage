import ts from 'typescript';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const compile=s=>ts.transpileModule(s,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const load=source=>import('data:text/javascript;base64,'+Buffer.from(compile(source)).toString('base64'));
const client=await load(readFileSync('app/student-identity.ts','utf8'));
let state={};const created=[],inserted=[],deleted=[],updated=[];
const uid={new:'11111111-1111-1111-1111-111111111111',student:'22222222-2222-2222-2222-222222222222',admin:'33333333-3333-3333-3333-333333333333',other:'44444444-4444-4444-4444-444444444444'};
class Query{
 constructor(table){this.table=table;this.filters={};}
 select(){return this;}
 eq(key,value){this.filters[key]=value;return this;}
 limit(){return Promise.resolve({data:[],error:state.schemaMissing?{}:null});}
 insert(row){inserted.push(row);return Promise.resolve({error:state.profileFailure?{}:null});}
 maybeSingle(){return Promise.resolve({data:this.table==='student_accounts'&&[uid.new,uid.student].includes(this.filters.user_id)?{user_id:this.filters.user_id}:null,error:null});}
 then(ok,bad){return Promise.resolve({data:this.table==='smv_admins'?[{email:'admin@test.invalid'},{email:'student@test.invalid'}]:null,error:null}).then(ok,bad);}
}
const db={from:table=>new Query(table),rpc:async()=>({data:!state.throttled,error:null}),auth:{admin:{createUser:async attrs=>{created.push(attrs);return {data:{user:{id:uid.new}},error:null}},deleteUser:async id=>{deleted.push(id);return {error:null}},updateUserById:async(id,attrs)=>{updated.push({id,attrs});return {error:null}}},getUser:async token=>({data:{user:token==='admin-token'?{id:uid.admin,email:'admin@test.invalid',email_confirmed_at:'2026-01-01'}:token==='student-token'?{id:uid.student,email:'student@test.invalid',email_confirmed_at:'2026-01-01'}:null},error:null})}};
globalThis.__studentAuthMock={withSupabase:(options,handler)=>{assert.equal(options.auth,'publishable');return req=>handler(req,{supabaseAdmin:db})}};
let source=readFileSync('supabase/functions/student-accounts/index.ts','utf8').replace('import { withSupabase } from "npm:@supabase/server@^1";','const {withSupabase}=globalThis.__studentAuthMock;');
const server=await load(source);
for(const input of [' Max M. ','MAX M.','Ｍａｘ M.','Max  M.'])assert.equal(await client.studentAlias(input),await server.studentAlias('max m.'));
assert.notEqual(await client.studentAlias('Test A'),await client.studentAlias('Test B'));
assert.ok((await client.studentAlias('Test A')).split('@')[0].length<=64);
for(const bad of ['ab','<script>','x@test.invalid','A\u202eB', 'x'.repeat(61)])assert.throws(()=>client.studentName(bad));
assert.throws(()=>client.validateStudentPassword('short'));client.validateStudentPassword('long-enough-password');
async function call(body,token,origin='https://smv.daniel-zahnweh.de'){return server.default.fetch(new Request('https://edge.test.invalid',{method:'POST',headers:{origin,...(token?{authorization:'Bearer '+token}:{})},body:JSON.stringify(body)}));}
for(const origin of ['https://daniel-zahnweh.de','https://www.daniel-zahnweh.de','https://smv.daniel-zahnweh.de']){const response=await call({action:'status'},null,origin);assert.equal(response.status,200);assert.equal(response.headers.get('Access-Control-Allow-Origin'),origin);}
assert.equal((await call({action:'status'})).status,200);state.schemaMissing=true;assert.equal((await call({action:'status'})).status,503);state={};
assert.equal((await server.default.fetch(new Request('https://edge.test.invalid',{method:'OPTIONS',headers:{origin:'https://smv.daniel-zahnweh.de'}}))).status,204);
assert.equal((await call({action:'status'},null,'https://attacker.invalid')).status,403);
assert.equal((await call({action:'register',name:'Test A',password:'short'})).status,400);assert.equal(created.length,0);
state.throttled=true;assert.equal((await call({action:'register',name:'Test A',password:'long-test-password'})).status,429);assert.equal(created.length,0);state={};
assert.equal((await call({action:'register',name:' Test  A ',password:'long-test-password',role:'admin',user_id:uid.admin})).status,201);
assert.deepEqual(created[0].app_metadata,{account_type:'student'});assert.equal(created[0].email_confirm,true);assert.equal(created[0].email,await client.studentAlias('test a'));assert.equal(inserted[0].login_name,'Test A');assert.equal(inserted[0].user_id,uid.new);assert.equal(inserted[0].password,undefined);
state.profileFailure=true;assert.equal((await call({action:'register',name:'Test A',password:'long-test-password'})).status,409);assert.deepEqual(deleted,[uid.new]);state={};
assert.equal((await call({action:'reset_password',user_id:uid.student,password:'long-test-password'})).status,401);
assert.equal((await call({action:'reset_password',user_id:uid.student,password:'long-test-password'},'forged-token')).status,401);
assert.equal((await call({action:'reset_password',user_id:uid.student,password:'long-test-password'},'student-token')).status,403);
assert.equal((await call({action:'reset_password',user_id:uid.admin,password:'long-test-password'},'admin-token')).status,404);assert.equal(updated.length,0);
assert.equal((await call({action:'reset_password',user_id:uid.student,password:'long-test-password'},'admin-token')).status,200);assert.equal(updated[0].id,uid.student);
console.log('PASS: Unicode/case/whitespace identity equivalence, identifier length, validation, CORS, readiness, registration throttles, fixed student role, cleanup, authenticated admin-only reset and no admin target reset');
