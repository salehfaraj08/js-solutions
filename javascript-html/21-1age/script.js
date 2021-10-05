const text = document.querySelector('#age'),
btn = document.querySelector('.btn');

let messeage = document.createElement('p');

function checkvalue(){
    let age = Number( text.value);
    if(age>=18){
        messeage.innerText='you can drink appear'
        document.body.appendChild(messeage)
    }
    else{
        messeage.innerText='you’re too young'
        document.body.appendChild(messeage)
    }
}


btn.addEventListener('click',checkvalue);