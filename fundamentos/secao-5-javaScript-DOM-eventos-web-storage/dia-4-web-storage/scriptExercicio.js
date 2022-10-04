// 1° requisito Alterar cor de fundo
const body = document.body;
const getButtonBackground = document.getElementById('btn-background');

getButtonBackground.addEventListener('click', () => {
  const inputBackgroundColor =
    document.querySelectorAll('.background');
  const arrColor = [];
  for (let idx of inputBackgroundColor) {
    arrColor.push(idx.value);
  }
  rgb = `rgb(${arrColor[0]},${arrColor[1]},${arrColor[2]})`;
  body.style.backgroundColor = rgb;
});

// 2° requisito Alterar cor do texto
const getButtonColor = document.getElementById('btn-color');
getButtonColor.addEventListener('click', () => {
  const inputColor = document.querySelectorAll('.color');
  const arrColor = [];
  for (let idx of inputColor) {
    arrColor.push(idx.value);
  }
  rgb = `rgb(${arrColor[0]},${arrColor[1]},${arrColor[2]})`;
  body.style.color = rgb;
});

// 3° requisito Alterar tamanho da fonte
const getButtonFontSize = document.getElementById('btn-fontSize');
getButtonFontSize.addEventListener('click', () => {
  const inputFontSize = document.querySelector('#fontSize');
  body.style.fontSize = `${inputFontSize.value}px`;
});

// 4° requisito Alterar espaçamento entre linhas
const getButtonLineHeight = document.getElementById('btn-lineHeight');
getButtonLineHeight.addEventListener('click', () => {
  const inputLineHeight = document.querySelector('#lineHeight');
  body.style.lineHeight = `${inputLineHeight.value}px`;
});

// 5° requisito Alterar tipo de fonte
const getButtonFontFamily = document.getElementById('btn-fontFamily');
getButtonFontFamily.addEventListener('click', () => {
  const inputFontFamily = document.querySelector('#fontFamily');
  body.style.fontFamily = `${inputFontFamily.value}`;
});

// Salvar informações em localStorage
