//1 the problem is that the hero context was lost that means the getstrength will not work so we need to bind or call or apply 

//2
const hero = {
    health: 5,
    power: 68,
    getStrength: function() {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}

function whoIsStronger(getStrength) {
    const myStrength = 82;
    console.log(getStrength());
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
const h1 = hero.getStrength;
// console.log(h1.call(hero));
// console.log(whoIsStronger(hero.getStrength.bind(hero)));
console.log(whoIsStronger.call(hero, hero.getStrength.bind(hero)))