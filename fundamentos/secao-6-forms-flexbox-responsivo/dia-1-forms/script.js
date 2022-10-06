const submitButton = document.querySelector('#submit');
const getImageAuth = document.querySelector('#imagens');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (getImageAuth.checked === true) {
    event.target.submit();
  }
});
