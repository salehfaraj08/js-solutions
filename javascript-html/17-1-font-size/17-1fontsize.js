const incbtn = document.querySelector('.increase'),
    decbtn = document.querySelector('.decrease'),
    p = document.querySelector('p');
    
let size = 6;
p.style.fontSize = '6px'
incbtn.addEventListener('click',()=>{
    sizeUpAndDown('up')
})

decbtn.addEventListener('click',()=>{
    sizeUpAndDown('down')

})

const sizeUpAndDown = (action =>{
    if(action === 'up' && size < 100){
        size++
        
    }
    else if(action === 'down' && size > 6){
        size--
    }
    p.style.fontSize = size + 'px'
})



