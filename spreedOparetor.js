
// max ber kora normal numbers theke
const numbers = (1, 3, 4, 6, 6, 7);
const maxNumber = Math.max(numbers);
// console.log(maxNumber);


// array theke numbers ber kora :(array te spreed oprator na dile oi  value gula ke kono method payna)
const numbers2 = [34, 56, 67, 56, 36, 68, 77];
// console.log(...numbers2);

const maxNumber2 = Math.min(...numbers2);
// console.log(maxNumber2);



// copy of spreed oparetor;
const number = [3, 45, 6, 7, 68];
const newNumber = number;
// newNumber.push(60)
// console.log(newNumber);
// console.log(number);


// stop copying spreed oparetor: and adding number:

const stopCopyNumber = newNumber;
console.log(...stopCopyNumber);
// console.log(...stopCopyNumber , 100,80);  

