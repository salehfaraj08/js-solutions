const AbbreviateTwoWords = (str => {
    str = str.split(' ')
    
    let newstr = str.map(word => 
    {return word[0].toUpperCase()}).join('.')
    
    return newstr;
})

console.log(AbbreviateTwoWords('Patrick Feeney'))


