const factorial = (number) => {
  let result = 1;

  for (let idx = 2; idx <= number; idx += 1) {
    result *= idx;
  }

  return result;
};
console.log(factorial(5));

// factorial em uma linha
const factorial2 = (number) =>
  number > 1 ? number * factorial2(number - 1) : 1;
console.log(factorial2(5));

const longestWord = (text) => {
  const wordArray = text.split(" ");
  let maxLength = 0;
  let result = "";

  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }

  return result;
};

console.log(
  longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu")
);

// maior palavra em uma linha
const longestWord2 = (text) =>
  text
    .split(" ")
    .sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(
  longestWord2(
    "Antonio foi ao banheiro e não sabemos o que aconteceu"
  )
);
