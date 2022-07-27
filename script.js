
function escreveCodigoNaTela() {
    let codigoJavaScriptPronto = "let sorvete = 'chocolate'; </br> if (sorvete === 'chocolate') {<br> alert('Opa, Eu amo sorvete de chocolate!');<br> } else {<br> alert('Ahh, mas chocolate é o meu favorito...');<br> }";
    let codigoExplodido = codigoJavaScriptPronto.split(' ');


    codigoExplodido.forEach((letra, i) => {
        setTimeout(() => {
            document.getElementById('text-coder').innerHTML += letra
        }, 75 * i);
    });
}




escreveCodigoNaTela()