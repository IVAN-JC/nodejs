import {square, q, arr, otbor} from './export.js';
console.log("Именнованный экспорт : ")
console.log(square(5));
console.log(q);
console.log(otbor(arr));
console.log("Безымянный экспорт : ")

import arrOne from './exportdefault.js';

console.log(arrOne);