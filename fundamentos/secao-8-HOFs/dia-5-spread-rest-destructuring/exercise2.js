const sum = (num1, num2, num3, ...rest) => {
  return `${num1 + num2 + num3}, ${rest}`;
};

console.log(sum(4, 5, 6, 7, 8, 9, 10));
