const notaPessoaCandidata = 80;

if (notaPessoaCandidata >= 80) {
  console.log('Parabéns, você foi aprovada(o)!');
} else if (notaPessoaCandidata >= 60 && notaPessoaCandidata < 80) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovada(o)');
}
