document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const distance = Number(document.getElementById("distance").value);
  let billAmount = 0;
  let amount = 11;
  billAmount += distance * amount;

  document.getElementById("billAmount").innerText =
    `Bill Amount: ${billAmount.toFixed(2)}`;
  document.getElementById("detail").innerText =
    `Distance: ${distance} km, Rate: ${amount} per km`;
  document.getElementById("output").style.display = "flex";
  document.getElementById("distance").value = "";
});
