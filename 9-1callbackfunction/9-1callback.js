function isString(string,callback){
    if(typeof(string) === 'string')
        callback(string)
    else{
        console.log('not string');
    }
}

function callback(params) {
    console.log(params);
}

isString('saleh',callback)

function firstWordUpperCase(string,callback){
    string = string.split(' ')
    let str = string[0]
    str = str.toUpperCase()
    string[0] = str
    callback(string)
}


function createdash(params) {
    console.log(params.join('-'))
    
}
let str='hello world java script'
firstWordUpperCase(str,createdash)


function firsLetterUpperCaseOnWord(string,callback) {
    string = string.split(' ')
    for (let i = 0; i < string.length; i++) {
        let str = string[i]
        str = str.split('')
        let tmp = str
        tmp = str
        str = str[0]
        str = str.toUpperCase()
        tmp[0]=str
        tmp = tmp.join('')
        string[i] = tmp
    }
    string = string.join(' ')
    callback(string)
}

function print(params) {
    console.log(params);
}

let str1='hello world java script'
firsLetterUpperCaseOnWord(str1,print)



