const DbHero = require('./db-heroes');

const createHeroHandler = async mess => {
  const body = JSON.parse(mess.body);
  let result = 'Something Went Wrong';
  const findAllHeroes = await DbHero.find({name: body.name}).exec();
  if (findAllHeroes.length > 0) {
    result = 'Hero already exist !';
  } else {
    (new DbHero(body)).save();
    result = body.name + ' created successfully !';
  }

  return ({
    status: 200,
    body: JSON.stringify(result)
  });
};

module.exports = {
  createHeroHandler
};
