const foods = ["falafel", "sabich", "hummus", "pizza with extrapineapple"]


/*ascending*/
let sort2 = foods.sort()
console.log(foods); 
/*descending*/
let sort3 = foods.sort().reverse()
console.log(foods);   

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];
/*ascending*/
let sortFoodUppercase = foodsWithUpperCase.sort((a,b) => {
    return a.toLowerCase()>b.toLowerCase() ? 1 : a.toLowerCase()<b.toLowerCase() ? -1 : 0
})

console.log(foodsWithUpperCase);


/*descending*/
let sortFoodUppercase1 = foodsWithUpperCase.sort((a,b) => {
    return b.toLowerCase()>a.toLowerCase() ? 1 : b.toLowerCase()<a.toLowerCase() ? -1 : 0
})

console.log(foodsWithUpperCase) 
/*descending*/
const words = ["apple", "supercalifragilisticexpialidocious","hi", "zoo"];

let wordlength = words.sort((a,b) => {
    return b.length>a.length ? 1 : b.length<a.length ? -1 : 0
})

console.log(words); 











