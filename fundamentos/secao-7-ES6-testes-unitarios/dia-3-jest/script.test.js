const { expect } = require('expect');
const { sum, myRemove, myFizzBuzz } = require('./script');

describe('Exercicio 1', () => {
  it('Verifica se a função existe', () => {
    expect(typeof sum).toBe('function');
    expect(sum).toBeDefined();
  });

  it('Soma de 4 e 5 deve retornar 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Soma de 0 e 0 deve retornar 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Soma de 4 e '5' deve lançar um error ", () => {
    expect(() => sum(4, '5')).toThrow();
  });

  it('Mensagem de erro deve ser parameters must be numbers', () => {
    expect(() => sum(4, '5')).toThrowError(
      'parameters must be numbers'
    );
  });
});

describe('Requisito 2', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Requisito 3', () => {
  it('divisão por 3 e 5 deve retornar fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('divisão por 3 deve retornar fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('divisão por 5 deve retornar buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('divisão por 11 deve retornar 11', () => {
    expect(myFizzBuzz(11)).toEqual(11);
  });

  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
});
