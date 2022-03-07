(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Speed", "Intelligence"],
  };

  let superman: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Speed", "Intelligence"],
    getName() {
      return this.name;
    }
  };


  // flash = {
  //   name: 'Clark Kent',
  //   age: 35,
  //   powers: ['superhuman strength', 'flight', 'x-ray vision'],
  //   getName() {
  //     return this.name;
  //   }
  // }

  console.log(flash);
  console.log(superman);

})();