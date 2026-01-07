const bcrypt = require('bcrypt');



exports.encrypted = async (password) => {
    try {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    } catch (err) {
        throw err;
    }
};


exports.decrypted = async (password, oldpassword) => {
    try {
        const result = await bcrypt.compare(password, oldpassword);
        return result; // true or false
    } catch (err) {
        throw err;
    }
};
