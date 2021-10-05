const form = document.querySelector('.inputs'),
inputs = document.querySelectorAll('#num'),
submitBtn = document.querySelector('.btn');

const inputsArr = Array.from(inputs)


const Input = (element =>{
        
        for (let i = 0; i < inputsArr.length-1; i++) {
            if(inputsArr[i].value.length===1){
                inputsArr[i+1].focus();
            }
        }
        if (inputsArr.every(input => input.value) && !element.target.nextElementSibling) {
            submitBtn.focus();
        }
});

const Backspace = (element=> {
    if (element.keyCode === 8 && element.target.value === '' && element.target.previousElementSibling) {
        element.target.previousElementSibling.focus();
    }
});

const Paste = (element=> {
    const data = element.clipboardData.getData('text');
    inputs.forEach((input, i) => {
        input.value = data[i] || input.value
    });

    if (inputsArr.every(input => input.value)) {
        submitBtn.focus();
    }

});



inputs.forEach(input => {
    input.addEventListener('input', Input);
})

inputs.forEach(input => {
    input.addEventListener('keyup', Backspace);
})

inputs.forEach(input => {
    input.addEventListener('paste', Paste);
})




