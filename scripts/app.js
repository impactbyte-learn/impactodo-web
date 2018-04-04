// use for parsing string to DOM node
const parser = new DOMParser();

// get required elements
const inputBox = document.getElementById("input-box");
const outputBox = document.getElementById("output-box");
const addButton = document.getElementById("input-add-button");

// -----------------------------------------------------------------------------

// get data string from storage, then convert it to object
const getTodos = () => {
  // check if there's a data object in storage
  if (localStorage.todos) {
    // parse from string to array object
    const todosArray = JSON.parse(localStorage.todos);
    return todosArray;
  } else {
    // set the initial data string if not found
    localStorage.setItem("todos", `[]`);
    return [];
  }
};

// -----------------------------------------------------------------------------

// convert data object to string, then put it into storage
const setTodos = newTodosArray => {
  localStorage.setItem("todos", JSON.stringify(newTodosArray));
};

// -----------------------------------------------------------------------------

// push the new object into array that retrieved from storage
const pushNewTodo = newTodoObject => {
  const currentTodosArray = getTodos();

  currentTodosArray.push(newTodoObject);

  setTodos(currentTodosArray);
};

// -----------------------------------------------------------------------------

// create a template to be used later
const createNodeStringTemplate = (todoIndex, todoObject) => {
  const template = `
  <div id="${todoIndex}" data-id="${todoIndex}">
    <span class="animated bounceIn">${todoObject.text}</span>
    <i class="delete button fas fa-times-circle"></i>
  </div>
  `;

  return template;
};

// -----------------------------------------------------------------------------

// show all todos
const displayTodos = () => {
  const currentTodos = getTodos();

  // map over all todos to create all todo nodes
  currentTodos.map((todo, index) => {
    const nodeString = createNodeStringTemplate(index, currentTodos[index]);

    // convert the resulted template into HTML
    const doc = parser.parseFromString(nodeString, "text/html");
    // get only the <div> inside html.body
    const node = doc.body.firstChild;

    outputBox.append(node);
  });
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

// -----------------------------------------------------------------------------

// initialize application state
displayTodos();
