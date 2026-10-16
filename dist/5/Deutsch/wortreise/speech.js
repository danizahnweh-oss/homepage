'use strict';
// Pre-generated Miriam recordings are served with the site; no speech service runs in visitors' browsers.
const WortreiseSpeech = (() => {
 const storageKey='wortreise-speech-v1', allowedRates=[0.8,0.9,1,1.1];
 let rate=1, active=null, phase='idle', status='', sequence=0;
 try {const saved=JSON.parse(localStorage.getItem(storageKey));if(allowedRates.includes(saved?.rate))rate=saved.rate;}catch{}
 const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function update(){
  const pause=document.querySelector('[data-speech-action="pause"]');
  if(pause){pause.disabled=phase==='idle'||phase==='loading';pause.textContent=phase==='paused'?'Weiterhören':'Pause';pause.setAttribute('aria-pressed',String(phase==='paused'));}
  const stopButton=document.querySelector('[data-speech-action="stop"]');if(stopButton)stopButton.disabled=phase==='idle';
  const startButton=document.querySelector('[data-speech-action="read"]');if(startButton)startButton.textContent=phase==='idle'?'▶ Vorlesen mit Miriam':'↺ Von vorn vorlesen';
  const feedback=document.querySelector('#speech-status');if(feedback)feedback.textContent=status;
 }
 function stop(message=''){
  sequence++;
  if(active){active.pause();active.removeAttribute('src');active.load();active=null;}
  phase='idle';status=message;update();
 }
 function start(id){
  if(!lessons.some(l=>l.id===id))return;
  stop();const token=sequence;
  const audio=new Audio('audio/miriam/'+encodeURIComponent(id)+'.mp3');active=audio;
  audio.preload='none';audio.playbackRate=rate;audio.preservesPitch=true;
  const current=()=>token===sequence&&active===audio;
  const fail=()=>{if(!current())return;stop('Die Aufnahme konnte nicht geladen werden. Prüfe deine Internetverbindung und versuche es noch einmal.');};
  audio.addEventListener('playing',()=>{if(!current())return;phase='speaking';status='Miriam liest dir vor.';update();});
  audio.addEventListener('waiting',()=>{if(!current())return;status='Die Aufnahme lädt …';update();});
  audio.addEventListener('ended',()=>{if(current())stop('Fertig vorgelesen.');});
  audio.addEventListener('error',fail);
  phase='loading';status='Miriams Aufnahme lädt …';update();
  audio.play().catch(fail);
 }
 function pause(){
  if(!active||phase==='idle'||phase==='loading')return;
  if(phase==='paused'){
   const audio=active,token=sequence;phase='loading';status='Es geht weiter …';update();
   audio.play().catch(()=>{if(token===sequence)stop('Bitte starte die Aufnahme noch einmal.');});
  }else{active.pause();phase='paused';status='Pausiert. Mit „Weiterhören“ geht es weiter.';update();}
 }
 function panel(id){
  return `<section class="speech-panel" aria-label="Vorlesen mit Miriam"><div class="speech-controls"><button class="button" data-speech-action="read" data-lesson="${escape(id)}">▶ Vorlesen mit Miriam</button><button class="button secondary" data-speech-action="pause" aria-pressed="false" disabled>Pause</button><button class="button secondary" data-speech-action="stop" disabled>Stopp</button></div><p id="speech-status" class="speech-status" role="status" aria-live="polite"></p><details class="voice-settings"><summary>Vorlesetempo einstellen</summary><div class="voice-fields"><div><label for="reading-rate">Dein Vorlesetempo</label><select id="reading-rate"><option value="0.8">Langsam</option><option value="0.9">Ruhig</option><option value="1">Normal</option><option value="1.1">Etwas schneller</option></select></div></div><p class="notice">Miriam ist eine KI-Vorlesestimme. Dein Tempo merken wir uns in diesem Browser.</p></details></section>`;
 }
 function refresh(){const select=document.querySelector('#reading-rate');if(select)select.value=String(rate);update();}
 document.addEventListener('change',event=>{
  if(event.target.id!=='reading-rate')return;
  const value=Number(event.target.value);if(!allowedRates.includes(value))return;
  rate=value;if(active)active.playbackRate=rate;
  try{localStorage.setItem(storageKey,JSON.stringify({rate}));}catch{status='Das Tempo gilt nur für diese Sitzung.';update();}
 });
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-speech-action]');if(!button)return;
  if(button.dataset.speechAction==='read')start(button.dataset.lesson);
  if(button.dataset.speechAction==='pause')pause();
  if(button.dataset.speechAction==='stop')stop('Vorlesen gestoppt.');
 });
 return {panel,refresh,stop};
})();
