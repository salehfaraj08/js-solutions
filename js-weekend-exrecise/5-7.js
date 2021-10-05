const shortestWord = (string =>{
    let strarr = string.trim()
    strarr = strarr.split(' ')
    
    let min = strarr.reduce((prev,curr) => prev.length < curr.length ? prev : curr)
    return min
})

console.log(shortestWord('aaaa saadvvvs sa  '))