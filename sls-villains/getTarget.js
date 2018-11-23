const mongoose = require('mongoose');
require('dotenv').config();
const dbVillains = require('./db-villains').dbVillains;

const getTargetHandler = async msg => {
    const body = JSON.parse(msg.body);

    return ({
        status: 200,
        body: JSON.stringify("x: " + body['x'] + ", y: " + body['y'])
    })
};

module.exports = {
    getTargetHandler
};