const parser = new DOMParser(); // use for parsing string to DOM node

const input = document.getElementById("input");
const output = document.getElementById("output");
const add = document.getElementById("add");

let storage = [];

// -----------------------------------------------------------------------------
// get data string from storage, then convert it to object

const get = () => {
  if (localStorage.todos) {
    const todos = JSON.parse(localStorage.todos); // parse from string to array object
    return todos;
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
  <div>
    <span id="todo-${index}" class="animated bounceIn">${todo.text}</span>
    <span id="delete-${index}" class="delete">X</span>
  </div>`;

  return template;
};

// -----------------------------------------------------------------------------
// show all todos

const display = () => {
  output.innerHTML = ""; // empty out all todos in output box
  const todos = get();

  // map over all todos to create all todo nodes
  todos.forEach((todo, index) => {
    const nodeString = template(index, todos[index]);
    // convert the resulted template into HTML
    const doc = parser.parseFromString(nodeString, "text/html");
    // get only the <div> inside html.body
    const node = doc.body.firstChild;

    output.append(node);
  });
};

// -----------------------------------------------------------------------------

display(); // initialize application state
