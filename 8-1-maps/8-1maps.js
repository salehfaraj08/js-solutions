let obj1 = { name : 'saleh'}
let obj2 = { name : 'hello'}
let obj3 = { name : 'world'}

let map1 = new Map();


map1.set(1,obj1)
map1.set(2,obj2)
map1.set(3,obj3)



for(let [key,value] of map1){
    console.log(key , ":" ,value.name);
}
console.log(map1);



