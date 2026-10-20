'use strict';
const WortreiseLanguage = (() => {
  const key = 'wortreise-explanation-language-v1';
  const languages = [
    {code:'de', label:'Deutsch', name:'Deutsch'},
    {code:'en', label:'English · Englisch', name:'Englisch'},
    {code:'tr', label:'Türkçe · Türkisch', name:'Türkisch'},
    {code:'ar', label:'العربية · Arabisch', name:'Arabisch'},
    {code:'uk', label:'Українська · Ukrainisch', name:'Ukrainisch'}
  ];
  let activeAudio = null;
  function stopAudio() {
    if (activeAudio) { activeAudio.pause(); activeAudio.currentTime = 0; activeAudio = null; }
  }
  let selected = 'de';
  let persistent = true;
  try {
    const saved = localStorage.getItem(key);
    if (languages.some(language => language.code === saved)) selected = saved;
  } catch { persistent = false; }
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const tools = document.querySelector('#language-tools-template').content.firstElementChild.cloneNode(true);
  const picker = tools.querySelector('#explanation-language');
  picker.innerHTML = languages.map(language => `<option value="${language.code}" lang="${language.code}">${language.label}</option>`).join('');
  picker.value = selected;

  function fill(element) {
    const text = WortreiseLanguageData[element.dataset.languageHelp]?.[selected];
    element.hidden = selected === 'de' || !text;
    const paragraph = element.querySelector('[data-language-text]');
    paragraph.lang = selected;
    paragraph.dir = selected === 'ar' ? 'rtl' : 'ltr';
    paragraph.textContent = text || '';
    const audio = element.querySelector('audio');
    audio.pause();
    if (text && selected !== 'de') {
      audio.src = `audio/languages/${selected}/${element.dataset.languageHelp}.mp3?v=1`;
      audio.setAttribute('aria-label', `Sprachhilfe auf ${languages.find(language => language.code === selected).name} vorlesen`);
      audio.lang = selected;
    } else { audio.removeAttribute('src'); }
    element.querySelector('[data-language-audio-label]').textContent = `Sprachhilfe auf ${languages.find(language => language.code === selected).name} anhören`;
    element.querySelector('[data-language-audio-error]').textContent = '';
    element.querySelector('[data-language-title]').textContent = `Sprachhilfe · ${languages.find(language => language.code === selected).name}`;
  }
  function panel(id, collapsible = false) {
    if (!WortreiseLanguageData[id]) return '';
    const element = document.createElement(collapsible ? 'details' : 'section');
    element.className = 'language-help';
    element.dataset.languageHelp = id;
    element.setAttribute('aria-label', 'Sprachhilfe zum Thema');
    element.innerHTML = collapsible
      ? '<summary data-language-title></summary><p data-language-text></p>'
      : '<h3 data-language-title></h3><p data-language-text></p>';
    element.insertAdjacentHTML('beforeend', '<div class="language-audio"><p data-language-audio-label class="language-audio-label"></p><audio controls preload="none">Dein Browser unterstützt den Audioplayer nicht.</audio><p class="notice">KI-Vorlesestimme. Starte oder pausiere die Aufnahme im Player.</p><p data-language-audio-error class="notice" role="status"></p></div>');
    fill(element);
    return element.outerHTML;
  }
  picker.addEventListener('change', () => {
    stopAudio();
    WortreiseSpeech.stop();
    selected = picker.value;
    try { localStorage.setItem(key, selected); persistent = true; }
    catch { persistent = false; }
    document.querySelectorAll('[data-language-help]').forEach(fill);
    tools.querySelector('#language-status').textContent = selected === 'de'
      ? 'Die zusätzlichen Sprachhilfen sind ausgeblendet.'
      : `Sprachhilfen auf ${languages.find(language => language.code === selected).name}. ${persistent ? 'Auswahl in diesem Browser gespeichert.' : 'Die Auswahl gilt nur für diese Sitzung.'}`;
  });
  document.addEventListener('play', event => {
    const audio = event.target;
    if (!audio.matches?.('.language-audio audio')) return;
    if (activeAudio && activeAudio !== audio) stopAudio();
    WortreiseSpeech.stop();
    activeAudio = audio;
    audio.closest('.language-audio').querySelector('[data-language-audio-error]').textContent = '';
  }, true);
  document.addEventListener('error', event => {
    const audio = event.target;
    if (!audio.matches?.('.language-audio audio')) return;
    audio.closest('.language-audio').querySelector('[data-language-audio-error]').textContent = 'Die Aufnahme konnte nicht geladen werden. Prüfe deine Internetverbindung und starte sie erneut.';
  }, true);
  document.addEventListener('click', event => {
    if (event.target.closest('[data-speech-action="read"]')) stopAudio();
  });
  window.addEventListener('hashchange', stopAudio);
  window.addEventListener('pagehide', stopAudio);
  document.addEventListener('input', event => { if (event.target.id === 'search') stopAudio(); });
  function mount() {
    if (activeAudio && !activeAudio.isConnected) stopAudio();
    const speech = document.querySelector('.fips-guide:not(.fips-writing) .fips-speech');
    if (!speech) return;
    let heading = speech.querySelector('.fips-heading');
    if (!heading) {
      heading = document.createElement('div');
      heading.className = 'fips-heading';
      heading.append(speech.querySelector('strong'));
      speech.prepend(heading);
    }
    heading.append(tools);
  }
  return {panel, mount};
})();
