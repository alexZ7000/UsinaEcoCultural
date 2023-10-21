const getUsers = "SELECT * FROM login_info";
const getUsersById = "SELECT * FROM login_info WHERE user_id = $1";
const checkEmailExists = "SELECT s FROM login_info s WHERE s.email = $1";

module.exports = {
    getUsers,
    getUsersById,
    checkEmailExists,
};