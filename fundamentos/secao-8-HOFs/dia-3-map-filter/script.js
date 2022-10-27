const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//!  01 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const formatedBookNames = () =>
  books.map(
    (book) => `${book.name} - ${book.genre} - ${book.author.name}`
  );
// console.log(formatedBookNames());

//!  02 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.

// const nameAndAge = () => {
//   const newArray = books.map((book) => {
//     let age = book.releaseYear - book.author.birthYear;
//     return {
//       age,
//       author: book.author.name,
//     };
//   });

//   return newArray.sort((a, b) => a.age - b.age);
// };

// TODO - 02 - REFATORANDO

const nameAndAge = () => {
  return books
    .map((book) => ({
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }))
    .sort((a, b) => a.age - b.age);
};
// console.log(nameAndAge());

//! 03 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = () => {
  return books.filter(
    (book) =>
      book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
  );
};
// console.log(fantasyOrScienceFiction());

//! 04 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

// const oldBooksOrdered = () => {
//   const filterBooks = books.filter(
//     (book) => 2022 - book.releaseYear >= 60
//   );

//   return filterBooks.sort((a, b) => a.releaseYear - b.releaseYear);
// };

// TODO - 04 - REFATORANDO

const oldBooksOrdered = () => {
  const currentYear = new Date().getFullYear(); //? Pega ano atual

  return books
    .filter((book) => currentYear - book.releaseYear >= 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
};

// console.log(oldBooksOrdered());

//! 05 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

// const fantasyOrScienceFictionAuthors = () => {
//   const filteredBooks = books.filter(
//     (book) =>
//       book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
//   );

//   return filteredBooks.map((book) => book.author.name).sort();
// };

// TODO - 05 - REFATORANDO

const fantasyOrScienceFictionAuthors = () => {
  return books
    .filter(
      (book) =>
        book.genre === 'Ficção Científica' ||
        book.genre === 'Fantasia'
    )
    .map((book) => book.author.name)
    .sort();
};
// console.log(fantasyOrScienceFictionAuthors());

//! 06 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const oldBooks = () => {
//   const filtedBook = books.filter(
//     (book) => 2022 - book.releaseYear > 60
//   );

//   return filtedBook.map((nameBook) => nameBook.name);
// };

// TODO - 06 - REFATORANDO

const oldBooks = () => {
  return books
    .filter((book) => 2022 - book.releaseYear > 60)
    .map((nameBook) => nameBook.name);
};

// console.log(oldBooks());

//! 07 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

// const authorWith3DotsOnName = () => {
//   const author = books.find(
//     (book) =>
//       book.author.name[1] === '.' &&
//       book.author.name[4] === '.' &&
//       book.author.name[7] === '.'

//   );

// TODO - 07 - REFATORANDO com REGEX Dica da monitoria

const authorWith3DotsOnName = () =>
  books.find((book) => /([A-Z][.][ ]){3}/.test(book.author.name));
console.log(authorWith3DotsOnName());
