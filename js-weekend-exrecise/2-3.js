const findNextSquare = (n => {
    if(Math.sqrt(n)%1===0){
        n = Math.sqrt(n) + 1
        return Math.pow(n,2)
    }
    return -1
})

console.log(findNextSquare(676)); 