const mongoose = require('mongoose');
require('dotenv').config();
const dbVillains = require('./db-villains').dbVillains;

const deleteVillainsHandler = async mess => {
    dbVillains
    return ({
        status: 200,
        body: JSON.stringify("ok")
    })
};

module.exports = {
    deleteVillainsHandler
};
