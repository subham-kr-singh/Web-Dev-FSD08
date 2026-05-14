document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Personal Information:
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("mobile").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector("input[name='gender']:checked")?.value;

  //Academic Details:
  const highestQualification = document.getElementById("qualification").value;
  const marks = document.getElementById("marks").value;
  //Course Information:
  const course = document.getElementById("course").value;
  const timings = [];
  document.querySelectorAll("input[name='timings']:checked").forEach((item) => {
    timings.push(item.value);
  });

  //Address:
  const address = document.getElementById("residentialAddress").value.trim();
  const city = document.getElementById("city").value.trim();
  const pincode = document.getElementById("pinCode").value.trim();

  //Guardian Details:
  const guardianName = document.getElementById("guardianName").value.trim();
  const guardianPhone = document.getElementById("guardianMobile").value.trim();

  // save data in Json form
  const registrationData = {
    fullName: fullName,
    email: email,
    phone: phone,
    dob: dob,
    gender: gender,
    highestQualification: highestQualification,
    marks: marks,
    course: course,
    timings: timings,
    address: address,
    city: city,
    pincode: pincode,
    guardianName: guardianName,
    guardianPhone: guardianPhone,
  };

  validateData(registrationData)
    ? (console.log("Your Form is Submitted"),
      alert("Form submitted successfully!"))
    : alert("Form submission failed.");

  console.log(registrationData);

  document.querySelector("input[name='gender']:checked").checked = false;
  document.querySelectorAll("input[name='timings']:checked").forEach((item) => {
    item.checked = false;
  });
  document.querySelectorAll(".err").forEach((input) => {
    input.value = "";
  });
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();

  window.location.reload();
});

function validateData(data) {
  let isValid = true;

  if (!data.fullName) {
    document.getElementById("fullNameError").innerText =
      "Full Name is required.";
    isValid = false;
  }

  if (!/[A-Za-z\s]+$/.test(data.fullName)) {
    document.getElementById("fullNameError").innerText =
      "only alphabets and space allowed";
    isValid = false;
  }

  if (!/[A-Za-z\d\.\-]+@(gmail.com|icloud.com)+$/.test(data.email)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address.";
    isValid = false;
  }

  if (!/^(6-9)\d{9}$/.test(data.phone)) {
    document.getElementById("mobileError").innerText =
      "Only Indian mobile numbers allowed";
    isValid = false;
  }

  return isValid;
}
