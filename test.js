// document.body.onload = addElement;

// function addElement() {
//   const root = document.getElementById("root"); //Created the button element: by using createElement method

//   const button = document.createElement("button"); // set the button's text content using textContent property
//   const input = document.createElement("input"); // created an input element
//   let count = 0;

//   button.addEventListener("click", function (event) {
//     // added an event listener to the button to define what hgappens when it's clicked.
//     event.preventDefault(); // prevent the default action of the button

//     input.type = "text"; // set the input type to text
//     input.placeholder = "enter task";
//     const inputValue = input.value; // get the value of the input when the button is clicked
//     console.log(inputValue); // 
//     input.value = ""; // clear the input field after logging the task

//     const checkbox = document.createElement("input");
//     const taskItem = document.createElement("li");
//     count++;
//     taskItem.id = `task-${count}`; // set a unique id for each task item

//     if (inputValue) {
//       checkbox.type = "checkbox";

//       taskItem.textContent = inputValue; // set the text content of the list item to the input value
//       root.appendChild(taskItem);
//       root.appendChild(checkbox);
//     }

//     checkbox.addEventListener('change', function() {
//         if(checkbox.checked) {
//             taskItem.style.textDecoration = "line-through";
//         } 
//         else {
//              taskItem.style.textDecoration = "none";
//         }
//     });
//   });

//   button.textContent = "Click Me";

//   root.appendChild(button);
//   root.appendChild(document.createElement("br")); // APPENDED A LINE BREAK
//   root.appendChild(input);
// }
