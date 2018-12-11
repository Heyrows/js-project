const requestPromise = require('request-promise');
const express = require('express');
const PF = require('pathfinding');

const slsUri = process.env.SLS || 'http://127.0.0.1:3000';
const gridHeight = 51;
const gridWidth = 51;
const grid = new PF.Grid(gridWidth, gridHeight);
let listOfAllVillains = [];
const listOfVillainNames = ['Batman', 'Robin', 'Mr Penguin', 'Zoom', 'Captain Connard', 'La Mouette',
								'Hanouna', 'Lepen', 'Le Sida', 'Darren Sugg'];

/* Desactiver des parties de la map ex: obstacle dans la ville
grid.setWalkableAt(0, 1, false); */

const app = express();

app.get('/getMap', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.status(200)
		.send(JSON.stringify(grid));
});

const createVillain = (name) => {
	const {x,y} = generateCoordinate();
	const createVillainURI = '/createVillain';
	requestPromise({
		method: 'POST',
		uri: slsUri + createVillainURI,
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			name: name,
			x: x,
			y: y,
			isTargeted: false
		},
		json: true
	});
};

const getAllVillains = () => {
	const getVillainURI = '/getAllVillains';
	requestPromise({
		method: 'GET',
		uri: slsUri + getVillainURI,
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => {
		if(res) {
			listOfAllVillains = JSON.parse(res);
		}
		verifyVillains();
	});
};

const verifyVillains = () => {
	if (listOfAllVillains.length > 0){
		const listOfExistingVillainNames = listOfAllVillains.map(villain => villain.name);
		const listOfNotExistingVillain = listOfVillainNames.filter(name => !(listOfExistingVillainNames.includes(name)));
		listOfNotExistingVillain.forEach(name => createVillain(name));
	} else {
		listOfVillainNames.forEach(name => createVillain(name));
	}
};

const generateCoordinate = () => {
	let x = Math.floor(Math.random() * gridWidth);
	let y = Math.floor(Math.random() * gridHeight);
	while(!grid.nodes[y][x].walkable){
		x = Math.floor(Math.random() * gridWidth);
		y = Math.floor(Math.random() * gridHeight);
	}
	return {x, y};
};

setTimeout( () => {
	setInterval( () => {
		getAllVillains();
	}, 10000);
}, 20000);

app.listen( process.env.PORT || 3100);
