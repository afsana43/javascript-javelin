const name = "afsana hamid mim";
let reverse = "";

// 1. for of loop
for (const letter of name) {
  reverse = letter + reverse;
}
// console.log(reverse);

// 2.for loop
for (let i = 0; i < name.length; i++) {
//   console.log(i);
//   console.log(name[i]);
  const letter = name[i];
  reverse = letter + reverse;

}
console.log(reverse);