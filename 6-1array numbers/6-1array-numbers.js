function arrayLength(arr){
    let length=0;
    arr.forEach(i=>{
        length++;
    })
    return length;
}

function arraySum(arr){
    let sum=0;  
    arr.forEach(i=>{
        sum+=i;
    })
    return sum;
}

function arrayMulti(arr){
    let multisum=1;
    for(let i=0;i<arr.length-1;i++){
        multisum=multisum+(arr[i]*arr[i+1]);
    }
    return multisum;
}




const arr = [1,7,3,0,-5,7,3,9];
arr.forEach(i => {
    console.log(i);
});

console.log("the length is:",arrayLength(arr));
console.log("the sum is:",arraySum(arr));
console.log("the multiplication sum is:",arrayMulti(arr));