// Configuração do Cronômetro de Oferta
function startCountdown() {
    const display = document.querySelector('#countdown');
    let duration;

    // Tenta recuperar o tempo salvo no navegador do cliente
    const savedTime = localStorage.getItem('timer_pronto_entrega');
    const now = Math.floor(Date.now() / 1000);

    if (savedTime && savedTime > now) {
        // Se já existe um cronômetro rodando, calcula quanto falta
        duration = savedTime - now;
    } else {
        // Se não existe, define 15 minutos (900 segundos)
        duration = 900; 
        localStorage.setItem('timer_pronto_entrega', now + duration);
    }

    let timer = duration, minutes, seconds;

    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "🔥 A oferta encerra em: " + minutes + ":" + seconds;

        if (--timer < 0) {
            // Quando o tempo acaba, ele reinicia para novos visitantes
            localStorage.removeItem('timer_pronto_entrega');
            timer = 900;
        }
    }, 1000);
}

// Inicia assim que a página carrega
window.onload = function () {
    startCountdown();
};