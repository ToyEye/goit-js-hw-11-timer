const promotionTimer = new Date('Dec 19,2021 00:00:00');

const timer = document.querySelector('.js-timer');

setInterval(() => {
    const dateNow = Date.now();

    const distance = promotionTimer - dateNow;
const days =  Math.floor(distance/(24*60*60*1000));
// console.log(days);
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const mins = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
// console.log(mins);
const secs = Math.floor((distance % (1000 * 60)) / 1000);
timer.innerHTML= `days:${days} hours:${hours} mins:${mins} secs: ${secs}`;
}, 1000);




