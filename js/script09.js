function converterHoras() {
    const horas = parseFloat(document.getElementById('horas').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(horas) || horas < 0) {
        resultado.textContent = "Por favor, insira um número válido de horas.";
        return;
    }

    const minutos = horas * 60; // 1 hora = 60 minutos
    const segundos = horas * 3600; // 1 hora = 3600 segundos

    resultado.textContent = `${horas} hora(s) equivalem a ${minutos} minuto(s) e ${segundos} segundo(s).`;
}
