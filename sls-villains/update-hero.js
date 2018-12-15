const dbHeroes = require('./db-heroes');

const updateHeroHandler = async mess => {
  const body = JSON.parse(mess.body);
  console.log(body);
  await dbHeroes.update(
    {name: body.name},
    {
      name: body.name,
      x: body.x,
      y: body.y,
      target: body.target
    }
  );

  return ({
    status: 200,
    body: JSON.stringify(body.name + ' updated successfully !')
  });
};

module.exports = {
  updateHeroHandler
};
