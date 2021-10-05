const maskify = (str =>{
    
    for(let i=0;i<str.length-4;i++){
        str = str.replace(str[i],'#')
    }
    return str
})

console.log(maskify("Nananananananananananananananana Batman!"))