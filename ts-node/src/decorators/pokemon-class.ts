
function printToConsole(constructor: Function) {
  console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) return printToConsole;
  return () => { };
}

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error(`${id} is not a valid pokemon id`);
      } else {
        return originalMethod(id);
      }
    }
    console.log('CheckValidPokemonId');
    console.log({ target, propertyKey, descriptor });
  }
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return 'Paco'
      },
      set(this, value) {
        Object.defineProperty(this, propertyKey, {
          value,
          writable: !isWritable,
          enumerable: false,
        })
      }
    };

    return descriptor;
  }
}


@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {
  @readOnly()
  public publicApi: string = 'https://pokeapi.co';

  constructor(
    public name: string
  ) { }

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log('POkemon saved to DB ' + id);
  }

}