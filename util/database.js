const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '(GTa8?n6vpn73Hg4gdTc', {
    dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;