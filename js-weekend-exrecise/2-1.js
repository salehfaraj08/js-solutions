const sumOfLowest = (arr=>{
    arr.sort((a,b)=> a-b)
    return arr[0]+arr[1]
})

console.log(sumOfLowest([10, 343445353, 3453445, 3453545353453]));