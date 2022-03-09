(() => {
  abstract class Mutant {
    constructor(
      public name: string,
      public realName: string,
    ) { }

  };

  class Xmen extends Mutant {
    salvarMundo(): string {
      return 'Mundo a salvo';
    }
  };

  class Villian extends Mutant {
    conquistarMundo(): string {
      return 'Mundo conquistado';
    };
  };

  const wolverine = new Xmen('Logan', 'Wolverine');
  const magneto = new Villian('Magneto', 'Max Eisenhardt');

  // console.log(wolverine.salvarMundo());
  // console.log(magneto.conquistarMundo());

  const printName = (char: Mutant) => {
    console.log(char.name)
  };

  printName(wolverine);
  printName(magneto);
})();