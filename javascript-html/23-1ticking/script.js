const clock = document.querySelector('.clock');

const time = ( ()=>{
    const date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    clock.innerHTML = ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2) + ":" + ("0" + seconds).substr(-2);
})
setInterval(time,1000);
