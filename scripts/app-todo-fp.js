const todos = [
  {
    text: "Learn JavaScript"
  },
  {
    text: "Explore Functional Programming"
  }
];

const addExclamation = listOfItems => {
  const newItems = listOfItems.map(item => {
    return item.text + "!!!";
  });
  return newItems;
};

const addQuestion = listOfItems => {
  const newItems = listOfItems.map(item => {
    return item.text + "???";
  });
  return newItems;
};

const betterTodos = addExclamation(todos);
const questionables = addQuestion(todos);

console.log(todos);
console.log(betterTodos);
console.log(questionables);
