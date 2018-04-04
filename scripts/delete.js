// -----------------------------------------------------------------------------
// delete one todo object in array

const destroy = id => {
  const todos = get();
  todos.splice(id, 1); // delete the object with specified index
  set(todos);
  display();
};

// -----------------------------------------------------------------------------
// liten for a click to delete

output.addEventListener("click", event => {
  if (event.target.matches(".destroy")) {
    const id = event.target.id.replace("destroy-", "");
    destroy(id);
  }
});
