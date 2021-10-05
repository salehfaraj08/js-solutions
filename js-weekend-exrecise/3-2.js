const numGetOff = (arr => {
    arr = arr.reduce((acc,val) => acc.concat(val),[])
    let numGetOff=0
    for(let i=0 ; i < arr.length ; i++){
        if(i%2===0){
            numGetOff+=arr[i]
        }
        if(i%2===1){
            numGetOff-=arr[i]
        }
    }
    console.log(numGetOff);
})

numGetOff([[5,0],[1,2],[10,5],[0,2]])