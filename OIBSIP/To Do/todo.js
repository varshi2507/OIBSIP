function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
      const task = createTaskElement(taskText);
      document.getElementById("pendingTasks").appendChild(task);
      taskInput.value = "";
  }
}

function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;
  
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.onclick = function() {
      completeTask(li);
  };

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
      li.remove();
  };

  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  return li;
}

function completeTask(taskElement) {
  taskElement.classList.add("completed");
  const completedTasks = document.getElementById("completedTasks");
  completedTasks.appendChild(taskElement);
}
