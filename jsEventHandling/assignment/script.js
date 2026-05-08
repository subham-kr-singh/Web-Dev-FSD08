function background() {
  const color = document.getElementById("bg").value;
  document.getElementById("left").style.background = color;
}

function heading() {
  const color = document.getElementById("heading").value;
  document.getElementById("heading-colour").style.color = color;
}

function paragraph() {
  const color = document.getElementById("Paragraph").value;
  document.getElementById("Paragraph-colour").style.color = color;
}

document.getElementById("bg").addEventListener("change", background);

document.getElementById("heading").addEventListener("change", heading);

document.getElementById("Paragraph").addEventListener("change", paragraph);

function reset() {
  window.location.reload();
}