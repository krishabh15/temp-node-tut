// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names'); // const {john, peter} = require('./4-names');
console.log(names);
const funct = require('./5-utils');
console.log(funct);
const data = require('./6-export-as-you-go');
console.log(data);
require('./7-mind-grenade');

funct("Rishabh");
funct(names.john);
funct(names.peter);