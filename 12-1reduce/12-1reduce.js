let array1 = [1, 2, 3, 4, 8, 11, 13];
let sum = array1.reduce(function(prev,curr){
    return prev+curr
})
console.log(sum);
sum=0
sum = array1.reduce(function(previous,curr){
    if(previous%2===0&&curr%2===0){
        return previous+curr
    }
    else if(previous%2===0){
        return previous
    }
    else if(curr%2===0){
        return curr
    }

},0)

console.log(sum);

avg = array1.reduce(function(previous,curr){
    return previous+curr

},0)

console.log(avg/array1.length);