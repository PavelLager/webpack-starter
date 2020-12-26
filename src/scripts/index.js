import '../styles/index.scss';
if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}


let column = [];
let cards = [];
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

  column = data[0];
  cards = data[1];
  users = data[2];
  renderColumn(column, cards, users);
  renderCards(column, cards, users);
}, e => {

});




function addColumn(column) {
  let addCol = document.querySelector('.wrapper');
  addCol.innerHTML += `<div class="column" id:${column.id}>${column.name}</div>`;
}

// function addCards(cards, column) { 
//   let cardColumn = cards.columnId;
//   let addCards = document.querySelectorAll('.column');
//   addCards.filter(function(e){
//     return column.id === cardColumn;
//   })
  
//   addCards.innerHTML += `<div class="card" id:${cards.id}>${cards.description}</div>`;
// }

function addCards(cards, column) { 
  let cardColumn = cards.columnId;
  let addCards = document.querySelectorAll('.column');
  for(let i = 0; i < addCards.length; i++){
    addCards[i].id === cardColumn;
  }
  addCards.innerHTML += `<div class="card" id:${cards.id}>${cards.description}</div>`;
}

function renderColumn() {
  for (let i = 0; i < column.length; i++) {
    debugger;
    addColumn(column[i]);
  }
}

function renderCards() {
  for (let i = 0; i < cards.length; i++) {
    addCards(cards[i]);
  }
}