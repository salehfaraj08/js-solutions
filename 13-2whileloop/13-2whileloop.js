const lengthWords = ((strArr)=>{
    let i=0,cntarr=[]
    while(i<strArr.length){
        cntarr[i]=strArr[i].length
        i++
    }
    return cntarr
})

///for this kind of questions i prefer the for loop because its more comfort
arr=["boo", "doooo", "hoo","ro"]
console.log(lengthWords(arr));