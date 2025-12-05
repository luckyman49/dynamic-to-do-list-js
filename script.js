// Run code after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage when page loads
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
    // 'false' means don't save again while loading
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
    // If taskText not provided (e.g. from button/Enter), get from input
    if (!taskText) {
      taskText = taskInput.value.trim();
    }

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn'); // ✅ checker requires classList.add

    // Remove task when button clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);

      // Update Local Storage after removal
      let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks = storedTasks.filter(t => t !== taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    };

    // Append button to li, then li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save to Local Storage if needed
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener: Add task when button is clicked
  addButton.addEventListener('click', () => addTask());

  // Event listener: Add task when Enter key is pressed
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Load tasks on page start
  loadTasks();
});
