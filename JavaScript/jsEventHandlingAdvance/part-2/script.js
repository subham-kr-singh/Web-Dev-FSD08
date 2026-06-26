document.querySelector("form").addEventListener("submit", () => {
  event.preventDefault();

  const fn = document.getElementById("Fullname").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const db = {
    name: fn,
    email: em,
    password: ps,
  };

  console.log(db);

  document.getElementById("Fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

document.querySelector("form").addEventListener("reset", () => {
  event.preventDefault();

  confirm("Are you sure") && window.location.reload();
});

document.addEventListener("keydown", (event) => {
  // esc button press
  let keyPress = event.key;
  keyPress === "Escape" && window.location.reload;
});
