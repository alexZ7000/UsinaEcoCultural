const getUsers = "SELECT * FROM login_info";
const getUsersById = "SELECT * FROM login_info WHERE user_id = $1";
const checkEmailExists = "SELECT s FROM login_info s WHERE s.email = $1";
const  createUser = "INSERT INTO login_info (username, email, password) VALUES ($1, $2, $3)";
const deleteUser = "DELETE FROM login_info WHERE user_id = $1";
const updateUser = "UPDATE login_info SET username = $1, email = $2, password = $3 WHERE user_id = $4";

module.exports = {
    getUsers,
    getUsersById,
    checkEmailExists,
    createUser,
    deleteUser,
    updateUser
};