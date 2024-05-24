let Produtosnome = document.querySelector("#Produtosnome");
let botao = document.querySelector("#botao");
let aqui = document.querySelector("#aqui");

function produto(){
   let batata = Number(Produtosnome.value);
   
   if (batata == "001"){
       aqui.textContent = "Parafuso";
   } else if(batata == "002"){
      aqui.textContent = "Porca";
   } else if(batata == "003"){
    aqui.textContent = "Prego";
   } else {
    aqui.textContent = "Diversos";
   }
      
}

botao.onclick = function(){
    produto();
}