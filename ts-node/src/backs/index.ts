// import { Hero as SuperHero, Hero1, Hero2, Hero3, Hero4 } from "./classes/Hero";
// import * as HeroClasses from './classes/Hero';
// import powers from './data/powers';
import { printObject, genericFunction } from '../generics/generics';
import { Hero, Villain } from '../interfaces';

// const Hero = 123;

// const ironman = new HeroClasses.Hero('Ironman', 3, 30);
// console.log(ironman.power);


// console.log(powers)


// sect 11


// printObject(123);
// printObject('123');
// printObject(true);
// printObject(null);
// printObject(undefined);
// printObject([]);
// printObject({});
// printObject(function () { });
// printObject(new Date());
// printObject(Symbol('123'));
// printObject(new Map());
// printObject(new Set());
// printObject(new WeakMap());
// printObject(new WeakSet());
// printObject(new Promise(() => { }));
// printObject(new Error('123'));
// printObject(new EvalError('123'));
// printObject(new RangeError('123'));
// printObject(new ReferenceError('123'));
// printObject(new SyntaxError('123'));
// printObject(new TypeError('123'));
// printObject(new URIError('123'));
// printObject(new RegExp('123'));
// printObject(new Int8Array(10));
// printObject(new Uint8Array(10));
// printObject(new Uint8ClampedArray(10));
// printObject(new Int16Array(10));
// printObject(new Uint16Array(10));
// printObject(new Int32Array(10));
// printObject(new Uint32Array(10));
// printObject(new Float32Array(10));
// printObject(new Float64Array(10));
// printObject(new BigInt64Array(10));
// printObject(new BigUint64Array(10));
// printObject(new ArrayBuffer(10));
// printObject(new DataView(new ArrayBuffer(10)));

// console.log(genericFunction(3.13213).toFixed(2));
// console.log(genericFunction('123').charAt(0));


const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
};

console.log(genericFunction<Villain & Hero>(deadpool));
console.log(genericFunction<Villain | Hero>(deadpool));
console.log(genericFunction<Hero>(deadpool));