class TodoList {
  constructor(todos) {
    this.todos = todos || [];
  }
}

class Todo {
  constructor(text, date) {
    this.text = text;
    this.date = date.toString();
  }
}

class TodoSpecial extends Todo {
  constructor(text, date, icon) {
    super(text, date);
    this.icon = icon;
  }
}

const todo1 = new Todo("Learn JavaScript", new Date());
const todo2 = new Todo("Explore OOP", new Date());
const todo3 = new TodoSpecial(
  "Graduate from Impact Byte",
  new Date(),
  "Charizard"
);

const todolist = new TodoList([todo1, todo2, todo3]);

console.log(todolist);
