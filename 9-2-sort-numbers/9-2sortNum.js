const numbers = [1, -5, 666, 2, 400, 11]

let sort1 = numbers.sort((x,y) => x-y)
console.log(sort1);


let sort2 = numbers.sort((x,y) => y-x)
console.log(sort1);