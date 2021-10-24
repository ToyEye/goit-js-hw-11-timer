// window.addEventListener('onbeforeunload', () => 'Закрываю вкладку');
// window.onbeforeunload = function() {
//     return 'Some string';
//   }

const timer = document.querySelector('.js-timer');
const btn =document.querySelector('.js-btn');



btn.addEventListener('click',()=>{
    let timeLeft = 15;
                  
            const timerId = setInterval(() => {
                timeLeft --;
                timer.innerHTML= `Вы покидаете страницу через : ${timeLeft}`; 
                if(timeLeft == 0){
                    clearInterval(timerId);
                    timer.innerHTML= 'Вы покинули страницу';
                }
            }, 1000);           
})









  