import validator from 'validator';

const verifyBtn = document.getElementById('verify');

verifyBtn.addEventListener('click', () => {
  const inputFirstName = document.getElementById('firstName');
  console.log(validator.isEmpty(inputFirstName.value));
  const inputEmail = document.getElementById('email');
  console.log(validator.isEmail(inputEmail.value));
  const inputPassword = document.getElementById('password');
  console.log(validator.isStrongPassword(inputPassword.value));
});
