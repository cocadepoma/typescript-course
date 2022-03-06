(() => {
  const hero: [string, number, boolean] = ['Batman', 45, true];
  hero[0] = 'Ironman'
  hero[1] = 32;
  hero[2] = false;

  console.log(hero);
})();