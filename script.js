// Configura o tempo: 15 minutos (900 segundos)
let tempo = 15 * 60; 

function atualizarCronometro() {
    const display = document.querySelector('#countdown');
    
    if (!display) return;

    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;

    segundos = segundos < 10 ? '0' + segundos : segundos;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    display.innerHTML = `🔥 A oferta encerra em: ${minutos}:${segundos}`;

    if (tempo <= 0) {
        clearInterval(timer);
        display.innerHTML = "OFERTA ENCERRADA!";
    } else {
        tempo--;
    }
}

const timer = setInterval(atualizarCronometro, 1000);