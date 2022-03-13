export const printObject = (argument: any) => {
  console.log(argument);
};

export function generic<T>(argument: T): T {
  return argument;
}

export const genericFunction = <T>(argument: T) => argument;
