(() => {
  interface Xmen {
    name: string;
    realName: string;
    muntantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    constructor(
      public name: string,
      public realName: string,
      public age: number
    ) { }

    muntantPower(id: number): string {
      return `${this.name} has power ${id}`;
    }

  }

  const wolverine = new Mutant('Wolverine', 'Logan', 35);
  console.log(wolverine.muntantPower(500), wolverine);
})();