const dbHeroes = require('./db-heroes');

const heroesGet = () => dbHeroes.find({}).exec();

const findAllHeroesHandler = async () => ({
  status: 200,
  body: JSON.stringify(await heroesGet())
});

module.exports = {
  findAllHeroesHandler
};
