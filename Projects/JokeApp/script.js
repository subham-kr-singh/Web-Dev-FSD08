const getNewJoke = async () => {
  const API_URL = "https://official-joke-api.appspot.com/random_joke";

  const response = await fetch(API_URL);
  const data = await response.json();

  document.getElementById("setup").innerText = data.setup;
  document.getElementById("delivery").innerText = data.punchline;

  document.getElementById("error").innerText = data.message || "";
};
