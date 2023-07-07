//variaveis

let number1 = 0;
let number2 = "";
let operator = "x";

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

function operate(x, y, operator) {
  switch (operator) {
    case "+":
      return Math.round(soma(x, y) * 10) / 10;
      break;
    case "-":
      return Math.round(subtraction(x, y) * 10) / 10;
      break;
    case "x":
      return Math.round(multiply(x, y) * 10) / 10;
      break;
    case "/":
      return Math.round(division(x, y) * 10) / 10;
      break;
    //default:
    //return "Tu digitou certo, Bruno?";
  }
}
console.log(operate(number1, number2, operator));

// **************************  DOM APPLICATION *****************************

let btnNumeros = document.querySelectorAll(".numero");
let painelAtual = document.getElementById("painel");

let conteudoDisplay = "";
//função de mostrar o numero no display "atual" e ja armazenar como numero 2
function Display(x) {
  x.addEventListener("click", function () {
    if (conteudoDisplay.length <= 6) {
      conteudoDisplay += x.textContent;
      painelAtual.textContent = conteudoDisplay;
      number1 = Number(conteudoDisplay);
    }
  });
}

btnNumeros.forEach(Display);

//Funções para utilizar as operações da calculadores

let painelAnterior = document.getElementById("painelAnterior");
let btnOperator = document.querySelectorAll(".operator");

function operatorsWhenClicked(x) {
  x.addEventListener("click", function () {
    if (painelAnterior.textContent == "") {
      number2 = number1;
      operator = x.textContent;
      painelAnterior.textContent = `${conteudoDisplay}  ${operator}`;
      conteudoDisplay = "";
      painelAtual.textContent = "";
    } else if (
      painelAnterior.textContent != "" &&
      painelAtual.textContent == ""
    ) {
      operator = x.textContent;
      painelAnterior.textContent = `${number2} ${operator}`;
    } else {
      number2 = operate(number2, number1, operator).toFixed(2);
      operator = x.textContent;

      painelAnterior.textContent = `${number2} ${operator}`;
      conteudoDisplay = "";
      painelAtual.textContent = "";
      number1 = "";
    }
  });
}

btnOperator.forEach(operatorsWhenClicked);

//Função do botão "="

let equals = document.getElementById("equal");

equals.addEventListener("click", function () {
  number2 = operate(number2, number1, operator);

  painelAnterior.textContent = number2;
  painelAtual.textContent = "";
  conteudoDisplay = "";
});
