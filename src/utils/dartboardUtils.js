export const getDartboardValues = (difficulty) => {
  const singles = Array.from({ length: 20 }, (_, i) => (i + 1).toString());
  const doubles = singles.map((value) => `D${value}`);
  const trebles = singles.map((value) => `T${value}`);
  const allValues = [...singles];

  if (difficulty === 'Intermediate' || difficulty === 'Hard') {
    allValues.push(...doubles);
  }
  if (difficulty === 'Hard') {
    allValues.push(...trebles, '25', 'bull');
  }

  return allValues;
};
