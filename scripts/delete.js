// -----------------------------------------------------------------------------
// delete one todo object in array

const deleteTodo = id => {
  const todos = get();
  todos.splice(id, 1); // delete the object with specified index
  set(todos);
  display();
};

// -----------------------------------------------------------------------------
// liten for a click to delete

output.addEventListener("click", event => {
  if (event.target.matches(".delete")) {
    const id = event.target.id.replace("delete-", "");
    deleteTodo(id);
  }
});
