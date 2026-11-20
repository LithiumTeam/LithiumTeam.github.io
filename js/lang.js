const html = document.documentElement;
let lang = localStorage.getItem('li-team-lang') || 'en';
let auto_font =  document.querySelector('h3.auto-font');

function applyLang(l) {
    document.querySelectorAll('.t').forEach(el => {
        el.textContent = el.dataset[l];
    });
    html.lang = l;
    html.dir = l === 'en' ? 'ltr' : 'rtl';
    document.getElementById('langLabel').textContent = l === 'en' ? 'FA' : 'EN';
    document.title = l === 'en' ? 'Lithium Team' : 'تیم لیتیوم';
    localStorage.setItem('li-team-lang', l);
    if (l==='en') {
        auto_font.style.fontSize = '16px';
        auto_font.style.marginTop = '14px';
        document.querySelector('a.auto-space').style.marginTop = '8px';
    } else {
        auto_font.style.marginTop = '14px';
    }
}

function toggleLang() {
    lang = lang === 'en' ? 'fa' : 'en';
    applyLang(lang);
}

applyLang(lang);