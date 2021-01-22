let body = document.getElementsByTagName("body")[0];
let teble = document.getElementById("table");
let recipeName;
let numberOfIngredients;
let ingredientName;

function setIngredient() {
  recipeName = prompt(`Enter recipe name`);

  numberOfIngredients = prompt(`Enter number of ingredients`);
  if (isNaN(numberOfIngredients)) {
    alert(`Please enter valid number of ingredients !!!`);
    setIngredient();
  } else {
    ingredientName = [];
    for (let i = 1; i <= numberOfIngredients; i++) {
      `${ingredientName.push(
        prompt(`Enter name of ingredient number ${i}:`)
      )} `;
    }
    createTable(recipeName, ingredientName);
  }
}
function createTable(rName, rIngredient) {
  table.innerHTML += `<table> 
        <tr>
            <th> ${recipeName} </th>
        </tr>`;
  rIngredient.forEach((element) => {
    table.innerHTML += `<td> ${element} </td>`;
  });
}
setIngredient();
