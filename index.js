const day = document.querySelector('[data-value="days"]');
const hour = document.querySelector('[data-value="hours"]');
const min = document.querySelector('[data-value="mins"]');
const sec = document.querySelector('[data-value="secs"]');
const s = document.querySelector('#timer-1');

const targetDate = new Date('jan 1, 2022 00:00:00');

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('jan 1, 2022 00:00:00'),
// });

let interval = null;
function CountdownTimer() {
    const currentDate = new Date();
    let time = targetDate - currentDate;
    if(time>0){
const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    
        day.textContent = `${days}`;
        hour.textContent = `${hours}`;
        min.textContent = `${mins}`;
        sec.textContent = `${secs}`;
    } else { s.textContent = 'з новим роком'};
    
}
    
interval = setInterval(CountdownTimer, 1000);

