/*
* Basic Count Up from Date and Time
* Author: @mrwigster / trulycode.com
*/
window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('april,04,2017,00:00:00'); // ****** Change this line!
}
function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  // document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('days').setAttribute("data-to", days);
  // document.getElementById('hours').firstChild.nodeValue = hours;
  // document.getElementById('minutes').firstChild.nodeValue = mins;
  // document.getElementById('seconds').firstChild.nodeValue = secs;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);

}
