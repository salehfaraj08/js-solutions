const getAllPeople = (async() => {
    let all = [];
    for (let i = 1; i <= 10; i++) {
        const url = `https://swapi.dev/api/people/${i}/`;
        const res = await (await fetch(url)).json();
        const homeWorld = await (await fetch(res.homeworld)).json();
        let person = {
            name: res.name,
            hair_color: res.hair_color,
            height: res.height,
            planet: {
                name: homeWorld.name,
                population: homeWorld.population
            }
        }

        all.push(person);

    }

    return all;
})


async function createTable() {
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    let table = document.createElement('table');
    document.body.appendChild(table);
    table.style.cssText = 'border: 1px solid black ; border-collapse: collapse ; width:50vw ; text-align:center';
    let trOpen = '<tr style = "border: 1px solid black">',
        trClose = '</tr>',
        tdOpen = '<td style = "border: 1px solid black">',
        tdClose = '</td>',
        thOpen = '<th style = "border: 1px solid black ; background-color: rgb(137, 223, 137) ; color : white ;" colspan="5">',
        thClose = '</th>';

    table.innerHTML = `${trOpen}${thOpen}Star Wars${thClose}${trClose}`;
    trOpen = '<tr style = "border: 1px solid black ; background-color: rgb(136, 172, 136)">'
    table.innerHTML += `${trOpen}
                        ${tdOpen}name${tdClose}
                        ${tdOpen}hair${tdClose}
                        ${tdOpen}height${tdClose}
                        ${tdOpen}planet name${tdClose}
                        ${tdOpen}planet population${tdClose}
                        ${trClose}`;
    let people = await getAllPeople();


    people.map(value => {
        console.log(value);
        table.innerHTML += `${trOpen}
        ${tdOpen}${value.name}${tdClose}
        ${tdOpen}${value.hair_color}${tdClose}
        ${tdOpen}${value.height}${tdClose}
        ${tdOpen}${value.planet.name}${tdClose}
        ${tdOpen}${value.planet.population}${tdClose}
        ${trClose}`;

    })
}

createTable();