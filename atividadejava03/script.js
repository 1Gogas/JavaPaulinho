let ipSaldo = document.querySelector("#ipSaldo");
let btReajustarSaldo = document.querySelector("#btReajustarSaldo");
let ipSaldoreajuste = document.querySelector("#ipSaldoreajuste");

function calcularajuste(){
    let numero1 = Number (ipSaldo.value);

    let calcularajuste = numero1 * 0.1

    ipSaldoreajuste.textContent= calcularajuste;

}

btReajustarSaldo.onclick = function(){
    calcularquilo();
}
