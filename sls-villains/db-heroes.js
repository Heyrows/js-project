const mongoose = require('mongoose');

const mongoDB = process.env.DB || 'mongodb://192.168.99.100:27017/db-HeroesAndVillains';
const db = mongoose.createConnection(mongoDB);

const Schema = mongoose.Schema;

const heroesSchema = new Schema({nom: String, x: Number, y: Number});

const dbHeroes = db.model('heroes', heroesSchema);

module.exports = {dbHeroes};
