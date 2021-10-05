const accum = (string =>{
    let newstr=''
    string = string.toLowerCase()
    for(let i=0 ; i<string.length ; i++){
        newstr += string[i].toUpperCase()
        if(i<string.length-1){
            newstr += string[i].repeat(i) + '-'
        }
        else{
            newstr += string[i].repeat(i)
        }

    }
    return newstr
})

console.log(accum('RqaEzty'))