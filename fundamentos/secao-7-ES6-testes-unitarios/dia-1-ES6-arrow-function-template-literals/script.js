const btn = document.querySelector("button");
const strong = document.querySelector("strong");
let clickCount = 0;

strong.innerHTML = 0;

btn.addEventListener(
  "click",
  () => (strong.innerHTML = clickCount += 1)
);

const changeX = (nome) => {
  const text = "Tryber x aqui!";
  const textArr = text.split(" ");
  for (let idx = 0; idx < textArr.length; idx += 1) {
    if (textArr[idx] === "x") {
      textArr[idx] = nome;
    }
  }
  return textArr.join(" ");
};

console.log(changeX("Bebeto"));
