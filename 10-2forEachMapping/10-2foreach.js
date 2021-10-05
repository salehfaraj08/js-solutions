function doubleValues(arr){
    const double= arr.map(function (elemnt) {
            return elemnt*=2
    })
    return double
}

let arr = [2,4,8,10]
console.log(doubleValues(arr));

function onlyEvenValues(arr){
    const double = []
    arr.forEach(element => {
        if(element%2===0)
            double.push(element)
    })

    return double
}

arr = [2,3,9,8,10,12,13,16]
console.log(onlyEvenValues(arr)); 

function showFirstAndLast(arr){
    const mix = []

    arr.forEach(element => {
        if(typeof(element[0]) === 'string')
            mix.push(element)
        if(typeof(element[arr.length-1]) === 'string')
            mix.push(element)
    })
    return mix
}

arr = ['2',3,9,8,10,12,13,'16']
console.log(showFirstAndLast(arr)); 

function vowelCount(string){
    const objvowel ={},vowels=['a','e','i','o','u']
    for (let index = 0; index < string.length; index++) {
        if(vowels.includes(string[index])){
            if(objvowel.hasOwnProperty(string[index])){
                objvowel[string[index]]+=1
            }
            else{
                objvowel[string[index]]=1
            }
        } 
        
    }
    return objvowel
}

console.log(vowelCount('aefgcei'));

function capitalize(string){
    return string.toUpperCase()
}

console.log(capitalize('aefgcei'));

function shiftLetters(string){
    let str=""
    for (let i= 0; i< string.length; i++) {
        if(string[i]==='a'){
            str+=String.fromCharCode(string.charCodeAt(i)+25)
        }
        else{
            str+=String.fromCharCode(string.charCodeAt(i)-1)
        }
    }
    return str

}

console.log(shiftLetters('aefgcei'));

function swapCase(string){
    let strArr=[]
    strArr=string.split(' ')
    
    const upperArr= strArr.map(function (elemnt) {
        return capitalize(elemnt)
    })
    
    strArr = upperArr
    strArr=strArr.join(' ')
    return strArr
}

console.log(swapCase('wajde saleh omri'));
