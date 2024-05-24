let idNumeroimpar = document.querySelector("#idNumeroimpar");
let btVerificarnumero = document.querySelector("#btVerificarnumero");
let numeroaqui = document.querySelector("#numeroaqui");

function verificarimpar(){
    let  x = idNumeroimpar.value;

    if (x % 2 == 0){
        numeroaqui.textContent = "par"
    } else {
        numeroaqui.textContent = "impar"
          
    }

   
}

btVerificarnumero.onclick = function(){
    verificarimpar();
}
