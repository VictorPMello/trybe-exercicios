const RIGHT_ANSWERS = [
  'A',
  'C',
  'B',
  'D',
  'A',
  'A',
  'D',
  'A',
  'D',
  'C',
];
const STUDENT_ANSWERS = [
  'A',
  'N.A',
  'B',
  'D',
  'A',
  'C',
  'N.A',
  'A',
  'D',
  'B',
];

const checkAnswers = (rightArr, studentArr) => {
  if (rightArr === studentArr) {
    return 1;
  } else if (studentArr === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
};

const corretor = (rightArr, studentArr, callback) => {
  let = total = 0;

  for (let idx = 0; idx < studentArr.length; idx += 1) {
    total += callback(rightArr[idx], studentArr[idx]);
  }

  return total;
};

console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
