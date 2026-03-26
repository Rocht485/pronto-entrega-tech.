// Função genérica para contagem regressiva
function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    var intervalId = setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId); // Para o timer quando chega a zero
            display.textContent = "PROMOÇÃO ENCERRADA";
        }
    }, 1000);
}

// Inicia o timer quando a página carregar
window.addEventListener('load', function () {
    var duration = 60 * 60 * 3; // Define 3 horas de contagem regressiva
    var display = document.querySelector('#timer'); // Procura o elemento com id="timer"

    // Só inicia se encontrar o elemento na página
    if (display) {
        startTimer(duration, display);
    }
});