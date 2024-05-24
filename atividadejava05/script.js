let Numero1 = document.querySelector("#Numero1");
let Numero2 = document.querySelector("#Numero2");
let btCalcularNumeros = document.querySelector("#btCalcularNumeros");
let iph1Texto = document.querySelector("#iph1Texto");
 

function comparar() {
    var numero01 = Number (Numero1.value);
    var numero02 = Number (Numero2.value);
    
    var maiorNumero = 0;
    if(numero01 > numero02) 
    maiorNumero = numero01;
    else
    {
    maiorNumero = numero02;
    }
    
    

    iph1Texto.textContent = maiorNumero;
}    
    btCalcularNumeros.onclick = function(){
        comparar()
    }