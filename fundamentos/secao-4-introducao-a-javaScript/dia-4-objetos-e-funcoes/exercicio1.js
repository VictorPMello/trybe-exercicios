let info = [
  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  },
  {
    personagem: 'Tio Patinhas',
    origem:
      "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas'",
    recorrente: 'Sim',
  },
];

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// console.log('Bem-vinda,', info[0].personagem);
// console.log('---------------');
// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console.
// console.log('Recorrente:', info[0]['recorrente']);
// console.log('---------------');
// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for (let key in info[0]) {
  // console.log(key);
}
// console.log('---------------');
// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for (let key in info[0]) {
  // console.log(info[0][key]);
}
// console.log('---------------');
// Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves
for (let key in info[0] && info[1]) {
  // console.log(info[0][key], 'e', info[1][key]);
}
// console.log('---------------');

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos
console.log(
  'O livro favorito de',
  leitor.nome,
  'se chama',
  leitor.livrosFavoritos[0].titulo + '.'
);
console.log('---------------');

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array
leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};
console.log('---------------');

// Acesse as chaves nome e livrosFavoritos e faça um console.log
let randomNumber = Math.ceil(Math.random() * 10);
console.log(leitor.nome, 'tem', randomNumber, 'livros favoritos');
