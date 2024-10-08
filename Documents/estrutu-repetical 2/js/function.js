// Aguarda o envio do formulário
const formulario = document.getElementById('formulario');

// Ativa ao receber o envio (submit)
formulario.addEventListener('submit', function (evento) {
    // Previne o comportamento padrão do evento (submit)
    evento.preventDefault();

    // Envia os dados para calcular
    calcularValores(formulario);
});

function calcularValores(formulario) {
    // Pega os dados do formulário
    const valor1 = Number(formulario.valor1.value);
    const valor2 = Number(formulario.valor2.value);
    const operacao = Number(formulario.operacao.value);
    let resultado = 0;

    switch (operacao) {
        case 1:
            resultado = somar(valor1, valor2);
            break;


        case 2:
            // resultado = subtracao(valor1, valor2);
            resultado = subtracao(valor1, valor2);
            break;

        case 3:

            resultado = divisao(valor1, valor2);
            break;

        case 4:

            resultado = multiplicacao(valor1, valor2);
            break;
    }

    mostrarMensagem('Resultado:', resultado);
}

function somar(v1, v2) { // return Number
    return v1 + v2;
}

function subtracao(v1, v2) {  // subtração ======
    return v1 - v2;
}

function divisao(v1, v2) {
    return v1 / v2;
}

function multiplicacao(v1, v2) {
    return v1 * v2;
}

function mostrarMensagem(titulo, mensagem, tipo = 0) { // return void
    console.log(`${titulo} ${mensagem}`);

    document.getElementById('resultado').innerHTML = `<h3>${titulo} ${mensagem}</h3>`;
}

