document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Personal Information:
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("mobile").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector("input[name='gender']:checked")?.value;

  //Academic Details:
  const highestQualification = document.getElementById("qualification").value;

  //Course Information:
  const course = document.getElementById("course").value;
  const batch = document.getElementById("batch").value;
  const timings = [];
  document.querySelectorAll("input[name='timings']:checked").forEach((item) => {
    timings.push(item.value);
  });

  //Address:
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const pincode = document.getElementById("pincode").value;

  //Guardian Details:
  const guardianName = document.getElementById("guardianName").value;
  const guardianPhone = document.getElementById("guardianPhone").value;

  console.log(fullName);
  console.log(email);
  console.log(phone);
  console.log(dob);
  console.log(gender);
  console.log(highestQualification);
  console.log(course);
  console.log(batch);
  console.log(address);
  console.log(city);
  console.log(pincode);
  console.log(guardianName);
  console.log(guardianPhone);
  console.log(timings);

  // define uncheck and blank on all input fields
  document.getElementById("fullName").value = ""; 
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("dob").value = "";
  document.querySelector("input[name='gender']:checked").checked = false;
  document.getElementById("qualification").value = "";
  document.getElementById("course").value = "";
  document.getElementById("batch").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("guardianName").value = "";
  document.getElementById("guardianPhone").value = "";
  document.querySelectorAll("input[name='timings']:checked").forEach((item) => {
    item.checked = false;
  });
  
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();

  window.location.reload();
});
