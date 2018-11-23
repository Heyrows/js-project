const mongoose = require('mongoose');
require('dotenv').config();
const dbHeroes = require('./db-heroes').dbHeroes;

const getTargetHandler = async msg => ({
    status: 200,
    body: JSON.stringify(msg.body.x, msg.body.y)
});

module.exports = {
    getTargetHandler
};