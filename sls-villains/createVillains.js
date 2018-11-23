const mongoose = require('mongoose');
require('dotenv').config();
const {dbVillains} = require('./db-villains');

const createVillainsHandler = async mess => {
    const body = JSON.parse(mess.body);
    (new dbVillains(body)).save();
    return ({
        status: 200,
        body: JSON.stringify("Villains created successfully !")
    })
};

module.exports = {
    createVillainsHandler
};
