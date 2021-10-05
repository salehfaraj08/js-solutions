const Name = document.querySelector('.name'),
age = document.querySelector('.age'),
email = document.querySelector('.email'),
btn = document.querySelector('.btn'),
form = document.querySelector('.form');


function checkDet(e){
    e.preventDefault();
    let isConfirmed = confirm(`${Name.value}
                               ${age.value}
                               ${email.value}`);
    if (isConfirmed) {
        alert("congratulations you successfully sent this form!");
    } 
}

form.addEventListener('submit', checkDet);
