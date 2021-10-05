const shape = ((N)=>{
    let str=""
    for(let i=0 ; i<N ; i++){
        
        for(let j=0 ; j<i+1 ; j++){
            str+='#'
        }
        console.log(str);
        str=""
    }
})

shape(10)