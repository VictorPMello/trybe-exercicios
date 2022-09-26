// Faça cinco programas, um para cada operação aritmética básica.

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

console.log(sum(10, 5));
console.log(sub(10, 5));
console.log(mult(10, 5));
console.log(div(10, 5));
console.log(mod(10, 5));

// Faça um programa que retorne o maior de dois números.
const num1 = 20000;
const num2 = 80;
const num3 = 800;

function maiorValor(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(maiorValor(num1, num2, num3));
