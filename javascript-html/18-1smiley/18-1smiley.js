const btn = document.querySelector('.btn'),
      text = document.querySelector('#howMany');


btn.addEventListener('click',()=>{
    let n = Number(text.value);
    for(let i=0 ; i<n ; i++){
        let image = new Image();
        image.src = "smiley.jpg";
        document.body.appendChild(image);
    }
    
});
