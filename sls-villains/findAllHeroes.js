const mongoose = require('mongoose');
require('dotenv').config();
const dbHeroes = require('./db-heroes').dbHeroes;

const heroesGet = () => dbHeroes.find({}).exec();

const heroesHandler = async () => ({
    status: 200,
    body: JSON.stringify(await heroesGet())
});

module.exports = {
    heroesHandler
};
