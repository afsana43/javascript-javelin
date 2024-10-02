// var , let , const 
// 1.var = do not use ;
// 2. let = allow it to reassign; 
// 3. const = do not allow it to reassign;

let name = 'mim';
name = 'mini';
console.log(name);

const names = ['mim', 'mini' , 'mimi'];
// names = ['mehedy'];  (kaj krbe na)
names[1] = 'mehedy';
console.log(names);

const public = {
    name:'amjonota',
    roll:'nothing'
};
// public ={name:'mango pepeole'}
public.name= 'mango people';
// public ={ type: 'poor'}
console.log(public);



