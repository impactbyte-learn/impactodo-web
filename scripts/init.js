// -----------------------------------------------------------------------------

const input = document.getElementById("input");
const output = document.getElementById("output");
const add = document.getElementById("add");

// -----------------------------------------------------------------------------

const get = () => {
  if (localStorage.todos) {
    return JSON.parse(localStorage.todos); // parse from string to array object
  } else {
    localStorage.todos = "[]"; // set the initial data string if not found
    return [];
  }
};

// -----------------------------------------------------------------------------

const set = todos => {
  localStorage.todos = JSON.stringify(todos);
};

// -----------------------------------------------------------------------------

const template = (index, todo) => {
  return `
  <span id="todo-${index}" class="animated bounceIn">${todo.text}</span>
  <span id="destroy-${index}" class="destroy">X</span>
  `;
};

// -----------------------------------------------------------------------------

const display = () => {
  output.innerHTML = ""; // empty out all todos in output box
  // map over all todos to create all todo nodes
  get().forEach((todo, index) => {
    const element = document.createElement("div");
    const innerElement = template(index, todos[index]);
    element.innerHTML = innerElement;
    output.append(element);
  });
};

// -----------------------------------------------------------------------------

display(); // initialize application state
