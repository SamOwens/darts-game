export const getDartboardValues = (difficulty) => {
  const singles = Array.from({ length: 20 }, (_, i) => (i + 1).toString());
  const doubles = singles.map((value) => `D${value}`);
  const trebles = singles.map((value) => `T${value}`);
  const bullseye = ['25', 'Bullseye'];

  switch (difficulty) {
    case 'Singles':
      return singles;
    case 'Doubles':
      return doubles;
    case 'Trebles':
      return trebles;
    case 'Mixed':
      return [...singles, ...doubles, ...trebles, ...bullseye];
    default:
      return singles;
  }
};
