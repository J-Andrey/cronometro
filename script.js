let segundos = 0;
let timer;

function formatarTempo(segundos) {
    const horas = String(Math.floor(segundos / 3600)).padStart(2, "0");

    const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");

    const segundosRestantes = String(segundos % 60).padStart(2, "0");

    return `${horas}: ${minutos}: ${segundosRestantes}`;
}

function iniciarCronometro() {
    if (!timer) {
        timer = setInterval(() => {
            segundos++;
            document.getElementById("tempo").textContent = formatarTempo(segundos);
        }, 1000);
    }
}

function pausarCronometro() {
    clearInterval(timer);
    timer = null;
}

function resetarCronometro() {
    pausarCronometro();
    segundos = 0;
    document.getElementById("tempo").textContent = formatarTempo(segundos);
}

// Eventos dos botões

document.getElementById("iniciar").addEventListener("click", iniciarCronometro);

document.getElementById("pausar").addEventListener("click", pausarCronometro);

document.getElementById("resetar").addEventListener("click", resetarCronometro);