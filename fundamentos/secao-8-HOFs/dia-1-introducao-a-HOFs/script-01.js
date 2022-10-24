const awake = () => 'Acordado!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(awake);
doingThings(coffee);
doingThings(sleep);
