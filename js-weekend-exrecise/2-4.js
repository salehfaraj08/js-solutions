const findUniq = (arr =>{
    const found = arr.find(element=> arr.indexOf(element)===arr.lastIndexOf(element))
    return found
})

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))