const getNewJoke = async () => {
  const API_URL = "https://v2.jokeapi.dev/joke/Programming";

  const response = await fetch(API_URL);
  const data = await response.json();

  console.log(data);

  document.getElementById("setup").innerText = data.joke || data.setup;
  document.getElementById("delivery").innerText = data.delivery || "";
};
