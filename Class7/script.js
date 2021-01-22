
function createTable(row, column) {
  if (!isNaN(row) && !isNaN(column)) {
    document.body.innerHTML += `<table id="table">`;
    let table = document.getElementById("table");

    for (let i = 1; i <= row; i++) {
      table.innerHTML += "<tr>";
      for (let j = 1; j <= column; j++) {
        table.lastElementChild.lastElementChild.innerHTML += `<td>Row-${i} Col-${j} </td>`;
      }
      table.innerHTML += "</tr>";
    }
    document.body.innerHTML += `</table>`;
  } else {
    alert("Please enter corect numbers for rows and columns !!!");
    createTable(
      parseInt(prompt("Please insert number of rows")),
      parseInt(prompt("Please insert number of columns"))
    );
  }
}

createTable(
  parseInt(prompt("Please insert number of rows")),
  parseInt(prompt("Please insert number of columns"))
);
