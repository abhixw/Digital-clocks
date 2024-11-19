let startTime, updatedTime, difference, tInterval;
let running = false;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const display = document.getElementById('display');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1000);
    }
}

function stopTimer() {
    running = false;
    clearInterval(tInterval);
}

function resetTimer() {
    running = false;
    clearInterval(tInterval);
    display.innerHTML = "00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.innerHTML =  `${hours}:${minutes}:${seconds}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

// Time Zones

function updateTimeZones() {
    const now = new Date();
    document.getElementById('local-time').innerText = now.toLocaleTimeString();

    const nyTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
    document.getElementById('ny-time').innerText = nyTime.toLocaleTimeString();

    const ldnTime = new Date(now.toLocaleString("en-GB", {timeZone: "Europe/London"}));
    document.getElementById('ldn-time').innerText = ldnTime.toLocaleTimeString();

    const sydTime = new Date(now.toLocaleString("en-AU", {timeZone: "Australia/Sydney"}));
    document.getElementById('syd-time').innerText = sydTime.toLocaleTimeString();
}

setInterval(updateTimeZones, 1000);