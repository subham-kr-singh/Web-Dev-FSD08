document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const billAmount = Number(document.getElementById("billAmount").value);
  const tipPercentage = Number(document.getElementById("tipPercentage").value);
  const totalPeople = Number(document.getElementById("totalPeople").value);

  const tipAmount = (billAmount * tipPercentage) / 100;

  const eachPersonPays = tipAmount / totalPeople;

  document.getElementById("tipAmount").innerText =
    `Tip Amount: ₹${eachPersonPays}`;

  document.getElementById("billAmount").value = "";
  document.getElementById("tipPercentage").value = "";
  document.getElementById("totalPeople").value = "";
});
