document.addEventListener('DOMContentLoaded', () => {
    const videoSection = document.getElementById('videoSection');
    const videoModal = document.querySelector('.video-modal');
    const videoClose = document.querySelector('.video-close');
    const heroVideo = document.querySelector('.hero-video');
    const modalVideo = document.querySelector('.modal-video'); // O vídeo que está dentro do modal

    // Garante hero sempre mutado e rodando ao carregar
    if (heroVideo) {
        heroVideo.muted = true;
        heroVideo.play().catch(() => {});
    }

    // Função para Abrir o Modal
    function openVideoModal() {
        videoModal.classList.add('active');
        document.body.classList.add('modal-open');

        if (heroVideo) {
            heroVideo.pause();
        }

        if (modalVideo) {
            modalVideo.currentTime = 0; // Começa do início
            modalVideo.play().catch(error => {
                console.log("Autoplay bloqueado pelo navegador, o usuário precisa interagir.");
            });
        }
    }

    // Função para Fechar o Modal (Global para poder ser chamada de qualquer lugar)
    window.closeVideoModal = function () {
        videoModal.classList.remove('active');
        document.body.classList.remove('modal-open');

        if (modalVideo) {
            modalVideo.pause(); // Para o som e o vídeo
            modalVideo.currentTime = 0; // Reseta para o início
        }

        if (heroVideo) {
            heroVideo.play().catch(() => {});
        }
    };

    // --- EVENTOS ---

    // Abre ao clicar na seção/preview
    videoSection.addEventListener('click', (e) => {
        // Evita abrir se clicar no botão de fechar (que está dentro da section)
        if (!e.target.classList.contains('video-close')) {
            openVideoModal();
        }
    });

    // Fecha ao clicar no botão X
    videoClose.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique "vaze" para a section e reabra o vídeo
        closeVideoModal();
    });

    // Fecha ao clicar fora do vídeo (no fundo escuro do modal)
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });

    // FECHA SOZINHO QUANDO O VÍDEO TERMINA
    if (modalVideo) {
        modalVideo.addEventListener('ended', () => {
            closeVideoModal();
        });
    }
});
