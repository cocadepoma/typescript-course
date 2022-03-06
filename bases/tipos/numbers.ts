(() => {
  let avengers = 10;
  console.log(avengers)

  const villians: number = 20;

  if (avengers < villians) {
    console.log('Estamos en peligro');
  } else {
    console.log('No estamos en peligro');
  }

  avengers = 123;
  console.log({ avengers })
})();