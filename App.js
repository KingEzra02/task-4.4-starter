// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.

//Firstly i appand to DOM the main element with id root
document.body.onload = addElement;

function addElement() {
  const root = document.getElementById("root");
  const button = document.createElement("button");
  const input = document.createElement("input");
  const taskCountDisplay = document.createElement("p"); // New element to show task count
  let totalTasks = 0;
  let incompleteTasks = 0;

  //Apply inline styles

  button.style.margin = "10px 0";
  button.style.border = "none";
  button.style.padding = "10px";
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";
  button.style.cursor = "pointer";
  button.style.borderRadius = "5px";
  button.style.width = "100px";
  button.style.alignSelf = "center";
  root.style.display = "flex";
  root.style.flexDirection = "column";
  // Set up input and button
  input.type = "text";
  input.placeholder = "Enter task";
  button.textContent = "Add Task";

  // Display initial task count
  taskCountDisplay.textContent = `Tasks remaining: ${incompleteTasks}`;
  root.appendChild(taskCountDisplay);
  root.appendChild(input);
  root.appendChild(button);

  button.addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = input.value.trim(); // Trim whitespace

    if (inputValue) {
      // Create task elements
      const taskItem = document.createElement("li");
      const checkbox = document.createElement("input");
      const deleteBtn = document.createElement("button");

      deleteBtn.style.backgroundColor = "#bb0a0aff";
      deleteBtn.style.color = "white";
      deleteBtn.style.cursor = "pointer";
      deleteBtn.style.borderRadius = "5px";
      // Configure checkbox
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          taskItem.style.textDecoration = "line-through";
          incompleteTasks--; // Decrement count when marked complete
        } else {
          taskItem.style.textDecoration = "none";
          incompleteTasks++; // Increment when unchecked
        }
        taskCountDisplay.textContent = `Tasks remaining: ${incompleteTasks}`;
      });

      // Configure delete button
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function () {
        if (!checkbox.checked) incompleteTasks--; // Decrement if task was incomplete
        root.removeChild(taskItem);
        taskCountDisplay.textContent = `Tasks remaining: ${incompleteTasks}`;
      });

      // Assemble task
      taskItem.appendChild(checkbox);
      taskItem.appendChild(document.createTextNode(inputValue));
      taskItem.appendChild(deleteBtn);
      root.appendChild(taskItem);

      // Update counts and UI
      incompleteTasks++;
      totalTasks++;
      taskCountDisplay.textContent = `Tasks remaining: ${incompleteTasks}`;
      input.value = ""; // Clear input AFTER successful submission
    }
  });
}
