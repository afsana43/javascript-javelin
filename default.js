
// default value set kore function call:
function add (num1 = 0, num2 = 6){
    let result = 0;
    result = num1 + num2;
    console.log(result);
    
}
add(4);


// block er bahire log kaj krbe na;
function add (num1 = 0, num2 = 6){
    let result = 0;
    result = num1 + num2;   
}
add(4);
console.log(result);