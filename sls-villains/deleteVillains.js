const mongoose = require('mongoose');
require('dotenv').config();
const dbVillains = require('./db-villains').dbVillains;

const deleteVillainsHandler = async mess => {
    const body = JSON.parse(mess.body);
    dbVillains.deleteOne({ name: body['name']}).exec();

    return ({
        status: 200,
        body: JSON.stringify("Villains deleted successfully !")
    })
};

module.exports = {
    deleteVillainsHandler
};
