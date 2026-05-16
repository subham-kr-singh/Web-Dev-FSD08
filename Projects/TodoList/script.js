function addNewTask() {
  const taskToAdd = document.getElementById("newTask");

  if (taskToAdd.value.trim() === "") {
    return;
  }

  createTaskElement(taskToAdd.value);

  saveTOLocalStorage(taskToAdd.value);

  taskToAdd.value = "";

  document.getElementById("list").style.display = "block";
}

function createTaskElement(taskText) {
  const LI = document.createElement("li");

  LI.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "p-2",
  );

  const SPAN = document.createElement("span");
  SPAN.innerText = taskText;

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "rounded");

  BUTTON.onclick = () => {
    LI.remove();
    deleteTaskFromLocalStorage(taskText);

    // Hide list if empty
    if (document.getElementById("taskList").children.length === 0) {
      document.getElementById("list").style.display = "none";
    }
  };

  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash");

  const SPAN1 = document.createElement("span");
  SPAN1.innerText = " Delete";

  BUTTON.appendChild(I);
  BUTTON.appendChild(SPAN1);

  LI.appendChild(SPAN);
  LI.appendChild(BUTTON);

  document.getElementById("taskList").appendChild(LI);
}

function saveTOLocalStorage(task) {
  const taskArray = JSON.parse(localStorage.getItem("Task")) || [];

  taskArray.push(task);

  localStorage.setItem("Task", JSON.stringify(taskArray));
}

function deleteTaskFromLocalStorage(task) {
  let taskArray = JSON.parse(localStorage.getItem("Task")) || [];

  taskArray = taskArray.filter((element) => element !== task);

  localStorage.setItem("Task", JSON.stringify(taskArray));
}

function getTaskFromLocalStorage() {
  const taskArray = JSON.parse(localStorage.getItem("Task")) || [];

  if (taskArray.length > 0) {
    document.getElementById("list").style.display = "block";
  }

  taskArray.forEach((task) => {
    createTaskElement(task);
  });
}

// Load tasks on refresh
getTaskFromLocalStorage();

// Hide list if empty initially
if (document.getElementById("taskList").children.length === 0) {
  document.getElementById("list").style.display = "none";
}
