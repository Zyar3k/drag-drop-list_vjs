const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const biggestCities = [
  "Tokyo",
  "Delhi",
  "Shanghai",
  "Sao Paulo",
  "Mexico City",
  "Cairo",
  "Dhaka",
  "Mumbai",
  "Beijing",
  "Osaka"
];

// store listitems
const listItems = [];

let dragStartIndex;

createList();

// inster list items to DOM

function createList() {
  [...biggestCities]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((city, index) => {
      console.log(city);
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
      <span class='number'>${index + 1}</span>
      <div class='draggable' draggable='true'>
        <p class='city-name'>${city}</p>
        <i class='fas fa-grip-lines'></i>
      </div>
    `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
