var touch_count =0;
var timeoutInMiliseconds = 3000;
var timeoutId; 
  
function startTimer() { 
  // window.setTimeout returns an Id that can be used to start and stop a timer
  timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}
function resetTimer() { 
  window.clearTimeout(timeoutId);
  startTimer();
}
function setupTimers () {
  startTimer();
  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("mousedown", resetTimer);
  document.addEventListener("keypress", resetTimer);
  document.addEventListener("touchmove", resetTimer);
  document.getElementById("button1").addEventListener("click",resetTimer);
   
  
}
function doInactive() {
  touch_count=0;
  document.getElementById("demo1").innerHTML=touch_count;
  // does whatever you need it to actually do - probably signs them out or stops polling the server for info
}

function myFunction() {
  setupTimers();
  // vibrate on tap
  window.navigator.vibrate(200);
  touch_count++;
   document.getElementById("demo1").innerHTML = touch_count;
   
  }

 

 
