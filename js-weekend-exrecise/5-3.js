const toCamelCase= (str => {
    if(str.includes('-')){
        str = str.split('-')
    }
    if(str.includes('_')){
        str = str.split('_')
    }
    for(let i=1 ; i<str.length ; i++){
        let tmp = str[i]
        tmp = tmp.split('')
        tmp[0] = tmp[0].toUpperCase()
        tmp = tmp.join('')
        str[i] = tmp
    }
    str = str.join('')
    return str
})

console.log(toCamelCase('The_Stealth_Warrior'))