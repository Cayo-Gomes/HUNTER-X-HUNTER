document.addEventListener('DOMContentLoaded', () => {

    const videoSection = document.getElementById('videoSection');
    const videoModal = document.querySelector('.video-modal');
    const videoClose = document.querySelector('.video-close');
    const modalIframe = videoModal.querySelector('iframe');
    const originalSrc = modalIframe.src;

    // Abrir ao clicar na faixa inteira
    if (videoSection) {
        videoSection.addEventListener('click', function () {
            videoModal.classList.add('active');

            // força autoplay ao abrir
            modalIframe.src = originalSrc.includes('autoplay=1')
                ? originalSrc
                : originalSrc + (originalSrc.includes('?') ? '&' : '?') + 'autoplay=1';
        });
    }

    // Fechar ao clicar no X
    if (videoClose) {
        videoClose.addEventListener('click', function (e) {
            e.stopPropagation(); // evita reabrir
            videoModal.classList.remove('active');
            modalIframe.src = originalSrc; // para o vídeo
        });
    }

    // Fechar clicando fora do vídeo
    videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            modalIframe.src = originalSrc;
        }
    });

});
