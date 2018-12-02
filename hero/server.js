const requestPromise = require('request-promise');
const PF = require('pathfinding');

const slsUri = 'http://127.0.0.1:3000';
const mapUri = 'http://127.0.0.1:3100';
const finder = new PF.BiDijkstraFinder();
let grid = new PF.Grid();
/* TODO
* generer des coordonnées de départ et verifié sur la map si le nodes (hero.x, hero.y) est walkable.
* pour la map:
*   refresh les positions(interval avec getall)
*   affichage des resultats
* */
const hero = {
	name: 'Thor',
	x: 0,
	y: 0
};

const target = {
	name: '',
	x: 0,
	y: 0,
	isTargeted: true
};

let pathToTarget = [];
let indexOnPath = 1;

const getTarget = () => {
	const getTargetURI = '/getTarget';

	requestPromise({
		method: 'POST',
		uri: slsUri + getTargetURI,
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			name: hero.name,
			x: hero.x,
			y: hero.y
		},
		json: true
	}).then(body => {
		if (body) {
			target.name = body.name;
			target.x = body.x;
			target.y = body.y;
			instantiatePathToTarget();
			updateTarget();
		}
	});
};

const updateTarget = () => {
	const updateVillainURI = '/updateVillain';

	requestPromise({
		method: 'POST',
		uri: slsUri + updateVillainURI,
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			name: target.name,
			x: target.x,
			y: target.y,
			isTargeted: target.isTargeted
		},
		json: true
	});
};

const killTarget = () => {
	const killTargetURI = '/deleteVillain';

	requestPromise({
		method: 'POST',
		uri: slsUri + killTargetURI,
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			name: target.name
		},
		json: true
	});
};

const updatePosition = () => {
	const updateHeroURI = '/updateHero';
	requestPromise({
		method: 'POST',
		uri: slsUri + updateHeroURI,
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			name: hero.name,
			x: hero.x,
			y: hero.y
		},
		json: true
	});
};

const getMap = () => {
	const getMapURI = '/getMap';

	requestPromise({
		method: 'GET',
		uri: mapUri + getMapURI,
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(resp => {
		const body = JSON.parse(resp);
		grid.width = body.width;
		grid.height = body.height;
		grid.nodes = body.nodes;
	});
};

const move = () => {
	if (target.name === '') {
		getTarget();
	} else {
		[hero.x, hero.y] = pathToTarget[indexOnPath];
		indexOnPath += 1;
		updatePosition();

		if (indexOnPath === pathToTarget.length) {
			killTarget();
			target.name = '';
			indexOnPath = 1;
		}
	}
};

const instantiatePathToTarget = () => {
	const gridBackup = grid.clone();
	pathToTarget = finder.findPath(hero.x, hero.y, target.x, target.y, grid);
	grid = gridBackup;
};

getMap();
getTarget();

setTimeout(() => {
	setInterval(() => {
		move();
		console.log(hero);
		console.log(target);
		console.log(indexOnPath);
		console.log(pathToTarget);
	}, 5000);
}, 5000);
