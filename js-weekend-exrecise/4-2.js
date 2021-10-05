const Tribonacci = ((sign,n) => {
    if(n===0) return []  
    if(n===1) return sign.slice(0,1) 
    if(n===2) return sign.slice(0,2) 
    if(n===3) return sign
    for(let i=0 ; i<n-3 ; i++){
        sign[i+3] = sign[i] + sign[i+1] + sign[i+2]
    }
    return sign
})

console.log(Tribonacci([1,1,1],10))

