(() => {
  let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Speed", "Intelligence"],
  };

  let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Speed", "Intelligence"],
  };


  // flash = {
  //   name: 'Clark Kent',
  //   age: 35,
  //   powers: ['superhuman strength', 'flight', 'x-ray vision'],
  //   getName() {
  //     return this.name;
  //   }
  // }

  console.log(flash)
})();