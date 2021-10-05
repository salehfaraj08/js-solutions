/** for each **/
const foreach = ((callback,arr) =>{
    for(let i=0 ; i<arr.length ; i++){
        callback(arr[i])
    }
})

const print = (element => {
    console.log(element);
})

foreach(print,[0,1,2,3,4])


/** filter **/
const filter = ((callback,arr) =>{
    let result = []
    for(let i=0 ; i<arr.length ; i++){
        if(callback(arr[i]))
            result = [...result,arr[i]]
    }
    return result
})

const bigger = (element => {
    return element>2
})

console.log(filter(bigger,[0,1,2,3,4]))

/** map **/
const map = ((callback,arr) =>{
    let result = []
    for(let i=0 ; i<arr.length ; i++){
        result = [...result,callback(arr[i])]
    }
    return result
})

const getName = (element => {
    return element.name
})

console.log(map(getName,[{name:'asad'},{name:'shadi'}]))