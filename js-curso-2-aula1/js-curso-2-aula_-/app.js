textoPrincipal();
function textoPrincipal(){
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Calcular fatorial';
    
}

//let subtitulo = document.querySelector('p');
//subtitulo.innerHTML = 'Informe o número:';

paragrafo('p', 'Informe um número');

function paragrafo(tag, texto){
    let subtitulo = document.querySelector(tag);
    subtitulo.innerHTML = texto;
}


let numero = 0;
let fatorado = 0;
let antecessor = 1;

function enviarNumero(){
    numero = document.querySelector('input').value;
    calcular(numero);
    
}

function calcular(valor){
    //alert(valor);
    while(valor != 0){

        antecessor = antecessor * valor;

        valor --;

        console.log('variavel antecessor:' + antecessor);
    }

    paragrafo('p', `O fatorial de ${numero}! é: `);
    exibirMensagem(antecessor);
    desativarCampo();
    desativarBotao();
    
}

function exibirMensagem(resultado){
    //alert(`O fatorial de ${numero} é ${antecessor}`);

    let campo = document.querySelector('input');
    campo.value = antecessor;

}

function desativarBotao(){
    let btn = document.getElementById('principal').setAttribute('disabled',true);
}
function ativarBotao(){
    let btn = document.getElementById('principal').removeAttribute('disabled');
}

function desativarCampo(){
    let campo = document.querySelector('input').setAttribute('disabled', true);
}

function reiniciar(){
    let campo = document.querySelector('input');
    campo.value = '';

    campo = document.querySelector('input').removeAttribute('disabled');

    valor = 0;
    antecessor = 1;
    textoPrincipal();
    paragrafo('p', 'Informe um número:'); 
    ativarBotao();

}


