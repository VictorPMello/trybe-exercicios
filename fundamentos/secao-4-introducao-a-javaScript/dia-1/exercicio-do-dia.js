// Operadores Aritméticos
const a = 5;
const b = 15;

console.log('Adição: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + a * b);
console.log('Divisão: ' + a / b);
console.log('Módulo: ' + (a % b));

// Maior valor entre dois números
const primeiroNumero = 20;
const segundoNumero = 8;

if (primeiroNumero >= segundoNumero) {
  console.log('A é maior que B');
} else {
  console.log('B é maior que A');
}

// Maior valor entre três números
const n1 = 4;
const n2 = 7;
const n3 = 92;

if (n1 > n2 && n1 > n3) {
  console.log('N1 é o maior valor');
} else if (n2 > n1 && n2 > n3) {
  console.log('N2 é o maior valor');
} else {
  console.log('N3 é o maior valor');
}

// Positivo ou negativo
let isPositive = 'negativo';

if (isPositive === 'positivo') {
  console.log('É positivo');
} else if (isPositive === 'negativo') {
  console.log('É negativo');
} else {
  console.log('Zero');
}

// Triângulo valido
const angulo1Triangulo = 'a';
const angulo2Triangulo = 60;
const angulo3Triangulo = 60;

const somaAngulos =
  angulo1Triangulo + angulo2Triangulo + angulo3Triangulo;

if (somaAngulos === 180) {
  console.log(true);
} else if (somaAngulos < 180 || somaAngulos > 180) {
  console.log(false);
} else {
  console.log('Ângulo inválido');
}

// Xadrez
let nomePecaXadrex = 'bispo';

switch (nomePecaXadrex) {
  case 'peao':
    console.log(
      'movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.'
    );
    break;
  case 'torre':
    console.log(
      'movimenta-se em direção reta pelas colunas ou fileiras.'
    );
    break;
  case 'bispo':
    console.log(
      'Sem restrição de número de casas, mas somente no sentido diagonal.'
    );
    break;
  case 'cavalo':
    console.log(
      'movimenta-se sempre em "L",ou seja,duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias.'
    );
    break;
  case 'rainha':
    console.log(
      'é a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor.'
    );
    break;
  case 'rei':
    console.log(
      'move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.'
    );
    break;
  default:
    console.log('Não é uma peça válida');
    break;
}

// Conversão de nota
let valorEmPorcentagem = (90 * 100) / 100;

if (valorEmPorcentagem >= 90) {
  console.log('A');
} else if (valorEmPorcentagem >= 80 && valorEmPorcentagem < 90) {
  console.log('B');
} else if (valorEmPorcentagem >= 70 && valorEmPorcentagem < 80) {
  console.log('C');
} else if (valorEmPorcentagem >= 60 && valorEmPorcentagem < 70) {
  console.log('D');
} else if (valorEmPorcentagem >= 50 && valorEmPorcentagem < 60) {
  console.log('E');
} else if (valorEmPorcentagem >= 0 && valorEmPorcentagem < 50) {
  console.log('F');
} else {
  console.log('Error! Nota é menor que 0 ou maior que 100');
}

// Verifica valor par
const firstNPar = 41;
const secondNPar = 75;
const thirdNPar = 63;

if (
  firstNPar % 2 === 0 ||
  secondNPar % 2 === 0 ||
  thirdNPar % 2 === 0
) {
  console.log('Um dos valores é par');
} else {
  console.log('Nenhum valor par');
}

// Verifica valor impar
const firstNImpar = 48;
const secondNimpar = 70;
const thirdNImpar = 63;

if (
  firstNImpar % 2 === 1 ||
  secondNimpar % 2 === 1 ||
  thirdNImpar % 2 === 1
) {
  console.log('Um dos valores é impar');
} else {
  console.log('Nenhum valor impar');
}

// Calculo de lucro
const valorCusto = -800;
const valorVenda = 1230;
const imposto = valorCusto * 0.2;
const valorCustoTotal = valorCusto + imposto;
const lucro = (valorVenda - valorCustoTotal) * 1000;

if (valorCusto < 0 || valorVenda < 0) {
  console.log('Error! Valor inválido');
} else {
  console.log(`Seu lucro foi de: ${lucro}`);
}

// Salário líquido
const salarioBruto = 3000;
let salarioBase, salarioLiquido, impostoDeRenda, inss;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}

salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  impostoDeRenda = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  impostoDeRenda = salarioBase * 0.075 - 142.8;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  impostoDeRenda = salarioBase * 0.15 - 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  impostoDeRenda = salarioBase * 0.225 - 636.13;
} else {
  impostoDeRenda = salarioBase * 0.275 - 869.36;
}

salarioLiquido = salarioBase - impostoDeRenda;

console.log(salarioLiquido);
