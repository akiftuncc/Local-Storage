for (let i = 0; i < localStorage.length; i++) {
  const listFinal = listCreator(i);
  if (i == 0) {
  }
  console.log(listFinal);
  tableCreator(listFinal, i);
}

function tableCreator(listFinal, i) {
  const table = document.getElementById("my-table");
  const name = listFinal[0][1];
  const surname = listFinal[1][1];
  const age = listFinal[5][1];
  const city = listFinal[3][1];
  const photo = listFinal[4][1];

  const newRow = table.insertRow(i + 1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = surname;
  cell3.innerHTML = age;
  cell4.innerHTML = city;
  cell5.innerHTML = photo;
}

function listCreator(i) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  const valueSliced = value.slice(1, -1);
  const valuesReplaced = valueSliced.replace(/"/g, "");
  const valueSpitted = valuesReplaced.split(",");
  const listFinal = listSplitted(valueSpitted);
  return listFinal;
}

function listSplitted(theList) {
  let count = 0;
  theList.forEach((element) => {
    const splitted = element.split(":");
    theList[count] = splitted;
    count++;
  });
  return theList;
}
