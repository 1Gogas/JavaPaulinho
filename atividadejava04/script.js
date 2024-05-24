let ipMedia1 = document.querySelector("#ipMedia1");
let ipMedia2 = document.querySelector("#ipMedia2");
let ipMedia3 = document.querySelector("#ipMedia3");
let h3Texto = document.querySelector("#h3Texto");
let btCalcularMedia = document.querySelector("#btCalcularMedia");
let iph2Texto = document.querySelector("#iph2Texto");
let iph3Texto = document.querySelector("#iph3Texto");
let iph4Texto = document.querySelector("#iph4Texto");

function calcularmedia(){
    let numero1 = Number (ipMedia1.value);
    let numero2 = Number (ipMedia2.value);
    let numero3 = Number (ipMedia3.value);

    let soma = (numero1 + numero2 + numero3) / 3    
 
    h3Texto.textContent = soma;
}

function calcularponderada(){
    let numero1 = Number (ipMedia1.value);
    let numero2 = Number (ipMedia2.value);
    let numero3 = Number (ipMedia3.value);

    let pesos = [3, 2, 5];

    let subPesos = (numero1 * pesos[0]) + (numero2 * pesos[1]) + (numero3 * pesos[2]);
    let somaPesos = pesos[0] + pesos[1] + pesos[2];
 
    iph2Texto.textContent = subPesos / somaPesos; 
}

function calcularmediadasmedias(){

    let  MediaAritimetica = Number (h3Texto.textContent);
    let  MediaPonderada = Number (iph2Texto.textContent);

    let somar = (MediaAritimetica + MediaPonderada);
        
    iph3Texto.textContent = somar;


}

function calcularmediaDasduasMedias(){

    

}

btCalcularMedia.onclick = function(){
    calcularmedia(); calcularponderada(); calcularmediadasmedias(); calcularmediaDasduasMedias();
}


