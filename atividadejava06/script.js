let ipNumero01 = document.querySelector("#ipNumero01");
let ipNumero02 = document.querySelector("#ipNumero02");
let ipNumero03 = document.querySelector("#ipNumero03");
let ipNumero04 = document.querySelector("#ipNumero04");
let h1Texto = document.querySelector("#h1Texto");
let btRetornarNumero = document.querySelector("#btRetornarNumero");

function compararnumeros(){

    let numero001 = Number (ipNumero01.value);
    let numero002 = Number (ipNumero02.value);
    let numero003 = Number (ipNumero03.value);
    let numero004 = Number (ipNumero04.value);

    let menornumero
    
    if(numero001<numero002 && numero001<numero003&&numero001<numero004){
        menornumero = numero001;
    }    

    if(numero002<numero001 && numero002<numero003&& numero002<numero004){
        menornumero = numero002;
    }

    if(numero003<numero001 && numero003<numero002 && numero003<numero004){
        menornumero = numero003;
    }

    if(numero004<numero001 && numero004<numero002 && numero004<numero003){
        menornumero = numero004;
    }

    h1Texto.textContent = menornumero;
    
    }

btRetornarNumero.onclick = function(){
    compararnumeros();
}

