const btn = document.querySelector('.btn'),
    text = document.querySelector('#text'),
    div11 = document.querySelector('span'),
    messeage = document.querySelector('#Message');


btn.addEventListener('click', () => {
    if (text.value.length < 100) {
        messeage.innerHTML = 'you need to enter at least 100 characters'
    }

});

text.addEventListener('keyup', () => {
    if (text.value.length >= 100)
        messeage.innerHTML = '';
});

console.log(div11.textContent);