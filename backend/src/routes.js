const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('using api route');
});

routes.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send(email + ' ' + password);
});

module.exports = routes;