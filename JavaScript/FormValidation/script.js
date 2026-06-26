function submit() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const password = document.getElementById("password").value;

  document.querySelectorAll(".text-danger").forEach((element) => {
    element.innerText = " ";
  });

  if (!/^[A-Za-z ]+$/.test(name)) {
    document.getElementById("nameError").innerText = "Invalid Name";
  }
  if (!/^[A-Za-z.\_\d]+@gmail.com$/.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email";
  }
  if (!/^[(6-9)]\d{9}$/.test(number)) {
    document.getElementById("numberError").innerText = "Invalid Number";
  }

  console.log(
    `name = ${name} , email = ${email} + password = ${password} , number = ${number}`,
  );
}
