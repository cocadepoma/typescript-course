(() => {
  const addNumber = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hello ${name}`;
  const saveTheWorld = () => `El mundo está salvado`;

  // let myFunction: (a: number, b: number) => number;
  // let myFunction: (a: string) => string;
  let myFunction: () => void;

  // myFunction = 10;
  // console.log(myFunction);

  // myFunction = addNumber;
  // console.log(myFunction(1, 2));

  // myFunction = greet;
  // console.log(myFunction('Paco'));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();