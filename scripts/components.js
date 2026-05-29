async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;

    // reaplica reveal nos novos elementos
    activateReveal();
}

loadComponent('menu-placeholder', 'components/menu.html');
loadComponent('footer-placeholder', 'components/footer.html');