console.log('---------localStorage----------');

// console.log(localStorage.length);
// localStorage.setItem('firstName', 'Adam');
// localStorage.setItem('lastName', 'Smith');
// console.log(localStorage.getItem('lastName'));
// console.log(localStorage.getItem('firstName'));
// localStorage.clear();
// console.log(localStorage.length);

console.log('---------sessionStorage----------');

// console.log(sessionStorage.length);
// sessionStorage.setItem('firstName', 'Adam1');
// sessionStorage.setItem('lastName', 'Smith1');
// console.log(sessionStorage.getItem('firstName'));
// console.log(sessionStorage.getItem('lastName'));
// sessionStorage.removeItem('lastName');
// console.log(sessionStorage.length);
// sessionStorage.clear();
// console.log(sessionStorage.length);

console.log('-------JSON-------');

const myObj = {
  name: 'Link',
  age: 20,
};

localStorage.setItem('myData', JSON.stringify(myObj));
console.log(localStorage.getItem('myData'));

const recoveredObj = JSON.parse(localStorage.getItem('myData'));

console.log(recoveredObj);

let organization = {
  name: 'trybe',
  since: 2019,
};

let storage = localStorage;

storage.setItem('escola', JSON.stringify(organization));
let org = JSON.parse(storage.getItem('escola'));
console.log(org);

let classes = ['2019/set', '2019/oct'];
storage.setItem('turmas', JSON.stringify(classes));
let cls = JSON.parse(storage.getItem('turmas'));
console.log(cls);
