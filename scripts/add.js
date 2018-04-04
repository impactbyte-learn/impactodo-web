// push the new object into array that retrieved from storage
const pushNewTodo = newTodoObject => {
  const currentTodosArray = getTodos();

  currentTodosArray.push(newTodoObject);

  setTodos(currentTodosArray);
};

// -----------------------------------------------------------------------------

// add a new todo from input
const addNewTodo = event => {
  // prevent default submit behavior
  event.preventDefault();

  // get text from input box
  const newTodoText = document.getElementById("input-todo-text").value;

  // only proceed if the text is not empty
  if (newTodoText !== "") {
    // empty out all todos in output box
    outputBox.innerHTML = "";

    // push the new text into todos array
    pushNewTodo({ text: newTodoText });

    // redisplay the todos
    displayTodos();
  } else {
    alert("Input can't be empty");
  }
};

// -----------------------------------------------------------------------------

// listen for a submit/click to add a new todo
inputBox.addEventListener("submit", addNewTodo);
addButton.addEventListener("click", addNewTodo);
