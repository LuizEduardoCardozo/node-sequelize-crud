const Sequelize = require('sequelize');
const dbConfig = requrie('./config/database');

const user = require('../model/Users');

const connection = Sequelize(dbConfig);

user.init(connection);

module.exports = connection

