let b = storage.split("+");
let c = b.map((e) => {
  return e.split(";");
});

c.forEach((e, i) => {
  e.push(ket[i]);
});
c.forEach((e, i) => {
  document.querySelector(".tbody").innerHTML += `
          <tr class="bg-white text-gray-800">
          <td s class="py-4 px-6">${i + 1}</td>
          <td class="py-4 px-6">${e[1]}</td>
          <td class="py-4 px-6">${e[2]}</td>
          <td class="py-4 px-6">${e[3]}</td>
          <td class="py-4 px-6">${e[4]}</td>
          <td class="py-4 px-6">${e[5]}</td>
          <td class="py-4 px-6">${e[6]}</td>
        </tr>
          `;
});
