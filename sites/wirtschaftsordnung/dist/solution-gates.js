/* Lösungsvorschläge werden erst nach einer eigenen, nicht leeren Eingabe angeboten. */
const solutionDefinitions=new Map();
function solutionReady(keys){return keys.every(key=>String(state.notes[key]??'').trim().length>0);}
function solutionGateBody(id,definition){
  if(solutionReady(definition.keys))return `<details><summary>${esc(definition.label)}</summary>${definition.body}</details>`;
  const hint=definition.keys.length>1?'Schreibe zuerst zu beiden Wirtschaftsmodellen eine eigene Antwort.':'Schreibe zuerst eine eigene Antwort in das Textfeld.';
  return `<div class="solution-locked"><button type="button" class="secondary" disabled aria-describedby="${id}-hint">Lösungsvorschlag noch gesperrt</button><p class="small" id="${id}-hint">${hint}</p></div>`;
}
function solutionGate(keys,body,label='Mit einem Lösungsvorschlag vergleichen'){
  const id='solution-'+keys.join('-').replace(/[^a-z0-9-]/g,'-');
  const definition={keys,body,label};solutionDefinitions.set(id,definition);
  return `<div class="solution-gate" id="${id}" data-ready="${solutionReady(keys)}">${solutionGateBody(id,definition)}</div>`;
}
function refreshSolutionGates(changedKey){
  for(const [id,definition] of solutionDefinitions){
    if(!definition.keys.includes(changedKey))continue;
    const element=document.getElementById(id);if(!element)continue;
    const ready=solutionReady(definition.keys);if(element.dataset.ready===String(ready))continue;
    element.dataset.ready=String(ready);element.innerHTML=solutionGateBody(id,definition);
    announce(ready?'Der Lösungsvorschlag ist jetzt verfügbar.':'Der Lösungsvorschlag ist wieder gesperrt. Ergänze zuerst deine Antwort.');
  }
}
