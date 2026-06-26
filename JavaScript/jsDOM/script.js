function submit() {
  console.log("Submit Button Clicked");

  const name = document.getElementById("fullname").value;
  console.log(name);

  document.getElementById("name").innerText = name;
  document.getElementById("fullname").value = "";

  const city = document.getElementById("in-city").value;
  console.log(city);

  document.getElementById("city").innerText = city;
  document.getElementById("in-city").value = "";

  const email = document.getElementById("in-email").value;
  console.log(email);

  document.getElementById("email").innerText = email;
  document.getElementById("in-email").value = "";

  const password = document.getElementById("in-password").value;
  console.log(password);

  document.getElementById("pass").innerText = password;
  document.getElementById("in-password").value = "";

  document.getElementById("data-card").classList.add("divShow");
  document.getElementById("data-card").classList.remove("divHide");
}
