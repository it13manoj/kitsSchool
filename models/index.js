const sequelize = require("../parakshDB/database");

const User = require("./User");
const Home = require("./home/home");
const ContactUs = require("./contact")

/* ==============================
   Export Models
============================== */

module.exports = {
    sequelize,
    User,
    Home,
    ContactUs

};
