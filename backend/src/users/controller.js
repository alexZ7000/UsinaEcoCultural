const pool = require('../database.js');
const queries = require('./queries.js');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (errors, result) => {
        if (errors) throw errors;
        res.status(200).json(result.rows);
    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (errors, result) => {
        if (errors) throw errors;
        res.status(200).json(result.rows);
    });
}

const createUser = (req, res) => {
    const { email} = req.body;
    pool.query(queries.checkEmailExists, [email], (errors, result) => {
        if (result.rows.length) res.send('Email already exists');
    });
}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
};
