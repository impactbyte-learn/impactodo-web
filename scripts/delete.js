const deleteTodoWithId = todoId => {
  const currentTodos = getTodos();

  // delete the object with specified index
  currentTodos.splice(todoId, 1);
  console.log(currentTodos);

  setTodos(currentTodos);
  displayTodos();
};

outputBox.addEventListener("click", event => {
  if (event.target.matches(".delete")) {
    const todoId = event.target.id.replace("delete-", "");

    deleteTodoWithId(todoId);
  }
});
