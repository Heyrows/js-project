const dbVillains = require('./db-villains');

const villainsGet = () => dbVillains.find({}).exec();

const findAllVillainsHandler = async () => ({
	status: 200,
	body: JSON.stringify(await villainsGet())
});

module.exports = {
	findAllVillainsHandler
};
