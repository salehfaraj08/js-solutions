    function percentageOfWorld1(population){
        return ((population/7900)*100).toFixed(1);
    }

    function percentageOfWorld2(population){
        return percentageOfWorld1(population);
    }

    console.log('the population for china of the world is: ', percentageOfWorld1(1441),"%");
    console.log('the population for israel of the world is: ', percentageOfWorld1(9),"%");
    console.log('the population for united states of the world is: ', percentageOfWorld1(2000),"%");

    console.log('the population for china of the world is: ', percentageOfWorld2(1441),"%");
    console.log('the population for israel of the world is: ', percentageOfWorld2(9),"%");
    console.log('the population for united states of the world is: ', percentageOfWorld2(2000),"%");