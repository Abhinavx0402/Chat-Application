let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks to browser
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task
function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value.trim();

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(text); // just store text (simple version)
  input.value = "";

  saveTasks();
  showTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasks();
  showTasks();
}

// Show tasks on screen
function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

// Load tasks when page opens
showTasks();