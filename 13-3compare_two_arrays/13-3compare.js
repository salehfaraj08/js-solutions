const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

const compareArrays = ((arr1,arr2)=>{
    let tmp=[]
    for (let i = 0; i < arr1.length; i++) {
        for(let j=0 ; j < arr2.length ; j++){
            if(arr1[i]===arr2[j]){
                tmp.push(arr1[i])
            }
        }
    }
    if(tmp[0]){
        return tmp
    }
    return false
})

console.log(compareArrays(food1,food))