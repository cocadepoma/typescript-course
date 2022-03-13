import { getPokemon } from './generics/get-pokemon';
import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');
// console.log(charmander)
// getPokemon(4)
//   .then((resp) => {
//     console.log(resp.sprites.front_default);
//   })
//   .catch(() => {
//     console.log('error')
//   })
//   .finally(() => {
//     console.log('Final')
//   });
console.log(charmander)
charmander.savePokemonToDB(900);

// (Pokemon.prototype as any).customName = 'Custom Name';