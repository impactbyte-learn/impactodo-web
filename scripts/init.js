// -----------------------------------------------------------------------------

const input = document.getElementById("input");
const output = document.getElementById("output");
const add = document.getElementById("add");

// -----------------------------------------------------------------------------
// get data string from storage, then convert it to object

const get = () => {
  if (localStorage.todos) {
    return JSON.parse(localStorage.todos); // parse from string to array object
  } else {
    localStorage.todos = "[]"; // set the initial data string if not found
    return [];
  }
};

// -----------------------------------------------------------------------------
// convert data object to string, then put it into storage

const set = todos => {
  localStorage.todos = JSON.stringify(todos);
};

// -----------------------------------------------------------------------------
// create a template to be used later

const template = (index, todo) => {
  const template = `
  <span id="todo-${index}" class="animated bounceIn">${todo.text}</span>
  <span id="destroy-${index}" class="destroy">X</span>
  `;
  return template;
};

// -----------------------------------------------------------------------------
// show all todos

const display = () => {
  output.innerHTML = ""; // empty out all todos in output box
  const todos = get();

  // map over all todos to create all todo nodes
  todos.forEach((todo, index) => {
    const element = document.createElement("div");
    const innerElement = template(index, todos[index]);
    element.innerHTML = innerElement;
    output.append(element);
  });
};

// -----------------------------------------------------------------------------

display(); // initialize application state
