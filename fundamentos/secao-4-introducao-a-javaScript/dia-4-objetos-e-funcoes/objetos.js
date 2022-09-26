/*let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
};

// diasDaSemana.1; // SyntaxError: Unexpected number
// error de notação de ponto no lugar de colchetes
console.log(diasDaSemana['1']); // domingo

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey
*/

let singer = {
  name: {
    firstName: 'Milton',
    lastName: 'Nascimento',
    nickName: 'Bituca',
  },
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
  bornInfo: {
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
  },
};

console.log(
  `O cantor ${singer.name.firstName} ${singer.name.lastName} possui ${singer.age} anos.`
);

singer.name[
  'fullName'
] = `${singer.name.firstName} ${singer.name.lastName}`;

console.table(singer);

let player = {
  name: {
    firstName: 'Marta',
    lastName: 'Silva',
  },
  age: 34,
  medals: {
    golden: 2,
    solver: 3,
  },
};
