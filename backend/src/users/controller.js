const pool = require('./database.js');

const getUsers = (req, res) => {
    pool.query("SELECT * FROM login_info", (errors, result) => {
        if (errors) throw errors;
        res.status(200).json(result.rows);
    });
};

module.exports = {
    getUsers,
};
