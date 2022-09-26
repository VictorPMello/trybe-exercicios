// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverse = '';

for (let i = 0; i < word.length; i += 1) {
  reverse += word[word.length - 1 - i];
}

console.log(reverse);

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorPrimo = 0;

for (let idx = 2; idx <= 50; idx += 1) {
  let ePrimo = true;
  for (let idx2 = 2; idx2 < idx; idx2 += 1) {
    if (idx % idx2 === 0) {
      ePrimo = false;
    }
    if (ePrimo) {
      maiorPrimo = idx;
    }
  }
}

console.log(maiorPrimo);
