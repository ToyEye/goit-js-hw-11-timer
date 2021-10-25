class CountdownTimer {
    constructor({selector,targetDate}) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
        this.days = this.selector.querySelector('[data-value="days"]');
        this.hours = this.selector.querySelector('[data-value="hours"]');
        this.mins = this.selector.querySelector('[data-value="mins"]');
        this.secs = this.selector.querySelector('[data-value="secs"]');
        this.start();
        this.init();
    }
    start() {
        this.timerId = setInterval(() => {
            const startTime = this.targetDate - Date.now();
            if (startTime <= 0) {
                clearInterval(this.timerId);
                return;
            }
            const timeRemaining = this.getTime(startTime);
            this.updateTime(timeRemaining);
        }, 1000);
    }
    getTime(time){
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }
    pad(value){
        return String(value).padStart(2, '0');
    }

    updateTime({ days, hours, mins, secs }){
        this.days.textContent = days;
        this.hours.textContent = hours;
        this.mins.textContent = mins;
        this.secs.textContent = secs;
    }

      init() {
        const time = this.getTime(0);
        this.updateTime(time);
    }
}



const NewTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
});


