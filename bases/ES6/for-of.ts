(() => {
  type Avenger = {
    name: string;
    weapon: string;
  }

  const ironman: Avenger = {
    name: 'Tony Stark',
    weapon: 'Armor suit',
  };
  const capAmerica: Avenger = {
    name: 'Captain America',
    weapon: 'Shield',
  };
  const thor: Avenger = {
    name: 'Thor Odinson',
    weapon: 'Mjolnir',
  };

  const avengers: Avenger[] = [ironman, capAmerica, thor];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }

})();