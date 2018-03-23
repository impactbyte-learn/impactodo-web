// use for parsing string to DOM node
const parser = new DOMParser();

// -----------------------------------------------------------------------------

// use this dummy data to prepopulate
const dummy = [
  "Join Impact Byte coding bootcamp",
  "Design my first website",
  "Create a todo app",
  "Eat some lunch",
  "Use Bootstrap"
];

// prepare for todos array
const todos = [];

// -----------------------------------------------------------------------------

// get required elements
const outputBox = document.getElementById("output-box");
const addButton = document.getElementById("input-add");
const inputBox = document.getElementById("input-box");

// -----------------------------------------------------------------------------

// function to create a todo node string
const createNodeString = (todoIndex, todoText) => {
  const template = `
  <div data-id="${todoIndex}">
    <span class="animated bounceIn">${todoText}</span>
    <i class="delete button fas fa-times-circle"></i>
  </div>
  `;
  return template;
};

// -----------------------------------------------------------------------------

// function for adding a new todo
const addNewTodo = event => {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;

  if (inputText !== "") {
    // empty out all todos in output box
    outputBox.innerHTML = "";

    // get text from input box

    // push the new text into todos array
    todos.push(inputText);

    // loop over all todos to create all todo nodes
    for (let index = 0; index < todos.length; index++) {
      const nodeString = createNodeString(index, todos[index]);

      const doc = parser.parseFromString(nodeString, "text/html");
      const node = doc.body.firstChild;

      outputBox.append(node);
    }
  }
};

// -----------------------------------------------------------------------------

// listen for a submit/click to add a new todo
inputBox.addEventListener("submit", addNewTodo);
addButton.addEventListener("click", addNewTodo);
