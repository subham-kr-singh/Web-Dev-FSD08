function addNewTask() {
  const taskToAdd = document.getElementById("newTask");

  const LI = document.createElement("li");
  LI.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "p-2",
  );

  const SPAN = document.createElement("span");
  SPAN.innerText = taskToAdd.value;
  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "rounded");

  BUTTON.onclick = () => LI.remove();

  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash");

  const SPAN1 = document.createElement("span");
  SPAN1.innerText = "Delete ";

  BUTTON.appendChild(SPAN1);
  BUTTON.appendChild(I);

  LI.appendChild(SPAN);
  LI.appendChild(BUTTON);

  document.getElementById("taskList").appendChild(LI);

  taskToAdd.value = "";
  document.getElementById("list").style.display = "block";
}

if (document.getElementById("taskList").children.length === 0) {
  document.getElementById("list").style.display = "none";
}
