(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: (n: string) => string;
  };

  let myCustomVariable: (string | number | Hero) = 'Paco';
  console.log(myCustomVariable);

  myCustomVariable = 20;
  console.log(myCustomVariable);

  myCustomVariable = {
    name: 'Paco',
    age: 24,
    powers: ['Speed', 'Intelligence'],
    getName(name) {
      return name;
    }
  };
})();