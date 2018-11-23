const mongoose = require('mongoose');
require('dotenv').config();
const dbVillains = require('./db-villains').dbVillains;


const getTargets = () => dbVillains.find({}).exec();


const getTargetHandler = async msg => {
    const body = JSON.parse(msg.body);

    const mapTargets = getTargets.map( villain => {
        // delete the details if villains coordinates are equal to heroes coordinates
        if ( villain.x === body['x'])
            if ( villain.y === body['y'])
                const details = { "name": villain.name }


    });

    return ({
        status: 200,
        body: JSON.stringify("x: " + body['x'] + ", y: " + body['y'])
    })
};

module.exports = {
    getTargetHandler
};