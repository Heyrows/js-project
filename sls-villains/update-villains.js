const dbVillains = require('./db-villains');

const updateVillainHandler = async mess => {
	const body = JSON.parse(mess.body);
	await dbVillains.update(
		{name: body.name},
		{
			name: body.name,
			x: body.x,
			y: body.y,
			isTargeted: body.isTargeted
		}
	);

	return ({
		status: 200,
		body: JSON.stringify(body.name + ' updated successfully !')
	});
};

module.exports = {
	updateVillainHandler
};
