var total = 0;
var operacao = "";
var valorAtual = 0;
var calculo = "";

function adicionarNumero(valor) {
    const visor = document.getElementById("visor");

    if (visor.value === "0" && valor !== ".") {
        visor.value = "";
    }

    if (valor === "." && visor.value.includes(".")) {
        return;
    }

    visor.value += valor;
}

function limparEntry() {
    document.getElementById("visor").value = "0";
    total = 0;
    operacao = "";
    valorAtual = 0;
    calculo = "";
}

function adicionarOperador(op) {
    const visor = document.getElementById("visor");
    total = parseFloat(visor.value);
    operacao = op;
    visor.value = "0";
}

function removerUltimoCaractere() {
    const visor = document.getElementById("visor");
    visor.value = visor.value.slice(0, -1);
    if (visor.value === "") {
        visor.value = "0";
    }
}

function calcular() {
    const visor = document.getElementById("visor");
    valorAtual = parseFloat(visor.value);

    switch (operacao) {
        case "+":
            total += valorAtual;
            break;
        case "-":
            total -= valorAtual;
            break;
        case "*":
            total *= valorAtual;
            break;
        case "/":
            total /= valorAtual;
            break;
        case "%":
            total = (total * valorAtual) / 100;
            break;
        default:
            return;
    }

    visor.value = total;
    operacao = "";
}
