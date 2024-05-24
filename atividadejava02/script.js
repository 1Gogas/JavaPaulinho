let ipQuiloProduto = document.querySelector("#ipQuiloProduto");
let ipQuiloConsumido = document.querySelector("#ipQuiloConsumido");
let btCalcularQuilo = document.querySelector("#btCalcularQuilo");
let h2Subtitulo = document.querySelector("#h2Subtitulo");

function calcularquilo(){
    let numero01 = Number (ipQuiloProduto.value);
    let numero02 = Number (ipQuiloConsumido.value);

    let divisao = numero01 * numero02

    h2Subtitulo.textContent= divisao;

}

btCalcularQuilo.onclick = function(){
    calcularquilo();
}