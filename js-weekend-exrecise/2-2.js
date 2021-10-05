const binaryToDec = (arr=>{
    let i=arr.length-1,converter=0
    arr.forEach(element => {
        if(element%2===1){
            converter += Math.pow(2,i)
        }
        i--
    });
    return converter

})

console.log(binaryToDec([0,1,1,0,0,0,0,0]))