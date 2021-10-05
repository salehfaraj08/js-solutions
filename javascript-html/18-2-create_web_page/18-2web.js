const body = document.querySelector('body');
let div = document.createElement('div');
div.innerHTML = "Welcome to my pure javascript web page, Hi There!";
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignContent = 'center';
div.style.alignItems = 'center';
body.appendChild(div);

let img = new Image();
img.src = 'https://source.unsplash.com/WLUHO9A_xik/400x300'
div.appendChild(img)

let p = document.createElement('p')
p.innerHTML = "and here is another text , bye bye!!!";
div.appendChild(p)
