require('dotenv').config();
const dbHeroes = require('./db-heroes').dbHeroes;

const updateHeroHandler = async mess => {
	const body = JSON.parse(mess.body);
	await dbHeroes.update(
		{name: body.name},
		{
			name: body.name,
			x: body.x,
			y: body.y
		}
	);

	return ({
		status: 200,
		body: JSON.stringify(body.name + " updated successfully !")
	})
};

module.exports = {
	updateHeroHandler
};