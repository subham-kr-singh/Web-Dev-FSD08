document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const webSiteName = document.getElementById("website-name").value.trim();
  const userName = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const data = {
    website: webSiteName,
    username: userName,
    password: password,
  };

  StoreToLocalStorage(data);

  document.getElementById("website-name").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();

  document.getElementById("website-name").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

function StoreToLocalStorage(data) {
  const existingData = JSON.parse(localStorage.getItem("data")) || [];
  existingData.push(data);
  localStorage.setItem("data", JSON.stringify(existingData));
}

