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

  localStorage.setItem('backgroundColor', rgb);
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

  localStorage.setItem('fontColor', rgb);
  body.style.color = rgb;
});

// 3° requisito Alterar tamanho da fonte
const getButtonFontSize = document.getElementById('btn-fontSize');
getButtonFontSize.addEventListener('click', () => {
  const inputFontSize = document.querySelector('#fontSize');
  const fontSize = `${inputFontSize.value}px`;

  localStorage.setItem('fontSize', fontSize);
  body.style.fontSize = fontSize;
});

// 4° requisito Alterar espaçamento entre linhas
const getButtonLineHeight = document.getElementById('btn-lineHeight');
getButtonLineHeight.addEventListener('click', () => {
  const inputLineHeight = document.querySelector('#lineHeight');
  const lineHeight = `${inputLineHeight.value}px`;

  localStorage.setItem('lineHeight', lineHeight);
  body.style.lineHeight = lineHeight;
});

// 5° requisito Alterar tipo de fonte
const getButtonFontFamily = document.getElementById('btn-fontFamily');
getButtonFontFamily.addEventListener('click', () => {
  const inputFontFamily = document.querySelector('#fontFamily');
  const fontFamily = `${inputFontFamily.value}`;

  localStorage.setItem('fontFamily', fontFamily);
  body.style.fontFamily = fontFamily;
});

// Salvar informações em localStorage
body.style.backgroundColor = localStorage.getItem('backgroundColor');
body.style.color = localStorage.getItem('fontColor');
body.style.fontSize = localStorage.getItem('fontSize');
body.style.lineHeight = localStorage.getItem('lineHeight');
body.style.fontFamily = localStorage.getItem('fontFamily');
