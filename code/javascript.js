const colors = document.querySelectorAll('.color-box h2');

function generateColors() {
  colors.forEach((color) => {
    let hexCode = '#' + Math.random().toString(16).substring(2, 8);
    color.style.backgroundColor = hexCode;
    color.innerHTML = hexCode;
  });
}

generateColors();
var hourHand = document.querySelector(".hour-hand")
var minHand = document.querySelector(".min-hand")
var secondHand = document.querySelector(".second-hand")

function setDate() {
  var now = new Date()

  var hours = now.getHours()
  var hoursDegrees = (hours / 12) * 360 + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

  var mins = now.getMinutes()
  var minsDegrees = (mins / 60) * 360 + 90
  minHand.style.transform = `rotate(${minsDegrees}deg)`

  var secs = now.getSeconds()
  var secsDegrees = (secs / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secsDegrees}deg)`
}

setInterval(setDate, 1000)
setDate()