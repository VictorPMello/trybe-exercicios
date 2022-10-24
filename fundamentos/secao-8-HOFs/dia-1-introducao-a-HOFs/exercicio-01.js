const createEmail = (fullName) => {
  const name = fullName.toLowerCase().split(' ');

  const obj = {
    name: fullName,
    email: `${name[0]}_${name[1]}@trybe.com`,
  };
  return obj;
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(createEmail));
