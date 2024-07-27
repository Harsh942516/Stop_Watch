
let startTime, elapsedTime = 0, interval;
const display = document.getElementById('timer-display');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

startButton.addEventListener('click', () => {
    if (!interval) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTime, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    elapsedTime = 0;
    display.textContent = '00:00:00';
});

function updateTime() { 
    elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    display.textContent = (hours < 10 ? '0' : '') + hours + ':' +
                          (minutes < 10 ? '0' : '') + minutes + ':' +
                          (seconds < 10 ? '0' : '') + seconds;
}

