const output = document.getElementById("section-output");

const API_URL = `http://localhost:3000`;

fetch(`${API_URL}/todos`)
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
    output.innerHTML = JSON.stringify(res.data);
  });
