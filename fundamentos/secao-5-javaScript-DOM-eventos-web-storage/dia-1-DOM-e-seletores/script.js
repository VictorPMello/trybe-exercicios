const header = document.querySelector('#header-container');
header.style.background = 'rgb(0, 150, 0)';

const emergency = document.querySelector('.emergency-tasks');
emergency.style.background = 'rgb(255,0,0)';

const noEmergency = document.querySelector('.no-emergency-tasks');
noEmergency.style.background = 'yellow';

const emergencyContent = document.querySelectorAll(
  '.emergency-tasks h3'
);

for (let i in emergencyContent) {
  emergencyContent[i].style = 'background-color:blue; height: 50px;';
}

const noEmergencyContent = document.querySelectorAll(
  '.no-emergency-tasks h3'
);

for (let i in noEmergencyContent) {
  noEmergencyContent[i].style =
    'background-color:black; height: 50px;';
}

const footer = document.getElementById('footer-container');
footer.style.background = 'green';
