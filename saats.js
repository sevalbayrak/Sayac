var saatal =document.getElementById("saat");
var dal =document.getElementById("dakika");
var sal =document.getElementById("saniye");
var pml = document.getElementById("pm");

function guncel(){
   let h = new Date().getHours();
   let m =new Date().getMinutes();
   let s =new Date().getSeconds();
   let pm = "Am";
   if(h>12){
    h = h -12;
    pm = "Pm";
   }
   h = h < 10 ? "0"  + h : h;
   m = m  < 10 ? "0"  + m : m;
   s = s < 10 ? "0"  + s : s;
   saatal.innerText = h;
   dal.innerText = m;
   sal.innerText = s;
   pml.innerText = pm ;

   setTimeout(() => {
    guncel();
   }, 1000);
}

guncel();