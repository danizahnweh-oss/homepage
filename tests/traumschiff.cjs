const assert=require('node:assert/strict');
const {chromium,webkit}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const fs=require('node:fs');
const base=process.env.BASE_URL||'http://127.0.0.1:8765';
const axe=process.env.AXE_PATH;
const out=process.env.QA_DIR||'/tmp/traumschiff-qa';
fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'chrome'});
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const go=async id=>{await page.goto(base+'/10/Kreuzfahrt/#'+id);await page.locator('h1').waitFor();};
 await go('start');await page.screenshot({path:out+'/desktop-start.png',fullPage:true});
 await page.locator('[data-note=start]').fill('Wir sind skeptisch und verlangen Belege.');await page.reload();assert.equal(await page.locator('[data-note=start]').inputValue(),'Wir sind skeptisch und verlangen Belege.');
 await go('wirtschaft');assert.match(await page.locator('main').innerText(),/Noch gesperrt/);
 await go('diskussion');assert.match(await page.locator('main').innerText(),/Unter welchen Bedingungen/);
 await go('bruecke');assert.match(await page.locator('main').innerText(),/0 von 3/);
 await go('basis');await page.locator('#basis-form button').click();assert.match(await page.locator('#basis-feedback').innerText(),/Prüft/);
 for(const [n,v]of [['b1','wirtschaft'],['b2','umwelt'],['b3','soziales']])await page.locator(`[name=${n}][value=${v}]`).check();
 await page.locator('#basis-form button').click();assert.match(await page.locator('#basis-feedback').innerText(),/Kompass stimmt/);
 for(const [id,code]of [['umwelt','314'],['wirtschaft','428'],['soziales','256']]){
  await go(id);
  await page.locator('[name=code]').fill(code);await page.locator('#code-form button').click();assert.match(await page.locator('#code-feedback').innerText(),/Prüft zuerst/);
  await page.locator('#station-form button').click();assert.match(await page.locator('#station-feedback').innerText(),/0 von 3/);
  await page.getByText('Hilfestufe 1 · Den richtigen Ansatz finden',{exact:true}).click();
  assert.equal(await page.locator('details').filter({hasText:'Hilfestufe 1 · Den richtigen Ansatz finden'}).getAttribute('open'),'');
  const wrong=await page.locator('[name=q0]').first().getAttribute('value');await page.locator(`[name=q0][value="${wrong}"]`).check();
  for(let i=0;i<3;i++)await page.locator(`[name=q${i}][value="${code[i]}"]`).check();
  await page.locator('#station-form button').click();assert.match(await page.locator('#station-feedback').innerText(),/Alle Antworten/);
  await page.locator(`[data-note=${id}]`).fill('Unser Befund ist begründet; wir nennen Verbesserungen und ihre Grenzen.');
  await page.locator('[name=code]').fill(code);await page.locator('#code-form button').click();assert.match(await page.locator('#code-feedback').innerText(),/Gegenprobe/);
  await page.locator('[data-note=calc-'+id+']').fill('0');await page.locator('#calc-form button').click();assert.match(await page.locator('#calc-feedback').innerText(),/passt noch nicht/);
  await page.locator('[data-note=calc-'+id+']').fill({umwelt:'80',wirtschaft:'30',soziales:'4,28'}[id]);await page.locator('#calc-form button').click();assert.match(await page.locator('#calc-feedback').innerText(),/stimmt/);
  await page.locator('[data-note='+id+'-stat]').fill('Statistik belegt einen Unterschied, aber keine pauschale Nachhaltigkeit.');
  await page.locator('[name=code]').fill('000');await page.locator('#code-form button').click();assert.match(await page.locator('#code-feedback').innerText(),/passt noch nicht/);
  await page.locator('[name=code]').fill(code);await page.locator('#code-form button').click();await page.locator('.unlocked').waitFor();
  await page.reload();assert.equal(await page.locator('.unlocked').count(),1);
 }
 await go('bruecke');for(const id of ['land','lohn','invest'])await page.locator(`[data-measure=${id}]`).check();
 assert.match(await page.locator('#budget-feedback').innerText(),/30.000 €.*50.000 €/);
 await page.locator('[data-measure=klima]').check();assert.match(await page.locator('#budget-feedback').innerText(),/überschritten um 20.000/);await page.locator('[data-measure=klima]').uncheck();
 await page.locator('[data-note=crisis-result]').fill('760000');await page.locator('#crisis-form button').click();assert.match(await page.locator('#crisis-feedback').innerText(),/Prüft/);
 await page.locator('[data-note=crisis-result]').fill('80000');await page.locator('#crisis-form button').click();assert.match(await page.locator('#crisis-feedback').innerText(),/80.000/);
 await page.locator('[data-note=krise]').fill('Wir akzeptieren weniger Reserve und schützen Ruhezeiten.');await page.reload();assert.equal(await page.locator('[data-note=crisis-result]').inputValue(),'80000');
 await page.locator('[data-note=empfehlung]').fill('Nur unter Bedingungen: Landstrom, Ruhezeiten und ein tragfähiger Finanzierungsplan.');
 await page.locator('[data-note=konflikt]').fill('Höhere Kosten können zu höheren Reisepreisen führen.');
 await page.locator('[data-note=pruefung]').fill('Wir verlangen Emissionsdaten und unabhängige Kontrollen.');
 await page.reload();assert.equal(await page.locator('[data-measure]:checked').count(),3);
 await go('ergebnis');assert.match(await page.locator('main').innerText(),/3 von 3/);assert.match(await page.locator('main').innerText(),/Nur unter Bedingungen/);
 await page.pdf({path:out+'/team-logbuch.pdf',format:'A4',printBackground:true});
 let scans=[];
 for(const width of [1440,1024,768,390,320]){
  await page.setViewportSize({width,height:1000});
  for(const id of ['start','basis','umwelt','wirtschaft','soziales','bruecke','diskussion','quellen','ergebnis']){
   await go(id);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),`Overflow ${width} ${id}`);
   if(axe&&width===1024){await page.addScriptTag({path:axe});const r=await page.evaluate(async()=>await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));scans.push({id,violations:r.violations.map(x=>({id:x.id,impact:x.impact,nodes:x.nodes.map(n=>n.target)}))});}
  }
  if(width===768||width===390){await go('umwelt');await page.screenshot({path:out+`/station-${width}.png`,fullPage:true});}
 }
 fs.writeFileSync(out+'/axe-results.json',JSON.stringify(scans,null,2));assert.equal(scans.flatMap(x=>x.violations).length,0,JSON.stringify(scans));
 await page.setViewportSize({width:1024,height:768});await page.goto(base+'/10/Kreuzfahrt/');await page.reload();await page.keyboard.press('Tab');assert.match(await page.locator(':focus').innerText(),/Zum Inhalt/);await page.keyboard.press('Enter');assert.equal(await page.locator(':focus').getAttribute('id'),'main');
 await page.locator('#reset').click();await page.keyboard.press('Escape');assert.equal(await page.locator('#reset-dialog').evaluate(x=>x.open),false);
 await page.locator('#reset').click();await page.locator('#confirm-reset').click();await page.waitForFunction(()=>document.querySelector('#progress-label').textContent.startsWith('0 von 3'));assert.match(await page.locator('#progress-label').innerText(),/0 von 3/);assert.equal(await page.locator('[data-note=start]').inputValue(),'');
 const isolated=await browser.newContext();const p2=await isolated.newPage();await p2.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage disabled')}})});await p2.goto(base+'/10/Kreuzfahrt/');assert.match(await p2.locator('#storage').innerText(),/nicht möglich/);await p2.getByRole('link',{name:'Mission beginnen'}).click();await p2.waitForFunction(()=>document.querySelector('h1').textContent.includes('Drei Fragen'));assert.match(await p2.locator('h1').innerText(),/Drei Fragen/);await isolated.close();
 for(const path of ['/','/Q12/Fabrik/','/5/Deutsch/wortreise/']){const r=await page.goto(base+path);assert.equal(r.status(),200,path)}
 assert.equal(errors.length,0,JSON.stringify(errors));await browser.close();
 let webkitResult='not run';
 try{const b=await webkit.launch({headless:true});const p=await b.newPage({viewport:{width:768,height:1024}});await p.goto(base+'/10/Kreuzfahrt/');await p.getByRole('link',{name:'Mission beginnen'}).click();await p.locator('[name=b1][value=wirtschaft]').check();assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await b.close();webkitResult='passed';}catch(e){webkitResult='unavailable: '+e.message.split('\n')[0];}
 console.log(JSON.stringify({fullGame:'passed',storageReloadReset:'passed',blockedStorage:'passed',keyboard:'passed',viewports:[1440,1024,768,390,320],axeScans:scans.length,axeViolations:0,existingRoutes:'passed',jsErrors:errors,webkit:webkitResult},null,2));
})().catch(e=>{console.error(e);process.exit(1)});
