const API_URL = `http://localhost:3000`;

let storage = [];

// ===========================================================================
// ELEMENTS

const inputForm = document.getElementById("input");
const outputBox = document.getElementById("output");
const addButton = document.getElementById("add");
const searchForm = document.getElementById("search");

// ===========================================================================
// STORAGE

const getStorage = () => {
  return storage;
};

const setStorage = data => {
  storage = data;
};

const get = () => {
  return fetch(`${API_URL}/todos`)
    .then(res => res.json())
    .then(res => res.data);
};

// ===========================================================================
// DISPLAY / READ

const template = (index, todo) => {
  if (todo.text === null) todo.text = "[BROKEN]";

  return `
      <span id="todo-${index}" class="todo animated bounceIn">
        ${todo.text}
        <small class="date">${moment(todo.date).calendar()}</small>
        </span>
      <span id="destroy-${index}" class="destroy">X</span>
      `;
};

const display = (response = get()) => {
  // empty out all todos in outputBox
  outputBox.innerHTML = "";

  // map over all todos to create all todo nodes
  response.then(todos => {
    setStorage(todos);
    todos.forEach((todo, index) => {
      const element = document.createElement("div");
      element.innerHTML = template(index, todo);
      outputBox.append(element);
    });
  });
};

const displayFiltered = todos => {
  outputBox.innerHTML = "";

  todos.forEach((todo, index) => {
    const element = document.createElement("div");
    element.innerHTML = template(index, todo);
    outputBox.append(element);
  });
};

// ===========================================================================
// ADD / CREATE

const post = payload => {
  console.log(payload);
};

const add = event => {
  event.preventDefault(); // prevent default submit behavior

  const todos = get();
  const text = document.getElementById("todo").value;
  todo.value = "";

  if (text) {
    todos.push({
      text: text,
      date: new Date()
    });
    set(todos);
    display();
  } else {
    alert("Input can not be empty");
  }
};

// ===========================================================================
// DESTROY / DELETE

const destroy = event => {
  if (event.target.matches(".destroy")) {
    const id = event.target.id.replace("destroy-", "");
    const todos = get();

    todos.splice(id, 1); // delete the object with specified index
    set(todos);
    display();
  }
};

// ===========================================================================
// SEARCH

const search = event => {
  const value = event.target.value.toLowerCase();
  const todos = getStorage();
  const filtered = todos.filter(todo =>
    todo.text.toLowerCase().includes(value)
  );

  displayFiltered(filtered);
};

// ===========================================================================
// EDIT / UPDATE

const edit = event => {
  if (event.target.matches(".todo")) {
    const todos = get();
    const id = event.target.id.replace("todo-", "");
    const text = prompt(`Update "${todos[id].text}":`);

    if (text) {
      todos[id] = {
        text: text,
        date: new Date()
      };
      set(todos);
      display();
    } else {
      alert("Text can not be empty");
    }
  }
};

// ===========================================================================
// LISTENER

searchForm.addEventListener("keyup", search);
inputForm.addEventListener("submit", add);
addButton.addEventListener("click", add);
outputBox.addEventListener("click", destroy);
outputBox.addEventListener("click", edit);

// ===========================================================================
// INITIALIZATION

display(); // initialize application state
