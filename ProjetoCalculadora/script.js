function adicionarNumeros(numero){
    const visor = document.getElementById('visor');
    visor.value = numero;
}

function adicionarOperador(operador){
    const visor = document.getElementById('visor');
    visor.value += operador;

}

function limparVisor(){
    const visor = document.getElementById('visor');
    visor.value = '';
}

function calcular(){
    const visor = document.getElementById('visor');
    try{
        visor.value = eval(visor.value);
    }catch(e){
        alert('Operação inválida!');
        visor.value = 'error';
    }
}