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

const addUser = (req, res) => {
    const { username, email, password} = req.body;
    pool.query(queries.checkEmailExists, [email], (errors, result) => {
        if (result.rows.length) res.send('Email already exists in the database!');
    });

    pool.query(queries.createUser, [username, email, password], (errors, result) => {
        if (errors) throw errors;
        res.status(201).send('User added successfully!');
    });
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteUser, [id], (errors, result) => {
        const noUserFound = !result.rowCount;
        if (noUserFound) res.send("User does not exits in the database!");
        res.status(200).send('User deleted successfully!');
    });
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { username, email, password } = req.body;
    pool.query(queries.getUsersById, [id], (errors, result) => {
        const noUserFound = !result.rowCount;
        if (noUserFound) res.send("User does not exits in the database!");
    });

    pool.query(queries.updateUser, [username, email, password, id], (errors, result) => {
        if (errors) throw errors;
        res.status(200).send('User updated successfully!');
    });
}

module.exports = {
    getUsers,
    getUsersById,
    addUser,
    deleteUser,
    updateUser,
};
