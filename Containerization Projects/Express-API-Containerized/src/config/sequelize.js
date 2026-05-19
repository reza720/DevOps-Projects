const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    'My_Auth_API',
    'root',
    'root',
    {
        host: "localhost",
        dialect: "mysql",
        logging: false 
    }
);

module.exports = sequelize;