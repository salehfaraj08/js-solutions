const clock = document.querySelector('.stopWatch'),
startBtn = document.querySelector('.start'),
stopBtn = document.querySelector('#stop');


stopBtn.classList.add("hidden");
let milisec = 0 , sec = 0, min = 0 , Interval;
clock.innerHTML = ("0" + min).substr(-2) + ":" + ("0" + sec).substr(-2) + "." + ("0" + milisec).substr(-2);
const startTimer = ( ()=>{
    milisec++;
    if(milisec===100){
        sec++;
        milisec = 0
    }
    if(sec===60){
        sec = 0;
        milisec = 0;
        min++;
    }
    clock.innerHTML = ("0" + min).substr(-2) + ":" + ("0" + sec).substr(-2) + "." + ("0" + milisec).substr(-2);
});


const stopTimer = ( ()=>{
    clock.innerHTML = ("0" + min).substr(-2) + ":" + ("0" + sec).substr(-2) + "." + ("0" + milisec).substr(-2);
});





startBtn.addEventListener('click', ()=>{
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
});
// stopBtn.addEventListener('click', ()=>{
//     clearInterval(Interval);
// });
