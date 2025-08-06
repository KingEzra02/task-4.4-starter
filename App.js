// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.

//Firstly i appand to DOM the main element with id root
document.body.onload = addElement;

function addElement() {
  const root = document.getElementById("root");
  const container = document.createElement("div"); // Main container for better styling
  const taskHeader = document.createElement("h2");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const taskList = document.createElement("ul"); // Container for tasks
  const taskCountDisplay = document.createElement("p");
  
  let totalTasks = 0;
  let incompleteTasks = 0;

  // ===== STYLING =====
  // Body styling
  document.body.style.margin = "0";
  document.body.style.padding = "20px";
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.backgroundColor = "#f5f5f5";
  
  // Container styling
  container.style.width = "400px";
  container.style.margin = "40px auto";
  container.style.padding = "30px";
  container.style.backgroundColor = "#ffffff";
  container.style.borderRadius = "15px";
  container.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  
  // Header styling
  taskHeader.textContent = "Task List";
  taskHeader.style.textAlign = "center";
  taskHeader.style.color = "#2c3e50";
  taskHeader.style.marginBottom = "30px";
  taskHeader.style.fontSize = "28px";
  
  // Input styling
  input.type = "text";
  input.placeholder = "Enter your task here...";
  input.style.width = "100%";
  input.style.padding = "12px 15px";
  input.style.marginBottom = "15px";
  input.style.border = "1px solid #ddd";
  input.style.borderRadius = "6px";
  input.style.fontSize = "16px";
  input.style.boxSizing = "border-box";
  
  // Button styling
  button.textContent = "Add Task";
  button.style.width = "100%";
  button.style.padding = "12px";
  button.style.backgroundColor = "#27ae60";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "6px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  button.style.transition = "background-color 0.3s";
  button.style.marginBottom = "30px";
  
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#2ecc71";
  });
  
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#27ae60";
  });
  
  // Task list styling
  taskList.style.listStyle = "none";
  taskList.style.padding = "0";
  taskList.style.margin = "0";
  
  // Task counter styling
  taskCountDisplay.style.textAlign = "center";
  taskCountDisplay.style.marginTop = "30px";
  taskCountDisplay.style.color = "#7f8c8d";
  taskCountDisplay.style.fontWeight = "bold";
  taskCountDisplay.style.fontSize = "14px";
  
  // ===== STRUCTURE =====
  container.appendChild(taskHeader);
  container.appendChild(input);
  container.appendChild(button);
  container.appendChild(taskList);
  container.appendChild(taskCountDisplay);
  root.appendChild(container);
  
  // Initial display
  taskCountDisplay.textContent = `Tasks remaining: ${incompleteTasks}`;
  
  // ===== FUNCTIONALITY =====
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = input.value.trim();
    
    if (inputValue) {
      // Create task elements
      const taskItem = document.createElement("li");
      const taskContainer = document.createElement("div");
      const checkbox = document.createElement("input");
      const taskText = document.createElement("span");
      const deleteBtn = document.createElement("button");
      
      // Task item styling
      taskItem.style.marginBottom = "12px";
      taskItem.style.padding = "12px";
      taskItem.style.backgroundColor = "#f9f9f9";
      taskItem.style.borderRadius = "6px";
      taskItem.style.display = "flex";
      taskItem.style.alignItems = "center";
      taskItem.style.justifyContent = "space-between";
      
      // Checkbox styling
      checkbox.type = "checkbox";
      checkbox.style.marginRight = "15px";
      checkbox.style.cursor = "pointer";
      checkbox.style.width = "18px";
      checkbox.style.height = "18px";
      
      // Task text styling
      taskText.textContent = inputValue;
      taskText.style.flexGrow = "1";
      taskText.style.fontSize = "16px";
      
      // Delete button styling
      deleteBtn.textContent = "Delete";
      deleteBtn.style.padding = "6px 12px";
      deleteBtn.style.backgroundColor = "#e74c3c";
      deleteBtn.style.color = "white";
      deleteBtn.style.border = "none";
      deleteBtn.style.borderRadius = "4px";
      deleteBtn.style.cursor = "pointer";
      deleteBtn.style.fontSize = "14px";
      deleteBtn.style.marginLeft = "15px";
      deleteBtn.style.transition = "background-color 0.3s";
      
      deleteBtn.addEventListener("mouseover", () => {
        deleteBtn.style.backgroundColor = "#c0392b";
      });
      
      deleteBtn.addEventListener("mouseout", () => {
        deleteBtn.style.backgroundColor = "#e74c3c";
      });
      
      // Checkbox functionality
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          taskText.style.textDecoration = "line-through";
          taskText.style.color = "#95a5a6";
          incompleteTasks--;
        } else {
          taskText.style.textDecoration = "none";
          taskText.style.color = "inherit";
          incompleteTasks++;
        }
        updateTaskCount();
      });
      
      // Delete button functionality
      deleteBtn.addEventListener('click', function() {
        if (!checkbox.checked) incompleteTasks--;
        taskList.removeChild(taskItem);
        updateTaskCount();
      });
      
      // Assemble task
      taskContainer.appendChild(checkbox);
      taskContainer.appendChild(taskText);
      taskItem.appendChild(taskContainer);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
      
      // Update counts
      incompleteTasks++;
      totalTasks++;
      updateTaskCount();
      input.value = ""; // Clear input
    }
  });
  
  function updateTaskCount() {
    taskCountDisplay.textContent = `${incompleteTasks} ${incompleteTasks === 1 ? 'task' : 'tasks'} remaining`;
  }
}
