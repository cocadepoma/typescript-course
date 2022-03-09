(() => {
  class Apocalipsis {

    static instance: Apocalipsis;

    constructor(public name: string) { }

    static callApocallipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy el único Apocalipsis');
      }

      return Apocalipsis.instance;
    }
  }

  const apocalipsis = new Apocalipsis('Soy el apocalipsis');
  const ap1 = Apocalipsis.callApocallipsis();

  console.log(apocalipsis)
})();