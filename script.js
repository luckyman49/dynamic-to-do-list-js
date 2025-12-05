// Run code after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select key elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Get the text from the input field and trim spaces
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // When remove button is clicked, delete the task
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Add the remove button inside the li
    li.appendChild(removeBtn);

    // Add the li to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener: Add task when button is clicked
  addButton.addEventListener('click', addTask);

  // Event listener: Add task when Enter key is pressed
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
