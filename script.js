var Year = new Date().getFullYear();

var countDownDate = new Date("Dec 25, " + Year + " 0:01:00").getTime();

var MSPerSec = 1000;
var MSPerMin = MSPerSec * 60;
var MSPerHour = MSPerMin * 60;
var MSPerDay = MSPerHour * 24;

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (MSPerDay));
  var hours = Math.floor((distance % (MSPerDay)) / (MSPerHour));
  var minutes = Math.floor((distance % (MSPerHour)) / (MSPerMin));
  var seconds = Math.floor((distance % (MSPerMin)) / MSPerSec);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

}, MSPerSec);
