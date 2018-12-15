const dbVillains = require('./db-villains');

const getVillains = () => dbVillains.find({isTargeted: false}).exec();

const getTargetHandler = async msg => {
  const body = JSON.parse(msg.body);
  const listOfAllVillains = await getVillains();
  const listOfDistance = listOfAllVillains.map(villain =>
    Math.abs(villain.x - body.x) + Math.abs(villain.y - body.y)
  );
  const minDistance = Math.min(...listOfDistance);
  const listOfClosestVillain = listOfAllVillains.filter(villain =>
    (Math.abs(villain.x - body.x) +
        Math.abs(villain.y - body.y)) === minDistance
  );

  return ({
    status: 200,
    body: JSON.stringify(listOfClosestVillain[0])
  });
};

module.exports = {
  getTargetHandler
};
