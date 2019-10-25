var touch_count =0;



function myFunction() {
   touch_count++;
   if(touch_count>10){
     touch_count=0;
   }
    document.getElementById("demo1").innerHTML = touch_count;
  }
