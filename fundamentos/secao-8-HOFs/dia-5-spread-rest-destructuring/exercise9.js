const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

console.log([
  ...yearSeasons.spring,
  ...yearSeasons.summer,
  ...yearSeasons.autumn,
  ...yearSeasons.winter,
]);
