function validarCPF() {
    const cpfInput = document.getElementById('cpf').value;
    const resultado = document.getElementById('resultado');

    const cpf = cpfInput.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        resultado.textContent = "CPF inválido.";
        return;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digito1 = 11 - (soma % 11);
    if (digito1 >= 10) digito1 = 0;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digito2 = 11 - (soma % 11);
    if (digito2 >= 10) digito2 = 0;

    if (digito1 == cpf.charAt(9) && digito2 == cpf.charAt(10)) {
        resultado.textContent = "CPF válido!";
    } else {
        resultado.textContent = "CPF inválido.";
    }
}
