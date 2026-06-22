let _t = {};

async function setLang(lang) {
    const res = await fetch(`translations/${lang}.json`);
    _t = await res.json();
    applyTranslations();

    document.querySelectorAll('.language-switch button').forEach(btn => {
        btn.classList.toggle('lang-active', btn.dataset.lang === lang);
    });

    localStorage.setItem('lang', lang);
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = resolveKey(_t, el.dataset.i18n);
        if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const val = resolveKey(_t, el.dataset.i18nHtml);
        if (val) el.innerHTML = val;
    });

    const title = resolveKey(_t, 'meta.title');
    if (title) document.title = title;
}

function resolveKey(obj, key) {
    return key.split('.').reduce((o, k) => o?.[k], obj) ?? null;
}

window.applyTranslations = applyTranslations;

document.addEventListener('DOMContentLoaded', () => {
    setLang(localStorage.getItem('lang') || 'pt');
});
