// Função do Cronômetro
function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = Math.floor(timer % 60);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;
        if (--timer < 0) { timer = duration; }
    }, 1000);
}

// Função para simular venda e cair estoque
function simulateStock() {
    let stockElement = document.getElementById('stock-count');
    if (stockElement) {
        let currentStock = parseInt(stockElement.innerText);
        if (currentStock > 3) {
            setTimeout(() => {
                stockElement.innerText = currentStock - 1;
                simulateStock();
            }, Math.floor(Math.random() * 15000) + 8000); // Cai entre 8 a 23 segundos
        }
    }
}

window.onload = function () {
    const twentyFiveMinutes = 60 * 25;
    const display = document.querySelector('#timer');
    if (display) { startCountdown(twentyFiveMinutes, display); }
    simulateStock();
};