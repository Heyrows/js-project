const mongoose = require('mongoose');
require('dotenv').config();
const dbVillains = require('./db-villains').dbVillains;


const getVillains = () => dbVillains.find({isTargeted: false}).exec();


const getTargetHandler = async msg => {
	const body = JSON.parse(msg.body);
	const listOfAllVillains =await getVillains();
	const listOfTargets = listOfAllVillains.find(villain => villain.x === body.x && villain.y === body.y);

	return ({
		status: 200,
		body: JSON.stringify(listOfTargets)
	})
};

module.exports = {
	getTargetHandler
};