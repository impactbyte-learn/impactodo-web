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

// initialize application state
displayTodos();
