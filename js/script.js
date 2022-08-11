var largura = 0;
var altura = 0;
function ajustaTamanhoJogo() {
    largura = window.innerWidth;
    altura = window.innerHeight;
}

ajustaTamanhoJogo();

function spawnarMosca() {

    try {
        document.getElementById('mosquito').remove();
    } catch (e) {
        console.log('Não há nenhum mosquito na tela')
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    document.body.appendChild(mosquito);
    document.getElementById('mosquito').setAttribute('onclick', 'spawnarMosca()');
    cont = 1;
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    switch (classe) {
        case 0:
            return ''
        case 1:
            return 'invertido'
    }
}
var cont = 0;

setTimeout(function () { var i = 0; if (i == 0) { return true } else { i = 1; return false } console.log(cont);}, 1000)

if (true) {
    spawnarMosca();
} else {

}