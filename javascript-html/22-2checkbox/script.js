const check = document.querySelector('.my-check'),
    img = document.querySelector('.img');

const ifchecked = ( ()=>{
    if(check.checked){
        img.style.display = 'block'
    }
    else{
        img.style.display = 'none'
    }
})




check.addEventListener('click',ifchecked);