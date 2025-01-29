let expressao = '';

function adicionarNumero(numero){
    const visor = document.getElementById('visor');
    expressao += numero;
    visor.value = expressao
}

function adicionarOperador(operador){
    const visor = document.getElementById('visor');
    if (expressao === '' || /[\+\-\*\/]$/.test(expressao)){
        return;
    }
    expressao += operador;
    visor.value = expressao;
}

function limparVisor(){
    expressao = '';
    document.getElementById('visor').value = '';
}

function calcular(){
    const visor = document.getElementById('visor');
    try{
        if(/[\+\-\*\/]$/.test(expressao)){
            visor.value = 'error';
            return;
        }
        const resultado = Function('"use strict"; return (' + expressao + ')')();
        expressao = resultado.toString();
        visor.value = expressao;
    }catch(e){
        visor.value = 'error';
        expressao = 
        alert('Operação inválida!');
    }
}