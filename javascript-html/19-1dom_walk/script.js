const title2 = document.querySelector('.start-here'),
ul2 = document.querySelector('ul ul'),
ul1 = document.querySelector('ul'),
title = document.querySelector('title'),
p = document.querySelector('p');

/* 1 */
title2.innerHTML = 'main title';

/* 2 */
let subtitle4 = document.createElement('li');
subtitle4.innerHTML = 'sub title 4';
ul2.appendChild(subtitle4);

/*3*/
ul1.removeChild(ul1.lastElementChild);

/*4*/
title.innerHTML = 'Master Of The Dom';

/*5*/
p.innerHTML = 'welcome to our page';


