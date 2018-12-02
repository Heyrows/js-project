const dbVillains = require('./db-villains');

const deleteVillainsHandler = async mess => {
	const body = JSON.parse(mess.body);
	await dbVillains.remove({name: body.name}).exec();

	return ({
		status: 200,
		body: JSON.stringify(body.name + ' deleted successfully !')
	});
};

module.exports = {
	deleteVillainsHandler
};
