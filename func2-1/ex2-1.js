function describeCountry(country,population,capitalCity){
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

let var1= describeCountry('finland','6 million','Helsinki');
let var2= describeCountry('israel','9 million','Jerusalem');
let var3= describeCountry('france','67 million','Paris');
console.log(`${var1}
${var2}
${var3}`);