let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let values of numbers) {
  console.log(values);
}
console.log('-------------');

// Some todos os valores contidos no array e imprima o resultado;
for (let sumValues of numbers) {
  console.log((total += sumValues));
}
console.log('-------------');

// Calcule e imprima a média aritmética dos valores contidos no array;
let media = total / 10;
console.log(media);
console.log('-------------');

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}
console.log('-------------');

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorValor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
}
console.log(maiorValor);
console.log('-------------');

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let valorImpar = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 1) {
    valorImpar.push(numbers[i]);
  } else {
    console.log('Nenhum valor impar encontrado');
  }
}
console.log(valorImpar);

console.log('-------------');

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > menorValor) {
  } else {
    menorValor = numbers[i];
  }
}
console.log(menorValor);
console.log('-------------');

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let arrTo25 = [];
for (let count = 1; count <= 25; count += 1) {
  arrTo25.push(count);
}
console.log(arrTo25);
console.log('-------------');

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let i = 0; i < arrTo25.length; i += 1) {
  console.log(arrTo25[i] / 2);
}
