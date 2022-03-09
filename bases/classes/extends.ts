(() => {
  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ) {
      // console.log('Constructor llamado');
    }

    protected getFullName(): string {
      return `${this.name} ${this.realName}`;
    };
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ) {
      super(name, realName);
      // console.log('Contructor de Xmen llamado');
    }

    getFullNameXmen(): string {
      const dad = super.getFullName();
      return `${this.name} ${this.realName} ${this.isMutant} ---- ${dad}`;
    };

    get fullName() {
      return `${this.name} ===> ${this.realName}`;
    }

    set fullName(value: string) {
      if (value.length < 3) {
        throw new Error('El nombre es muy corto');
      }

      this.name = value;
    };

  };

  const wolverine = new Xmen('Logan', 'Wolverine', true);
  // console.log(wolverine);
  // console.log(wolverine.getFullNameXmen());
  // console.log(wolverine.fullName);
  wolverine.fullName = 'Wolverine 2';

  // console.log(wolverine)



})();