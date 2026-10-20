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
    fill(element);
    return element.outerHTML;
  }
  picker.addEventListener('change', () => {
    selected = picker.value;
    try { localStorage.setItem(key, selected); persistent = true; }
    catch { persistent = false; }
    document.querySelectorAll('[data-language-help]').forEach(fill);
    tools.querySelector('#language-status').textContent = selected === 'de'
      ? 'Die zusätzlichen Sprachhilfen sind ausgeblendet.'
      : `Sprachhilfen auf ${languages.find(language => language.code === selected).name}. ${persistent ? 'Auswahl in diesem Browser gespeichert.' : 'Die Auswahl gilt nur für diese Sitzung.'}`;
  });
  function mount() {
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
