let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        events: {
            onStateChange: function (event) {
                if (event.data === YT.PlayerState.ENDED) {
                    closeVideoModal();
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const videoSection = document.getElementById('videoSection');
    const videoModal = document.querySelector('.video-modal');
    const videoClose = document.querySelector('.video-close');

    function openVideoModal() {
        videoModal.classList.add('active');
        document.body.classList.add('modal-open');
        document.documentElement.classList.add('modal-open');

        if (player) {
            player.unMute();      // garante som
            player.playVideo();   // inicia automático
        }
    }

    window.closeVideoModal = function () {
        videoModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        document.documentElement.classList.remove('modal-open');

        if (player) {
            player.stopVideo();
        }
    };

    videoSection.addEventListener('click', openVideoModal);

    videoClose.addEventListener('click', function (e) {
        e.stopPropagation();
        closeVideoModal();
    });

    videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });

});
