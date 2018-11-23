const mongoose = require('mongoose');
require('dotenv').config();
const dbVillains = require('./db-villains').dbVillains;

const deleteVillainsHandler = async mess => {
    dbVillains.insert(mess.body);
};

module.exports = {
    villainsHandler
};
