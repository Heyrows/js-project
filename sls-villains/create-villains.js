const DbVillains = require('./db-villains');

const createVillainsHandler = async mess => {
	const body = JSON.parse(mess.body);
	let result = 'Something Went Wrong';
	const findAllVillains = await DbVillains.find({name: body.name}).exec();
	if (findAllVillains.length > 0) {
		result = 'Villain already exist !';
	} else {
		(new DbVillains(body)).save();
		result = body.name + ' created successfully !';
	}

	return ({
		status: 200,
		body: JSON.stringify(result)
	});
};

module.exports = {
	createVillainsHandler
};
