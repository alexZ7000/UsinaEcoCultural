const crypto = require("crypto");

const encryptPassword = () => {
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    const senha = "senhaMuitoForte123";
    let encrypted = cipher.update(senha, "utf8", "hex");
    encrypted += cipher.final("hex");
    return {
        encrypted,
        key,
        iv
    };
};

const decryptPassword = (encryptedPassword, key, iv) => {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

const { encrypted, key, iv } = encryptPassword();
const decryptedPassword = decryptPassword(encrypted, key, iv);

console.log('Senha Criptografada:', encrypted);
console.log('Senha Descriptografada:', decryptedPassword);

module.exports = {
    encryptPassword,
    decryptPassword
};
