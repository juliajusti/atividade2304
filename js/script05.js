const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarTentativa() {
    const tentativa = parseInt(document.getElementById('tentativa').value);
    const dica = document.getElementById('dica');

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
        dica.textContent = "Por favor, insira um número entre 1 e 10.";
        return;
    }

    if (tentativa === numeroSecreto) {
        dica.textContent = "Parabéns! Você acertou!";
    } else if (tentativa < numeroSecreto) {
        dica.textContent = "Tente um número maior.";
    } else {
        dica.textContent = "Tente um número menor.";
    }
}
