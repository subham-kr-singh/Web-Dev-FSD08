function bulb1On() {
  document.getElementById("bulb1").style.background = " rgb(255, 255, 0)";
}

function bulb1Off() {
  document.getElementById("bulb1").style.background = "white";
}

// function red() {
//   document.getElementById("bulb1").style.background = "red";
// }

// function green() {
//   document.getElementById("bulb1").style.background = "green";
// }
// function yellow() {
//   document.getElementById("bulb1").style.background = "yellow";
// }
// function blue() {
//   document.getElementById("bulb1").style.background = "blue";
// }

// document.getElementById("red").addEventListener("click", red);
// document.getElementById("green").addEventListener("click", green);
// document.getElementById("yellow").addEventListener("click", yellow);
// document.getElementById("blue").addEventListener("click", blue);

function changeBlubColour() {
  const colour = document.getElementById("blubColour").value;
  document.getElementById("txtColour").style.color = colour;
}
document
  .getElementById("blubColour")
  .addEventListener("change", changeBlubColour);

function reset() {
  window.location.reload;
}


document.getElementById("").addEventListener("click",() => {})