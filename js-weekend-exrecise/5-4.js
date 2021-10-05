const toWeirdCase = (str => {
    let newstr="",j=0
    for (let i = 0; i < str.length; i++) {
        if(str[i]===' '){
            j=0
            newstr += ' '
        }
        else{
            if(j%2===0){
                newstr += str[i].toUpperCase()
                j++
            }
            else{
                newstr += str[i].toLowerCase()
                j++
            }
        }
    }
    return newstr
})

console.log(toWeirdCase('Weirds string case'))