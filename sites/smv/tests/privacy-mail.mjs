import ts from 'typescript';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const sent=[],selections=[];
class Query {
 constructor(table){this.table=table;}
 update(){return this;}
 eq(){return this;}
 select(fields){selections.push([this.table,fields]);return this;}
 maybeSingle(){return Promise.resolve({data:{id:'44444444-4444-4444-4444-444444444444',booking_id:'55555555-5555-5555-5555-555555555555'},error:null});}
 single(){return Promise.resolve({data:{id:'55555555-5555-5555-5555-555555555555',status:'pending',requester_name:'CONFIDENTIAL_NAME',requester_email:'confidential-user@test.invalid',purpose:'CONFIDENTIAL_PURPOSE',start_at:'2030-01-07T08:05:00Z'},error:null});}
 then(ok,bad){return Promise.resolve({data:this.table==='smv_admins'?[{email:'admin-a@test.invalid'},{email:'admin-b@test.invalid'}]:null,error:null}).then(ok,bad);}
}
globalThis.Deno={env:{get:name=>name==='SMV_SMTP_USER'?'sender@test.invalid':name==='SMV_SMTP_PASSWORD'?'test-password':undefined}};
globalThis.__smvMailTest={withSupabase:(options,handler)=>{assert.equal(options.auth,'secret');return req=>handler(req,{supabaseAdmin:{from:table=>new Query(table)}})},nodemailer:{createTransport:options=>{assert.equal(options.port,465);assert.equal(options.secure,true);return {sendMail:async message=>{sent.push(message)}}}}};
let source=readFileSync('supabase/functions/notify-admins/index.ts','utf8');
source=source.replace('import { withSupabase } from "npm:@supabase/server@^1";','const {withSupabase}=globalThis.__smvMailTest;').replace('import nodemailer from "npm:nodemailer@^9";','const nodemailer=globalThis.__smvMailTest.nodemailer;');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const fn=(await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'))).default;
const invalid=await fn.fetch(new Request('https://test.invalid',{method:'POST',body:JSON.stringify({type:'INSERT',table:'bookings',schema:'public',record:{id:'44444444-4444-4444-4444-444444444444'}})}));assert.equal(invalid.status,400);assert.equal(sent.length,0);
const response=await fn.fetch(new Request('https://test.invalid',{method:'POST',body:JSON.stringify({type:'INSERT',table:'booking_notifications',schema:'public',record:{id:'44444444-4444-4444-4444-444444444444'}})}));assert.equal(response.status,200);assert.equal(sent.length,1);
assert.deepEqual(selections.find(([table])=>table==='bookings'),['bookings','id,status']);
const message=sent[0];assert.equal(message.to,undefined);assert.equal(message.replyTo,undefined);assert.equal(message.bcc,'admin-a@test.invalid, admin-b@test.invalid');assert.match(message.text,/https:\/\/smv.daniel-zahnweh.de\//);
assert.doesNotMatch(JSON.stringify(message),/CONFIDENTIAL|confidential-user|2030|08:05/);
console.log('PASS: secret-auth wrapper, invalid event rejected, no requester details selected or emailed, BCC recipients and correct site URL');
