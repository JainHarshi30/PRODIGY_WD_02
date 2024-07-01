const playbutton = document.getElementsByClassName("play")[0];
const pausebutton = document.getElementsByClassName("pause")[0];
const resetbutton = document.getElementsByClassName("reset")[0];
const lapbutton = document.getElementsByClassName("lap")[0];
const second = document.getElementsByClassName("sec")[0];
const msecond = document.getElementsByClassName("msec")[0];
const minute = document.getElementsByClassName("minute")[0];
const laps = document.getElementsByClassName("laps")[0];
const clearAll = document.getElementsByClassName("lap-clear-button")[0];
const bg = document.getElementsByClassName("outer-circle")[0];

let secCounter = 0;
let sec;
let msecCounter = 0;
let msec;
let minuteT;
let minuteCounter = 0;
let lapCounter = 0;

playbutton.addEventListener('click', startTimer)
resetbutton.addEventListener("click", resetTimer )
pausebutton.addEventListener("click", pauseTimer)
lapbutton.addEventListener('click', recordLap)
clearAll.addEventListener("click", clearLap)

function startTimer() {

     

    minuteT = setInterval(() => {
        minute.innerText = `${++minuteCounter} :`
    }, 60*1000);

    sec = setInterval(() => {
        if(secCounter === 60){
            secCounter = 0;
        }
        second.innerText = `${++secCounter} : `
    }, 1000);
    msec = setInterval(() => {
        if(msecCounter === 100){
            msecCounter = 0;
        }
        msecond.innerText = `${msecCounter++} `
    }, 10)
    bg.classList.add("animation-bg");
}

function pauseTimer(){
    clearInterval(sec)
    clearInterval(msec)
    clearInterval(minuteT)
    bg.classList.remove("animation-bg");

}

function resetTimer(){
    clearInterval(sec)
    clearInterval(msec)
    clearInterval(minuteT)
    minute.innerText = "00 :"
    second.innerText = "00 :"
    msecond.innerText = "00"
    minuteCounter = 0;
    secCounter = 0;
    msecCounter = 0;
    bg.classList.remove("animation-bg");
}

function recordLap(){
    lapCounter++;
    const li = document.createElement("li");
    const number = document.createElement("span");
    const time = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    time.setAttribute("class", "time");

    number.innerText = `${lapCounter}. `
    time.innerText = `${minuteCounter} : ${secCounter} : ${msecCounter}`;

    li.append(number, time);
    laps.append(li);

}

function clearLap(){
    laps.innerHTML = "";
    lapCounter = 0;
}