
var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black", y = 2;



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
    
       
      
    }
    function doInactive() {
      save();
      erase();
    
    }




function init() {
    setupTimers();
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    ctx.globalAlpha=255;
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function color(obj) {
    switch (obj.id) {
        
        case "black":
            x = "black";
            break;
        
    }
    if (x == "white") y = 14;
    else y = 2;

}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    var m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("canvasimg").style.display = "none";
    }
}

function save() {

    document.getElementById("canvasimg").style.border = "2px solid";
    
    
    var dataURL = canvas.toDataURL().replace("image/png", "image/octet-stream");
    document.getElementById("canvasimg").src = dataURL;
    var url="https://v2.convertapi.com/convert/web/to/png?Url="+dataURL;
        download(dataURL, "image.png");
        
        // const canvas = document.getElementById('canvas');
        
        // const ctx = canvas.getContext('2d');
        
        // ctx.globalAlpha = 0.5;
}
function download(dataurl, filename) {
    var a = document.createElement("a");
    a.href = dataurl;
    a.setAttribute("download", filename);
    a.click();
  }
  

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 0, 0, 0)";
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}




  
  