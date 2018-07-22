function setDate() {
   const now = new Date();
   console.log(now);
   const seconds = now.getSeconds();
   console.log(seconds);
}
setInterval(setDate,1000);