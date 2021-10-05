function getdate(date,months,days){
    return `Today is ${days[date.getDay()]} the ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

const date = new Date();
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(getdate(date,months,days));