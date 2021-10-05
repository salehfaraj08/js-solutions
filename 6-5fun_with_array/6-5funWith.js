let student ={
    name: 'saleh'
}

let arr = Array(100).fill(student)

console.log(arr)

arr = Array.from({length:100},(_,i)=>1+1*i)
console.log(arr)

let mixarr = [{name:'wajde'},{name:'omri'},{name:'asad'},1,3,6,4,8]
let obj = []
for (let index = 0; index < mixarr.length; index++) {
    if(typeof(mixarr[index])==='object'){
        obj.push(mixarr[index])
    }
}
console.log(obj);

let arr2 = [1,2,3,'hello','how'],obj2={}
for (let index = 0; index < arr2.length; index++) {
    obj2[arr2[index]]=arr2[index]
}

console.log(obj2);

console.log(typeof(arr));
let arr3 = arr2
arr2[0] = 3
console.log(arr2,arr3);

const arr4 = [1,2,3,'hello','how']
let arr5 = arr4.slice()
arr5 [0] = 2
console.log(arr4,arr5);

