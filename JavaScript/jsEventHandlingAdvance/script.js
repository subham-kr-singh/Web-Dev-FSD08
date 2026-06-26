function fillBaseColour() {
  document.getElementById("bulb").style.backgroundColor = "white";
}

document.getElementById("redbox").addEventListener("mouseover", () => {
  document.getElementById("bulb").style.backgroundColor = "red";
});

document.getElementById("redbox").addEventListener("mouseover", fillBaseColour);

document.getElementById("greenbox").addEventListener("mouseover", () => {
  document.getElementById("bulb").style.backgroundColor = "green";
});

document.getElementById("greenbox").addEventListener("mouseout", fillBaseColour);

document.getElementById("bluebox").addEventListener("mouseover", () => {
  document.getElementById("bulb").style.backgroundColor = "blue";
});

document.getElementById("bluebox").addEventListener("mouseout", fillBaseColour);

