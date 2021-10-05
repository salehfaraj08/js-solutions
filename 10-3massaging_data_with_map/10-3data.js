const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
];

function print(arr){
    const arrNames =[]
    arr.forEach(key => {
        arrNames.push(key.name)
    })
    return arrNames
}

/* console.log(print(data)); */

function print(arr){
    const arrNames =[]
    arr.forEach(key => {
        arrNames.push(key.name)
    })
    return arrNames
}

/* console.log(print(data)); */

function bornBefore(arr){
    const filterd= arr.filter(elemnt => {
        let year = Number(elemnt.birthday.split('-')[2])
        return year<1990 
    })
    return filterd
}

console.log(bornBefore(data)) 

const countFoods= (arr)=> {
    const objDeff ={}
    
    arr.forEach(key => {
        //meats array
        key.favoriteFoods.meats.forEach(key => {
            if(objDeff.hasOwnProperty(key)){
                objDeff[key]+=1
            }
            else{
                objDeff[key]=1
            } 
        })

        // fish array
        key.favoriteFoods.fish.forEach(key => {
            if(objDeff.hasOwnProperty(key)){
                objDeff[key]+=1
            }
            else{
                objDeff[key]=1
            } 
        })
    })
    return (objDeff);
    
}
console.log(countFoods(data))