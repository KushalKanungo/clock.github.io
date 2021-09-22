var clr, stopwatchInterval, h, m, s;
var insec = 0;
var inmin = 0;
var inhr = 0;
var stopwatchTime = "";
let check = 1;
let check_play_button=1;
// This function will add a 0 if the number is smaller than 10

function addZero(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
}

// This function will give the current time in format HH:MM:SS

function currtime() {
  fulldate = new Date();
   h = fulldate.getHours();
   m = fulldate.getMinutes();
   s = fulldate.getSeconds();
  let time = addZero(h) + ":" + addZero(m) + ":" + addZero(s);
  document.getElementById("timer").innerText = time;
 
}

function checker(value){
if(value==1){
  document.getElementById("play").classList.add("greencolor");
}
else
document.getElementById("play").classList.remove("greencolor");
}

// It will play the stop watch or clock

function play() {

  stopclock();
  if (check == 0) {
    clearInterval(stopwatchInterval);
    stopwatch();
  } else if (check == 1) {
    clr = setInterval(currtime, 1000);
  }
}

// It will stop the watch or pause the clock

function pause() {

if(check==0){
  clearInterval(stopwatchInterval);
}
else if(check==1){
document.getElementById("timer").innerText = "RESTART";
console.log("Clock Paused");}
  clearInterval(clr);
}

// It will start the print timer after every 1sec

function stopwatch() {
  clearInterval(stopwatchInterval);
  

  stopwatchInterval = setInterval(() => {
    if (insec < 60) {
      insec = 1 + insec;
    }
    if (insec == 60) {
      insec = 0;
      inmin = 1 + inmin;
    }
    if (inmin == 60) {
      inhr = 1 + inhr;
 inmin = 0;
    }

    stopwatchTime = addZero(inhr) + ":" + addZero(inmin) + ":" + addZero(insec);

    document.getElementById("timer").innerText = stopwatchTime;
  }, 1000);
}

//it will check if stopwatch button is selected

function stopwatchbutton() {
  stopclock();
  if (check == 1) {
    document.getElementById("stopwatch").style.backgroundColor = "#5bff00";
    document.getElementById("timer").innerText = "00:00:00";
    insec=0;
    inmin=0;
    inhr = 0;
    check = 1 - check;
  } else if (check == 0) {
    document.getElementById("stopwatch").style.backgroundColor = "yellow";
    document.getElementById("timer").innerText = "START";
    check = 1 - check;
  }
}

// It will stop the clock and stopwatch

function stopclock(){
  clearInterval(clr);
  clearInterval(stopwatchInterval);
}

//Event Listners

document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("stopwatch").addEventListener("click", stopwatchbutton);
