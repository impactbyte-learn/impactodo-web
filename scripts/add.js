const push = todo => {
  const todos = get();
  todos.push(todo);
  set(todos);
};

// -----------------------------------------------------------------------------

const addNewTodo = event => {
  event.preventDefault(); // prevent default submit behavior
  const text = document.getElementById("todo").value; // get text from input box
  if (text !== "") {
    push({ text });
    display();
  } else {
    alert("Input can not be empty");
  }
};

// -----------------------------------------------------------------------------

input.addEventListener("submit", addNewTodo);
add.addEventListener("click", addNewTodo);
