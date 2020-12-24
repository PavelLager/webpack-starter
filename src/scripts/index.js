import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}


let column = [];
let card = [];
let users = [];

let columnsPromise = fetch('http://localhost:3000/column').then(res => {
  return res.json();
});

let cardPromise = fetch('http://localhost:3000/cards').then(res => {
  return res.json();
});

let usersPromise = fetch('http://localhost:3000/users').then(res => {
  return res.json();
});
Promise.all([columnsPromise, cardPromise, usersPromise]).then(data => {
  debugger;
  column = data[0];
  card = data[1];
  users = data[2];
  renderColumn(column, card, users);
}, e => {
  debugger;
});

// let column = [
//   {id: 1, name: "Todo", order: 1},
//   {id: 2, name: "First", order: 2},
//   {id: 3, name: "Second", order: 3}
// ];

// let card = [
//   { id: 1, description: "qweqwr", value: 1 },
//   { id: 2, description: "qweasdasfqwr", value: 2 },
//   { id: 3, description: "qwevdsaqwr", value: 3 }
// ];
// let users = [
//   { id: 1, name: "Gena", img: "src" },
//   { id: 2, name: "Vova", img: "src" },
//   { id: 3, name: "Potap", img: "src" }
// ];


function addColumn(column) {
  let addCol = document.querySelector('.wrapper');
  addCol.innerHTML += `<div class="column" id:${column.id}>${card.description}</div>`;
}

function addCard(column) {
  let addCards = document.querySelector('.column');
  addCards.innerHTML += `<div class="card" id:${card.id}>${column.name}</div>`;
}

function renderColumn() {
  for (let i = 0; i < column.length; i++) {
    debugger;
    addColumn(column[i], card[i]);
    for (let i = 0; i < card.length; i++) {
      if (column[i].order === card[i].value) {
        addCard(card[i]);
      }
    }
  }
}
