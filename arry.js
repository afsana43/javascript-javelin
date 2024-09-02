const names = ['mim', 'mwehedy', 'mini'];
console.log( typeof names);
const numbers = [ 2, 5, 7, 8];
console.log ( typeof numbers);


// length of array:
let numbers2 = [ 2, 5, 7, 8, 9];
console.log(numbers2.length);

// index of array:
console.log(numbers2[2]);
console.log(numbers2[0]);

// set index:
numbers2[5]= 10;
console.log(numbers2);

// get array :
console.log(numbers2[4]);


// push :add last one :
const numbers3 =[34, 546, 63, 67,43,37]
console.log(numbers3);
numbers3.push(4566)
numbers3.push(45996,90)
console.log(numbers3);

// pop: remove last one
numbers3.pop([4])
console.log(numbers3);

// unshift : add first one
numbers3.unshift(111);
console.log(numbers3);

// shift: remove first one
numbers3.shift([0])
console.log(numbers3);


// includes : kono element khuje ber kora:
const names2 = ['mim', 'mimi', 'mini', 'maisha'];
console.log( names2);
console.log(names2.includes('mini'))


// indexof : khuje ber kora
console.log(names2.indexOf('mni'));



// array check kora : Array.isArray:
console.log(Array.isArray(names2));










