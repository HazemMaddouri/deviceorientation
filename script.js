const $sectionOne = document.querySelector('.section1')
const $sectionTwo = document.querySelector('.section2')
const $sectionThree = document.querySelector('.section3')

function handleMotionEvent(event) {
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;
  console.log(event, x, y, z)
  // Faire quelque chose de génial.
}

window.addEventListener("devicemotion", handleMotionEvent, true);