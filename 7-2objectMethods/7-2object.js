const mycountry={
    country: 'israel',
    capital: 'jerusalem',
    language: 'hebrew',
    population: '9 million',
    neighbours: 4,
    describe: function () {
        console.log(this.country," has ",this.population," people, their mother tongue is ",this.language,
        " they have",this.neighbours,"neighbouring countries and a capital called ",this.capital);
    },
    checkIsland: function (){
        this.isIsland=(this.neighbours>0 ? false:true);
    }
};

mycountry.describe();
mycountry.checkIsland();
console.log(mycountry);
