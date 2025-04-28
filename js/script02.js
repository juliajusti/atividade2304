function gerarTabuada() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = ''; // Limpa o conteúdo anterior

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement('li');
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        resultado.appendChild(item);
    }
}
