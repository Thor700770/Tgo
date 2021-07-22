 let daysItem = document.querySelector("#days");
 let hoursItem = document.querySelector("#hours");
 let minItem = document.querySelector("#min");
 let secItem = document.querySelector("#sec");


 let countDown = () => {
   let futureDate = new Date("July 23, 2021 18:00:00 GMT+0530") .getTime() ;
   let currentDate = new Date();
   let myDate = futureDate - currentDate;
   //console.log(myDate);

   let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

   let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;

   let min = Math.floor(myDate / 1000 / 60) % 60;

   let sec = Math.floor(myDate / 1000) % 60;

   daysItem.innerHTML = days;
   hoursItem.innerHTML = hours;
   minItem.innerHTML = min;
   secItem.innerHTML = sec;
 }

 countDown()

 setInterval(countDown, 1000)

