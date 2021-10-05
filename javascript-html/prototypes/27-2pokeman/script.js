class Pokemon {
    constructor(pokemonName, pokemonType, pokemonAttackList) {
        this.name = pokemonName;
        this.type = pokemonType;
        this.attackList = pokemonAttackList;
    }

    callPokemon = function() {
        return `I choose you, ${this.name}`;
    }

    attack = (attackNum) => {
        return `${this.name} used ${this.attackList[attackNum]}`
    }
}

let pokemon1 = new Pokemon('Pikachu', 'electric', ['high voltage', 'low voltage']);
let pokemon2 = new Pokemon('Sandshrew', 'ground', ['snow cloak', 'sand rush']);
let pokemon3 = new Pokemon('Rhydon', 'ground', ['Lightning Rod']);

console.log(pokemon1.callPokemon());
console.log(pokemon1.attack(1));
console.log(pokemon2.callPokemon());
console.log(pokemon2.attack(0));
console.log(pokemon3.callPokemon());
console.log(pokemon3.attack(1));