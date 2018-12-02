const mongoose = require('mongoose');

const mongoDB = process.env.DB || 'mongodb://192.168.99.100:27017/db-HeroesAndVillains';
const db = mongoose.createConnection(mongoDB);

const {Schema} = mongoose;

const villainsSchema = new Schema({name: String, x: Number, y: Number, isTargeted: Boolean});

const dbVillains = db.model('villains', villainsSchema);

module.exports = dbVillains;
