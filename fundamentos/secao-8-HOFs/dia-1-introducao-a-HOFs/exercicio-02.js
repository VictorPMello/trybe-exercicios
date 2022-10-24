/*
 
! Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar 

? um número aleatório entre 1 e 5 
? recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.

! O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

*/

const checkBetNumber = (betNumber, randowNumber) =>
  betNumber === randowNumber
    ? 'Parabéns você ganhou'
    : 'Tente novamente';

const winningPrize = (betNumber, callBack) => {
  const randowNumber = Math.floor(Math.random() * 5) + 1;

  console.log(randowNumber);

  return callBack(betNumber, randowNumber);
};

console.log(winningPrize(5, checkBetNumber));
