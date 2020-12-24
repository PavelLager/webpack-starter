/**
 * API
 * 
 * PUT =>    input {title: 'string'} output {title: 'string', id: 1}
 * GET =>                            output [{title: 'string', id: 1}, ...]
 * DELETE => input {id: 1}           output [{title: 'string', id: 1}, ...]
 */
var columns = [
  {id: 0, name: 'TODO', order: 1},
  {id: 1, name: 'DEV', order: 2},
  {id: 2, name: 'QA', order: 3},
]; //  {id: number, name: string, order: number},
var columnId = 3;
var cards = [
  {id: 0, description: 'rewgdfsvg', value: 1},
  {id: 1, description: 'r34f34f34', value: 2},
  {id: 2, description: 'f34f34f34', value: 3},
]; // { id: 1, description: "qweqwr", value: 1 },
var cardsId = 3;
 users = [
  { id: 1, name: "Gena", img: "src" },
  { id: 2, name: "Vova", img: "src" },
  { id: 3, name: "Potap", img: "src" }
];
var usersId = 3;
var express = require("express");
var app = express();
const jsonParser = express.json();
function resolveCors(res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
}
app.use("/column", jsonParser, function (req, res) {
  resolveCors(res);
  switch (req.method) {
    case "GET":
      break;
    case "PUT":
      columnId++;
      columns.push({ name: req.body.name, order: req.body.order, id: columnId });
      res.json(columns[columns.length - 1]);
      return;
    case "DELETE":
      columns = columns.filter((item) => item.id !== req.body.id);
      break;
  }
  res.json(columns);
});
app.use("/cards", jsonParser, function (req, res) {
  resolveCors(res);
  switch (req.method) {
    case "GET":
      break;
    case "PUT":
      cardsId++;
      columns.push({ description: req.body.description, value: req.body.value, id: cardsId });
      res.json(cards[cards.length - 1]);
      return;
    case "DELETE":
      cards = cards.filter((item) => item.id !== req.body.id);
      break;
  }
  res.json(cards);
});
app.use("/users", jsonParser, function (req, res) {
  resolveCors(res);
  switch (req.method) {
    case "GET":
      break;
    case "PUT":
      usersId++;
      users.push({ name: req.body.name, img: req.body.img, id: usersId });
      res.json(users[users.length - 1]);
      return;
    case "DELETE":
      users = users.filter((item) => item.id !== req.body.id);
      break;
  }
  res.json(users);
});
app.listen(3000, function () {
  console.log("ExpressJs server run on 3000 port");
});





















