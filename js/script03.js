function classificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');

    let classificacao = "";

    if (isNaN(idade) || idade < 0) {
        classificacao = "Por favor, informe uma idade válida.";
    } else if (idade < 12) {
        classificacao = "Criança";
    } else if (idade < 18) {
        classificacao = "Adolescente";
    } else if (idade < 60) {
        classificacao = "Adulto";
    } else {
        classificacao = "Idoso";
    }

    resultado.textContent = `Classificação: ${classificacao}`;
}
