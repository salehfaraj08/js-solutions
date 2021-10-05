/*q1*/
//its will point to the global
console.log(this);


//q2
///its will log only hello and undefined for the name because with this we need to use function and not arrow 
//q2 b
const myObj = {
    name: "Timmy",
    greet: function() {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();

//q3
///it will point to the function 
const myFuncDec = function() {
    console.log(this);
};

myFuncDec();


//q4
///it will go to the global scope above the function 
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();


//q5 its will give an error because the addEventListener recieves 2 arguments
//b
document.querySelector(".element").addEventListener(('click'), function() {
    console.log(this);
});