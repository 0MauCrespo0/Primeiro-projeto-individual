let quantidade1 = document.getElementById('qnt1');
let preco1 = document.getElementById('preco1');
let total1 = document.getElementById('total1');

let quantidade2 = document.getElementById('qnt2');
let preco2 = document.getElementById('preco2');
let total2 = document.getElementById('total2');

let quantidade3 = document.getElementById('qnt3');
let preco3 = document.getElementById('preco3');
let total3 = document.getElementById('total3');

let quantidade4 = document.getElementById('qnt4');
let preco4 = document.getElementById('preco4');
let total4 = document.getElementById('total4');

let quantidade5 = document.getElementById('qnt5');
let preco5 = document.getElementById('preco5');
let total5 = document.getElementById('total5');

let valorTotal = document.getElementById('valorFinal');

function calculartotal1() {
    let qtd = parseFloat(quantidade1.value) || 0;
    //let preco = parseFloat(preco1.value) || 0;
    let preco = parseFloat(preco1.value);
      
    total1.textContent = (qtd * preco).toFixed(2); //toFixed() determina a qtd de casas decimais que desejo representar no n°
    atualizarValorFinal();
}

function calculartotal2() {
    let qtd = parseFloat(quantidade2.value) || 0;
    let preco = parseFloat(preco2.value) || 0;
    total2.textContent = (qtd * preco).toFixed(2); //toFixed() determina a qtd de casas decimais que desejo representar no n°
    atualizarValorFinal();
}

function calculartotal3() {
    let qtd = parseFloat(quantidade3.value) || 0;
    let preco = parseFloat(preco3.value) || 0;
    total3.textContent = (qtd * preco).toFixed(2); //toFixed() determina a qtd de casas decimais que desejo representar no n°
    atualizarValorFinal();
}

function calculartotal4() {
    let qtd = parseFloat(quantidade4.value) || 0;
    let preco = parseFloat(preco4.value) || 0;
    total4.textContent = (qtd * preco).toFixed(2); //toFixed() determina a qtd de casas decimais que desejo representar no n°
    atualizarValorFinal();
}

function calculartotal5() {
    let qtd = parseFloat(quantidade5.value) || 0;
    let preco = parseFloat(preco5.value) || 0;
    total5.textContent = (qtd * preco).toFixed(2); //toFixed() determina a qtd de casas decimais que desejo representar no n°
    atualizarValorFinal();
}

function atualizarValorFinal() {
    let valor1 = parseFloat(total1.textContent) || 0;
    let valor2 = parseFloat(total2.textContent) || 0;
    let valor3 = parseFloat(total3.textContent) || 0;
    let valor4 = parseFloat(total4.textContent) || 0;
    let valor5 = parseFloat(total5.textContent) || 0;

    valorTotal.textContent = (valor1 + valor2 + valor3 + valor4 + valor5).toFixed(2);
}

quantidade1.addEventListener('input', calculartotal1);
preco1.addEventListener('input', calculartotal1);

quantidade2.addEventListener('input', calculartotal2);
preco2.addEventListener('input', calculartotal2);

quantidade3.addEventListener('input', calculartotal3);
preco3.addEventListener('input', calculartotal3);

quantidade4.addEventListener('input', calculartotal4);
preco4.addEventListener('input', calculartotal4);

quantidade5.addEventListener('input', calculartotal5);
preco5.addEventListener('input', calculartotal5);


