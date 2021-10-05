const shortestWord = (string =>{
    let strarr = string.trim()
    strarr = strarr.split(' ')
    console.log(strarr);
    let max = strarr.reduce((prev,curr) => curr.length > prev.length ? curr : prev)
    max = max.length
    let resultarr = strarr.filter(word => word.length===max)
    return resultarr;
})

console.log(shortestWord('aaaa saadvvvs sassssss'))