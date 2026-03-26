function startCountdown() {
    const display = document.querySelector('#timer');
    if (!display) return;

    // Define a duração total da oferta (ex: 25 minutos em segundos)
    const duration = 25 * 60;
    
    // Verifica se já existe um tempo salvo no navegador do cliente
    let startTime = localStorage.getItem('offer_start_time');

    if (!startTime) {
        // Se for a primeira vez, salva o momento atual
        startTime = Date.now();
        localStorage.setItem('offer_start_time', startTime);
    }

    function updateTimer() {
        const now = Date.now();
        const elapsed = Math.floor((now - startTime) / 1000); // Tempo passado em segundos
        let remaining = duration - elapsed;

        // Se o tempo acabar, mantemos em 00:00:00 (ou você pode resetar se preferir)
        if (remaining <= 0) {
            remaining = 0;
            display.textContent = "00:00:00";
            clearInterval(timerInterval);
            return;
        }

        let hours = Math.floor(remaining / 3600);
        let minutes = Math.floor((remaining % 3600) / 60);
        let seconds = Math.floor(remaining % 60);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Executa imediatamente para não começar em 00:00:00
}

// Simulação de Estoque (Também salvando no navegador para não resetar)
function simulateStock() {
    let stockElement = document.getElementById('stock-count');
    if (!stockElement) return;

    let savedStock = localStorage.getItem('current_stock');
    let currentStock = savedStock ? parseInt(savedStock) : 8;

    stockElement.innerText = currentStock;

    if (currentStock > 3) {
        setTimeout(() => {
            currentStock -= 1;
            stockElement.innerText = currentStock;
            localStorage.setItem('current_stock', currentStock);
            simulateStock();
        }, Math.floor(Math.random() * 20000) + 10000); // Cai a cada 10-30 segundos
    }
}

window.onload = function () {
    startCountdown();
    simulateStock();
};