function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function mostrarPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(inicio) || isNaN(fim) || inicio < 0 || fim < 0 || inicio > fim) {
        resultado.textContent = "Por favor, insira valores válidos (inicial menor ou igual ao final).";
        return;
    }

    const primos = [];
    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    resultado.textContent = primos.length > 0
        ? `Números primos entre ${inicio} e ${fim}: ${primos.join(', ')}`
        : `Nenhum número primo encontrado entre ${inicio} e ${fim}.`;
}
