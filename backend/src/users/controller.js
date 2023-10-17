const pool = require('./database.js');
const queries = require('./queries.js');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (errors, result) => {
        if (errors) throw errors;
        res.status(200).json(result.rows);
    });
};

module.exports = {
    getUsers,
};
