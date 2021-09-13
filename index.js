const day = document.querySelector('[data-value="days"]');
const hour = document.querySelector('[data-value="hours"]');
const min = document.querySelector('[data-value="mins"]');
const sec = document.querySelector('[data-value="secs"]');
const s = document.querySelector('#timer-1');

const targetDate = new Date('jan 1, 2022 00:00:00');

let interval = null;
function CountdownTimer() {
    const currentDate = new Date();
    let time = targetDate - currentDate;
    if(time>0){
const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(3, '0');
const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
        
        day.textContent = `${days}`;
        hour.textContent = `${hours}`;
        min.textContent = `${mins}`;
        sec.textContent = `${secs}`;
    } else { s.textContent = 'з новим роком'};
    
}
    
interval = setInterval(CountdownTimer, 1000);
