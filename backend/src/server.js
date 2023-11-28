const express = require('express');
const userRoutes = require('./users/routes');
const axios = require("axios")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('You are connected with the database!');
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: "operação executada com sucesso",
    user: {
      name,
      email,
    },
  });
});

app.use("/api/v1/users", userRoutes);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
