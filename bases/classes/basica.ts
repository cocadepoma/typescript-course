(() => {
  class Avenger {
    // private name: string;
    // public team: string;
    // public realName: string;
    static ageAvg: number = 40;

    constructor(
      private name: string,
      public team: string,
      public realName: string,
    ) { }

    static getAgeAvg(): string {
      return this.name
    };

    private bio(): string {
      return `${this.name} ${this.team}`;
    }
  };

  // const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
  // console.log(antman.bio());
  // console.log(Avenger.getAgeAvg());
})();