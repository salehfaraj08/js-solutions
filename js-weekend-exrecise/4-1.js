const fibo = (n => {
    let sum = 0 , before=0 ,after=1 
    if(n===0){
        return 0
    }
    else if(n===1){
        return 1
    }
    for(let i=0 ; i<n-1 ; i++){
        sum = before + after
        before = after
        after = sum
        if(i===n-2){
            return sum
        }
    }
})

console.log(fibo(12))