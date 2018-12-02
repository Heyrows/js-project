const requestPromise = require('request-promise');
const express = require('express');
const PF = require('pathfinding');

const slsUri = 'http://127.0.0.1:3000';
let grid = new PF.Grid(6, 6);
/* Les positions des heros varie de 0 à width-1 et 0 à height-1 par rapport à la map*/
/* Desactiver des parties de la map ex: obstacle dans la ville
grid.setWalkableAt(0, 1, false); */

const app = express();

app.get('/getMap', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.status(200)
		.send(JSON.stringify(grid));
});

app.listen(3100);
