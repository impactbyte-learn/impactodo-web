const API_URL = `https://impactodo-api.herokuapp.com`;

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

// ===========================================================================
// API

const requestGET = (id = "") => {
  return fetch(`${API_URL}/todos/${id}`)
    .then(res => res.json())
    .then(res => res.data);
};

const requestPOST = () => {
  return fetch(`${API_URL}/todos`)
    .then(res => res.json())
    .then(res => res.data);
};

const requestDELETE = (id = "") => {
  return fetch(`${API_URL}/todos/${id}`)
    .then(res => res.json())
    .then(res => res.data);
};

const requestPUT = id => {
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

const display = (response = requestGET()) => {
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

const displayStorage = (todos = getStorage()) => {
  outputBox.innerHTML = "";

  todos.forEach((todo, index) => {
    const element = document.createElement("div");
    element.innerHTML = template(index, todo);
    outputBox.append(element);
  });
};

// ===========================================================================
// ADD / CREATE

const add = event => {
  event.preventDefault(); // prevent default submit behavior

  const todos = getStorage();
  const text = document.getElementById("todo").value;
  todo.value = "";

  if (text) {
    todos.push({
      text: text,
      date: new Date()
    });
    setStorage(todos);
    displayStorage();
  } else {
    alert("Input can not be empty");
  }
};

// ===========================================================================
// DESTROY / DELETE

const destroy = event => {
  if (event.target.matches(".destroy")) {
    const id = event.target.id.replace("destroy-", "");
    const todos = getStorage();

    todos.splice(id, 1); // delete the object with specified index
    setStorage(todos);
    displayStorage();
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

  displayStorage(filtered);
};

// ===========================================================================
// EDIT / UPDATE

const edit = event => {
  if (event.target.matches(".todo")) {
    const todos = getStorage();
    const id = event.target.id.replace("todo-", "");
    const text = prompt(`Update "${todos[id].text}":`);

    if (text) {
      todos[id] = {
        text: text,
        date: new Date()
      };
      setStorage(todos);
      displayStorage();
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
