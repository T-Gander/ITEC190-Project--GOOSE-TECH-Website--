"use strict"

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);
/* Function to create and run the countdown clock */
function runClock() {
   /* Store the current date and time */
   var currentDay = new Date();

   /* Calculate the days until April 1st */
   var jobsEnd = new Date("April 30, 2023");
   var daysLeft = (jobsEnd - currentDay)/(1000*60*60*24);
   /* Calculate the hours left in the current day */
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
   /* Calculate the minutes and seconds left in the current hour */
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   /* Display the time left until New Year's Eve */
   document.getElementById("countdowntimer").textContent =
   Math.floor(daysLeft) + " Days " + Math.floor(hrsLeft) + " Hrs " + Math.floor(minsLeft) + " Mins " + Math.floor(secsLeft) + " Secs ";
}