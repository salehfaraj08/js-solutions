const greaterThan = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve('the number is greater than 10');
        } else if (num === 10) {
            reject('the number is equal to 10');
        } else {
            reject('the number is less than 10');
        }
    })
}

greaterThan(9).then(val => {
    console.log(val);
}).catch(error => console.log(error));