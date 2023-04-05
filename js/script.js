//variaveis

let number1 = 2;
let number2 = 2;
let operator = "multiply";
// funções de operações
function soma(x, y) {
  return x + y;
}

function subtraction(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}
/*
console.log(soma(2, 3));
console.log(subtraction(3, 2));
console.log(multiply(3, 2));
console.log(division(4, 2));
*/
/*passo 3 função de operação pega dois números e realiza uma das funções 
 operate vai mudar dependendo da botão pressionado
  Se for botão "+" usar a função soma

*/

function operate(x, y) {
  if (operator == "soma") {
    return soma(x, y);
  } else if (operator == "subtraction") {
    return subtraction(x, y);
    onsole.log(subtraction(x, y));
  } else if (operator == "multiply") {
    return multiply(x, y);
    // console.log(multiply(x, y));
  } else if (operator == "division") {
    return division(x, y);
    //console.log(division(x, y));
  }
}

/*
Fazer com que cada numero clicado apareça no painel

1(declarar variaveis do painel):

2(variavei dos botões ligadas a cada um)




3(cada vez que eu clicar o valor recebido é enviado para o painel)




*/

let botoesNumeros = document.querySelectorAll(".numero");
let painel = document.querySelector(".painel");

botoesNumeros.forEach((numero) => {
  numero.addEventListener("click", function (e) {
    enviarDisplay(e.target.textContent);
  });
});

enviarDisplay = (num) => {
  painel.textContent = num;
  console.log(num);
};

/*
let botoesNumeros = document.querySelectorAll(".numero");
let painel = document.querySelector(".painel");

botoesNumeros.forEach((numero) => {
  numero.addEventListener("click", function () {
    console.log("hi");
    enviarDisplay(botoesNumeros[1].textContent);
  });
});

enviarDisplay = (numero) => {
  console.log(numero);
};
*/
