// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function ePalindromo(a) {
  let b = a.split('').reverse().join('');
  if (a === b) {
    return true;
  }
  return false;
}

// console.log(ePalindromo('false'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arr = [2, -3, 6, 7, 10, 1, 80];

function indiceMaiorEMenorValor(arr) {
  let indiceMaior = 0;
  let indiceMenor = 0;
  for (let idx in arr) {
    if (arr[indiceMaior] < arr[idx]) {
      indiceMaior = idx;
    }
    if (arr[indiceMenor] > arr[idx]) {
      indiceMenor = idx;
    }
  }
  return [indiceMenor, indiceMaior];
}

// console.log(indiceMaiorEMenorValor(arr));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorNome(names) {
  let maiorNome = names[0];
  for (let idx in names) {
    if (maiorNome.length < names[idx].length) {
      maiorNome = names[idx];
    }
  }
  return maiorNome;
}

console.log(
  maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
);
