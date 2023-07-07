//variaveis

let number1 = 0;
let number2 = null;
let operator = null;

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

// **************************  DOM APPLICATION *****************************
let numeroMontado = "";
let btnNumeros = document.querySelectorAll(".numero");
let painelAtual = document.getElementById("painel");
let painelAnterior = document.getElementById("painelAnterior");
function montarNumero(x) {
  numeroMontado += x;
}

btnNumeros.forEach((numero) => {
  numero.addEventListener("click", function () {
    if (numeroMontado.length <= 6) {
      montarNumero(numero.textContent);
      number1 = Number(numeroMontado);

      painelAtual.textContent = number1;
    }
  });
});

let btnOperator = document.querySelectorAll(".operator");
console.log(btnOperator[1].textContent);

function escolherOperador(operador) {
  if (operator == null) {
    number2 = number1;
    operator = operador.textContent;
    painelAnterior.textContent = number2 + operator;
    numeroMontado = "";
    number1 = null;
  } else if (operator != null && number1 != null && number2 != null) {
    number2 = operate(number2, number1, operator);
    operator = operador.textContent;
    painelAnterior.textContent = number2 + operator;
    numeroMontado = "";
    number1 = null;
  } else if (number1 == null) {
    operator = operador.textContent;
    painelAnterior.textContent = number2 + operator;
  }
}

btnOperator.forEach((operador) => {
  operador.addEventListener("click", function () {
    escolherOperador(operador);
  });
});

let equals = document.getElementById("equal");
equals.addEventListener("click", function () {
  if (number2 == null) {
    painelAnterior.textContent = number1 + operator;
    number2 = number1;
    number1 = null;
    numeroMontado = "";
  } else if (number2 == null && operator == null) {
    painelAnterior.textContent = `${number1} =`;
    number2 = number1;
    number1 = null;
    numeroMontado = "";
  } else {
    number2 = operate(number2, number1, operator);
    painelAnterior.textContent = number2;
    number1 = null;
    numeroMontado = "";
  }
});

let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  number1 = 0;
  number2 = null;
  operator = null;
  numeroMontado = "";
  painelAnterior.textContent = "";
  painelAtual.textContent = "0";
});

function erase(numeroMontado) {
  let numeroNovo = "";
  for (i = 0; i < numeroMontado.length - 1; i++) {
    numeroNovo += numeroMontado.charAt(i);
    console.log(numeroMontado.charAt(i));
    console.log(numeroNovo);
  }

  return numeroNovo;

  /* console.log(numeroMontado);
  number1 = Number(numeroMontado);
  painelAtual.textContent = number1; */
}

let eraser = document.getElementById("erase");
eraser.addEventListener("click", function () {
  numeroMontado = erase(numeroMontado);
  number1 = Number(numeroMontado);
  painelAtual.textContent = number1;
});
