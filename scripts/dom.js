// const inputFullName = document.getElementsByName("fullname")[0];
// const submitButton = document.getElementsByName("submit")[0];
//
// console.log(inputFullName);
// console.log(submitButton);

const showPancasila = () => {
  const pancasilaCollection = document.querySelector("#pancasila").children;
  const pancasila = Array.from(pancasilaCollection);

  pancasila.map(silaNode => {
    const sila = silaNode.innerHTML;
    console.log(sila.substr(3));
  });
};

const calculateAdd = () => {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;

  let result = Number(number1) + Number(number2);
  console.log(result);
};

const combineName = () => {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;

  let result = `${firstname} ${lastname}`;
  console.log(result);
};
