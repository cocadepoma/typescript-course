import powers from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
  ) { }

  get power(): string {
    return powers.find(p => p.id === this.powerId)?.desc || 'Power not found';
  }

}

export const Hero1 = {};
export const Hero2 = {};
export const Hero3 = {};
export const Hero4 = {};

export const PI = 3.14;
export const myName = 'Paco';

