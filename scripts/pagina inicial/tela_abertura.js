document.addEventListener("DOMContentLoaded", function() {
    const splash = document.getElementById('splash-screen');
    
    // Verifica se já passou pela intro nesta sessão
    if (!sessionStorage.getItem('introPassou')) {
        
        // Espera o tempo das duas animações (3s + 3s = 6s)
        setTimeout(() => {
            splash.classList.add('fade-out-splash');
            
            // Marca no navegador que a intro já rodou
            sessionStorage.setItem('introPassou', 'true');
            
            // Remove do DOM após o fade out para não pesar
            setTimeout(() => {
                splash.remove();
            }, 1000);
            
        }, 6500); // 6.5 segundos de duração total
        
    } else {
        // Se já viu a intro, remove ela imediatamente
        splash.remove();
    }
});