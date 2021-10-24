const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from my first projects with nodemon");
});

const users = [
  { id: 0, name: "sabana", email: "sabana@gmail.com" },
  { id: 1, name: "sabnoor", email: "sanoor@gmail.com" },
  { id: 2, name: "suchorita", email: "suchorita@gmail.com" },
  { id: 3, name: "srabonti", email: "srabonti@gmail.com" },
  { id: 4, name: "sahana", email: "sahana@gmail.com" },
  { id: 5, name: "susmita", email: "susmita@gmail.com" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);

  console.log("hitting the post", req.body);
  // res.send("inside post");
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const user = users[req.params.id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port ", port);
});
