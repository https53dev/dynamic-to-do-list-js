document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a task to the list
    function addTask() {
      // Get and trim task input value
      const taskText = taskInput.value.trim();
  
      // Validate input
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
  
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      // Create a remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";
  
      // Add event listener to remove the task
      removeButton.onclick = function () {
        taskList.removeChild(listItem);
      };
  
      // Append button to list item and list item to the task list
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      // Clear the input field
      taskInput.value = "";
    }
  
    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);
  
    // Event listener for the Enter key in the input field
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  