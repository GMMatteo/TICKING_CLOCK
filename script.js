function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
  } 
  setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    seconds.style.transform = `rotate(${getSeconds(time)}deg)`;
    minutes.style.transform = `rotate(${getMinutes(time)}deg)`;
    hour.style.transform = `rotate(${getHour(time)}deg)`;
}, 1000);

let hourHand = document.querySelector("#hour");
let minutesHand = document.querySelector("#minutes");
let secondsHand = document.querySelector("#seconds");

function getSeconds(time) {
time %= 60;
  return ((6 * time) + 180) % 360;
}

function getMinutes(time) {
time %= 3600;
  return ((6 * time / 60) + 180) % 360;
}

function getHour(time) {
time %= 43200;
  return ((360 * time / 43200) + 180) % 360;
}

