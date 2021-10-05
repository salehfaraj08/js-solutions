const isIsogram = (str => {
    let flag = true
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if(!(str.indexOf(str[i])===str.lastIndexOf(str[i]))){
            flag = false
        }
    }
    return flag
})

console.log(isIsogram('moOse'));