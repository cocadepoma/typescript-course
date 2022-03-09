(() => {
  class Avenger {
    constructor(name, power) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    constructor(name, power, flying) {
      super(name, power);
      this.flying = flying;
    }
  }

  const hulk = new Avenger('Hulk', 'Smash');
  const ironMan = new FlyingAvenger('Iron', 'Metal', true);

  console.log(ironMan)
})();