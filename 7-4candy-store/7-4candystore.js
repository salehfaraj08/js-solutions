function getCandy(candyStore,id){
    //your code
    for(let i=0;i<candyStore.candies.length;i++){
        if(id===candyStore.candies[i].id) 
            return candyStore.candies[i];
    }
    return "there is no such an id"
}

function getPrice(candyStore, id){
    //your code
    for(let i=0;i<candyStore.candies.length;i++){
        if(id===candyStore.candies[i].id) 
            return "the price for this candy is:" + candyStore.candies[i].price;
    }
    return "there is no such an id"
    }

function addCandy(candyStore, id, name, price){
    //your code
    candyStore.candies.push({name:name,id:id,price:price,amount:1});
}


function buy(candyStore, id){
    //your code
    for(let i=0;i<candyStore.candies.length;i++){
        if(id===candyStore.candies[i].id){   
            candyStore.candies[i].amount--;
            candyStore.cashRegister+=candyStore.candies[i].price;
        }
    }
    
}

const candyStore = {
    candies:[
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}



/* console.log(getCandy(candyStore,"5hd7y")); 
console.log(getCandy(candyStore,"5hy")); 
console.log(getCandy(candyStore,"as12f")); 

console.log(getPrice(candyStore,"5hd7y"));  
console.log(getPrice(candyStore,"as12f")); 


addCandy(candyStore,"135d","loacker",5);

console.log(candyStore.candies);
 */
buy(candyStore,"5hd7y");

console.log(candyStore);