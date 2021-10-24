const startBtn = document.querySelector('.js-btn-start');
const stopBtn = document.querySelector('.js-btn-stop');
const clearBtn = document.querySelector('.js-btn-clear');
const p = document.querySelector('.js-timer');

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
clearBtn.addEventListener('click', onClear);

let startTime = 0;
let distance = 0;
let intervalId = 0

function onStart(){
    startTime = Date.now();
   
    intervalId = setInterval(() => {
        if(distance == 0){
            distance = Date.now() - startTime;
        } else {
            distance+=1000
        }
        displayTimer(distance,p)
    }, 1000);
}

function onStop(){
    clearInterval(intervalId);
}

function onClear(){
    onStop()
    distance = 0;
    startTime = 0;
    displayTimer(distance,p);
}

function displayTimer(distance,domElem){
    if(distance != 0){
        const days =  Math.floor(distance/(24*60*60*1000));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = Math.floor((distance % (1000 * 60)) / 1000);
        domElem.innerHTML= `days:${days} hours:${hours} mins:${mins} secs: ${secs}`;
    } else {
        domElem.innerHTML= `days:00 hours:00 mins:00 secs:00`;
    }
}