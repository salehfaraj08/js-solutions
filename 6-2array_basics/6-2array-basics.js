let people = ["Greg", "Mary", "Devon", "James"];
/*1*/
people.forEach(element => {
    console.log(element);
});
/*2*/
people.splice(0,1);

console.log(people);
/*3*/
people.splice(2,1);

console.log(people);
/*4*/
people.splice(0,0,'Matt');
console.log(people);
/*5*/
people.push('saleh');
console.log(people);
/*6*/
for(let i=0;i<people.length;i++){
    console.log(people[i]);
    if(people[i]==='Mary')
        break;
}

/*7*/
console.log(people.slice(2,4));

/*8*/
console.log("the index of mary is:",people.indexOf('Mary'));
/*9*/
console.log("the index of mary is:",people.indexOf('Foo'));
/*10*/
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,'Elizabeth');
people.splice(3,0,'Artie');
console.log(people);
/*11*/
let withbob;
withbob=people+"Bob";
console.log(withbob);
