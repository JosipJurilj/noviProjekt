const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function dodajParniUListu(arr) {
  const lista = document.getElementById("lista");

  arr.forEach((broj) => {
    if (broj % 2 === 0) {
      const listItem = document.createElement("li");
      listItem.textContent = broj;
      lista.appendChild(listItem);
    }
  });
}

dodajParniUListu(arr);
