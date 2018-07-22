/*jshint esversion: 6 */
const secondHand = document.querySelector('.sec');
const minuteHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

function setDate() {
   const now = new Date();
   //console.log(now);
   const seconds = now.getSeconds();
   const minutes = now.getMinutes();
   const hours = now.getHours();
   console.log(` ${hours}hr ${minutes}min ${seconds}sec`);
   // 0s is 0deg , 30s is 180deg , 60s is 360deg
   const secondDegrees = ((seconds/60) * 360) - 90 ;
   const minuteDegrees = ((minutes/60) * 360) - 90 ;
   const hourDegrees = ((hours/60) * 360) - 90 ;
   //console.log(secondDegrees);
   secondHand.style.transform = `rotate(${secondDegrees}deg)` ;
   minuteHand.style.transform = `rotate(${minuteDegrees}deg)` ;
   hourHand.style.transform = `rotate(${hourDegrees}deg)` ;

}
setInterval(setDate,1000);