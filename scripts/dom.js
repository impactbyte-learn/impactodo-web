// const inputFullName = document.getElementsByName("fullname")[0];
// const submitButton = document.getElementsByName("submit")[0];
//
// console.log(inputFullName);
// console.log(submitButton);

const pancasilaCollection = document.querySelector("#pancasila").children;
const pancasila = Array.from(pancasilaCollection);

pancasila.map(silaNode => {
  const sila = silaNode.innerHTML;
  console.log(sila.substr(3));
});
