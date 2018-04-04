(function() {
  // ===========================================================================
  // ELEMENTS

  const inputForm = document.getElementById("input");
  const outputBox = document.getElementById("output");
  const addButton = document.getElementById("add");
  const searchForm = document.getElementById("search");

  // ===========================================================================
  // STORAGE

  const get = () => {
    if (localStorage.todos) {
      return JSON.parse(localStorage.todos); // parse from string to object
    } else {
      localStorage.todos = "[]"; // set the initial data string if not found
      return [];
    }
  };

  const set = todos => {
    localStorage.todos = JSON.stringify(todos);
  };

  // ===========================================================================
  // DISPLAY / READ

  const template = (index, todo) => {
    return `
    <span id="todo-${index}" class="animated bounceIn">${todo.text}</span>
    <span id="destroy-${index}" class="destroy">X</span>
    `;
  };

  const display = () => {
    // empty out all todos in outputBox
    outputBox.innerHTML = "";
    // map over all todos to create all todo nodes
    get().forEach((todo, index) => {
      const element = document.createElement("div");
      const innerElement = template(index, todo);
      element.innerHTML = innerElement;
      outputBox.append(element);
    });
  };

  // ===========================================================================
  // ADD / CREATE

  const push = todo => {
    const todos = get();
    todos.push(todo);
    set(todos);
  };

  const add = event => {
    event.preventDefault(); // prevent default submit behavior
    const text = document.getElementById("todo").value; // get text from input box
    if (text !== "") {
      push({ text });
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

    const todos = get();
    const searched = todos.filter(todo =>
      todo.text.toLowerCase().includes(value)
    );
    displaySearched(searched);
  };

  const displaySearched = searched => {
    outputBox.innerHTML = "";
    searched.forEach((todo, index) => {
      const element = document.createElement("div");
      const innerElement = template(index, todo);
      element.innerHTML = innerElement;
      outputBox.append(element);
    });
  };

  // ===========================================================================
  // LISTENER

  inputForm.addEventListener("submit", add);
  addButton.addEventListener("click", add);
  outputBox.addEventListener("click", destroy);
  searchForm.addEventListener("keyup", search);

  // ===========================================================================
  // INITIALIZATION

  display(); // initialize application state
})();
