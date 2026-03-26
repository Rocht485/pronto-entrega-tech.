// Função para iniciar a contagem regressiva
function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;

    // Atualiza o cronômetro a cada 1 segundo
    const interval = setInterval(function () {
        // Cálculos matemáticos para horas, minutos e segundos
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = Math.floor(timer % 60);

        // Adiciona um "0" na frente se o número for menor que 10
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Exibe o tempo no elemento HTML com id="timer"
        display.textContent = hours + ":" + minutes + ":" + seconds;

        // Quando o tempo acaba, ele reinicia a contagem (Efeito Loop de Urgência)
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Inicia o script assim que a janela carregar
window.onload = function () {
    // Definimos 25 minutos de oferta (25 * 60 segundos)
    const twentyFiveMinutes = 60 * 25;
    const display = document.querySelector('#timer');

    // Verifica se o elemento "timer" existe na página antes de iniciar
    if (display) {
        startCountdown(twentyFiveMinutes, display);
    }
};

// Log de confirmação no console para ajudar nos testes
console.log("🚀 Pronto Entrega Tech: Script de Urgência Ativado!");