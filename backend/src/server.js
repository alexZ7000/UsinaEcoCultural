const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use("/api/v1/users", routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
