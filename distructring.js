const mySelf ={
    name: 'mim',
    roll: 94656,
    class : 'diploma'
};


// normal way to get value;
const myName = mySelf.name;
console.log(myName);


// distructring way to get value;

// const { name, roll} = mySelf;
const { name, roll:reg} = mySelf;
console.log(name, reg);

// array theke distructing :

const numbers =[34, 66, 45, 46];
const [x , y] = numbers;
console.log(x , y);
