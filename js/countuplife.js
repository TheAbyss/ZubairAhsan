$(document).ready(function() {
  // Month,Day,Year,Hour,Minute,Second
  aliveTime('october,27,1988,00:07:00'); // ****** Change this line!
});
function aliveTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  // document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('days-alive').setAttribute("data-to", days);
  // document.getElementById('hours').firstChild.nodeValue = hours;
  // document.getElementById('minutes').firstChild.nodeValue = mins;
  // document.getElementById('seconds').firstChild.nodeValue = secs;

  clearTimeout(aliveTime.to);
  aliveTime.to=setTimeout(function(){ aliveTime(countTo); },1000);

}
