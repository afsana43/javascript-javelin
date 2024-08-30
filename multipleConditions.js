let salary = 35000;
let job = 'engineer';
let isMatured = true;
let height = 70;

// structure : && oparetor:
// if(conditions && conditions){
//   executed code
// }
// else{
//     other executed code
// }
1.
if(salary >30000 && height>68){
    console.log('you will granted');
    
}
else{
    console.log('please find another one');
    
}


// strucutre : || oparetor:
// if(conditions || conditions){
//   executed code
// }
// else{
//     other executed code
// }

2.
if(salary >30000 || height>68 && job =='engineer' && isMatured ==true){
    console.log('you will granted');
    
}
else{
    console.log('please find another one');
    
}