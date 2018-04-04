// -----------------------------------------------------------------------------

const destroy = id => {
  const todos = get();
  todos.splice(id, 1); // delete the object with specified index
  set(todos);
  display();
};

// -----------------------------------------------------------------------------

output.addEventListener("click", event => {
  if (event.target.matches(".destroy")) {
    destroy(event.target.id.replace("destroy-", ""));
  }
});
