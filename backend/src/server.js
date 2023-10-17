const express = require('express');
const userRoutes = require('./routes');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/v1/users", userRoutes);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
