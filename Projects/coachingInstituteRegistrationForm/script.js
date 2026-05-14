document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;

    const timings = [];
    document.querySelectorAll("input[name='timings']:checked").forEach((item) => {
      timings.push(item.value);
    });

    console.log(fullName);
    console.log(gender);
    console.log(timings);
});


document
  .querySelector("form")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });
