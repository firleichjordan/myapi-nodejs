const Sequelize = require('sequelize');
const db = require('../database/mysql');

var product = db.define('product',
{
    kode: Sequelize.INTEGER,
    nama: Sequelize.STRING,
    warna: Sequelize.STRING

},{
    freezeTableName: true,
    timestamps: false
});

product.removeAttribute('id');
module.exports = product;