const html = document.documentElement;
let lang = localStorage.getItem('li-team-lang') || 'en';

function applyLang(l) {
    document.querySelectorAll('.t').forEach(el => {
        el.textContent = el.dataset[l];
    });
    html.lang = l;
    html.dir = l === 'en' ? 'ltr' : 'rtl';
    document.getElementById('langLabel').textContent = l === 'en' ? 'FA' : 'EN';
    document.title = l === 'en' ? 'Lithium Team' : 'تیم لیتیوم';
    localStorage.setItem('li-team-lang', l);
}

function toggleLang() {
    lang = lang === 'en' ? 'fa' : 'en';
    applyLang(lang);
}

applyLang(lang);