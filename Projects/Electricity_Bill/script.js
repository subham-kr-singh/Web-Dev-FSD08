
document.querySelector("form").addEventListener("click", (e) => {
  e.preventDefault();

  const units = Number(document.getElementById("units").value);

  if (isNaN(units) || units < 0) {
    alert("Please enter a valid positive integer for units.");
    return;
  }

    let subtotal = 0;

    if (units <= 50) {
      subtotal = units * 0.5;
    } else if (units <= 200) {
      subtotal = 50 * 0.5 + (units - 50) * 0.75;
    } else if (units <= 450) {
      subtotal = 50 * 0.5 + 150 * 0.75 + (units - 200) * 1.2;
    } else {
      subtotal = 50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (units - 450) * 1.5;
    }

    const surcharge = subtotal * 0.2;
    const total = subtotal + surcharge;

    document.getElementById("subtotal").textContent = `Subtotal: ₹${subtotal.toFixed(2)}`;
    document.getElementById("surcharge").textContent = `Surcharge (20%): ₹${surcharge.toFixed(2)}`;
    document.getElementById("total").textContent = `Total: ₹${total.toFixed(2)}`;
    document.getElementById("billDetails").style.display = "block";
});

const reset = () => {
  window.location.reload();
}