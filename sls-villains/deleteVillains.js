const mongoose = require('mongoose');
require('dotenv').config();
const dbVillains = require('./db-villains').dbVillains;

const villainsHandler = async () => ({
    status: 200,
    body: JSON.stringify(await villainsGet())
});

module.exports = {
    villainsHandler
};
