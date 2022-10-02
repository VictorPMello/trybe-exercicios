const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const calenderPin = ['Feriados', 'Sexta-feira'];
const getButtonContainer = document.querySelector(
  '.buttons-container'
);

function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
// Escreva seu código abaixo.

function daysInMounth(arr) {
  const getUl = document.getElementById('days');

  for (let idx = 0; idx < arr.length; idx += 1) {
    const createLi = document.createElement('li');
    getUl.appendChild(createLi);
    createLi.className = 'day';
    createLi.innerText += arr[idx];

    if (arr[idx] === 24 || arr[idx] === 25 || arr[idx] === 31) {
      createLi.className += ' holiday';
    }
    if (
      arr[idx] === 4 ||
      arr[idx] === 11 ||
      arr[idx] === 18 ||
      arr[idx] === 25
    ) {
      createLi.className += ' friday';
    }
  }
}

function createButtons(arr) {
  const holidayButton = document.createElement('button');
  const fridayButton = document.createElement('button');

  getButtonContainer.appendChild(holidayButton);
  holidayButton.id = 'btn-holiday';
  holidayButton.innerText = arr[0];

  getButtonContainer.appendChild(fridayButton);
  fridayButton.id = 'btn-friday';
  fridayButton.innerText = arr[1];
}

function changeColor() {
  const button = document.getElementById('btn-holiday');
  const holiday = document.querySelectorAll('.holiday');
  const color = 'red';
  button.addEventListener('click', () => {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === color) {
        holiday[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holiday[index].style.backgroundColor = color;
      }
    }
  });
}

createDaysOfTheWeek();
daysInMounth(decemberDaysList);
createButtons(calenderPin);
changeColor();
