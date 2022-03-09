(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    hulk: string;
    spiderman: string;
    captainAmerica: string;
    thor: string;
    blackWidow: string;
    doctorStrange: string;
    blackPanther: string;
    falcon: string;
    hawkeye: string;
    daredevil: string;
    quicksilver: string;
    silverSurfer: string;
    starLord: string;
    wolverine: string;
  }
  const avengers = {
    nick: 'Samuel Jackson',
    ironman: 'Tony Stark',
    hulk: 'Bruce Banner',
    spiderman: 'Peter Parker',
    captainAmerica: 'Steve Rogers',
    thor: 'Thor Odinson',
    blackWidow: 'Natasha Romanoff',
    doctorStrange: 'Stephen Strange',
    vision: 'Vision',
    blackPanther: 'T\'Challa',
    falcon: 'Sam Wilson',
    hawkeye: 'Clint Barton',
    daredevil: 'Scott Lang',
    quicksilver: 'Pietro Maximoff',
    silverSurfer: 'Norrin Radd',
    starLord: 'Peter Quill',
    wolverine: 'Logan',
  };

  const { nick, ironman, hulk } = avengers;

  console.log(nick, ironman, hulk.toUpperCase());


  const printAvenger = ({ blackPanther, captainAmerica, ...rest }: Avengers) => {
    console.log(blackPanther, captainAmerica);
    console.log('\n', rest)
  };

  printAvenger(avengers);


  const [capi, ironmanArr, , spidey]: string[] = ['Cap. América', 'Ironman', 'Hulk', 'Spiderman', 'Thor', 'Black Widow', 'Doctor Strange', 'Vision', 'Falcon', 'Hawkeye', 'Daredevil', 'Quicksilver', 'Silver Surfer', 'Star Lord', 'Wolverine'];
  // const ironmanArr = avengersArr[1];

  console.log(capi, ironmanArr, spidey);
})();