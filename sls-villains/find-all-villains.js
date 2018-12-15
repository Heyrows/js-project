const mongoose = require('mongoose');
const dbVillains = require('./db-villains');

const villainsGet = () => dbVillains.find({}, () => {
  mongoose.disconnect(() => {});
}).exec();

const findAllVillainsHandler = async () => ({
  status: 200,
  body: JSON.stringify(await villainsGet())
});

module.exports = {
  findAllVillainsHandler
};
