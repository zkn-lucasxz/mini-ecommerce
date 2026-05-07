// validacoes.js

function isNumeroValido(valor) {
    // Verifica se é um número, se não é NaN e se é >= 0
    return typeof valor === 'number' && !isNaN(valor) && valor >= 0;
}

function isTextoValido(texto) {
    // Verifica se existe e se não contém apenas espaços
    return texto !== undefined && texto !== null && texto.trim().length > 0;
}

module.exports = { isNumeroValido, isTextoValido };
