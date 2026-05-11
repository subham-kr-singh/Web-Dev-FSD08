function calculate(data) {
  const equation = document.getElementById("result");
  if (data === "AC") {
    equation.innerText = "0";
  } else if (data === "=") {
    const answer = eval(equation.innerText);
    equation.innerText = answer;
  } else if (data === "C") {
    if (equation.innerText.length === 1) {
      equation.innerText = "0";
    } else {
      equation.innerText = equation.innerText.slice(0, -1);
    }
  } else if (equation.innerText === "0") {
    equation.innerText = data;
  } else {
    equation.innerText += data;
  }
}