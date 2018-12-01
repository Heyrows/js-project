const requestPromise = require('request-promise');
const slsUri = 'http://127.0.0.1:3000';
const hero = {
	name: 'Thor',
	x: 0,
	y: 0
};

const target = {
	name: '',
	x: 0,
	y: 0,
	isTargeted: true,
};

// setInterval(() => {
// 	updatePosition();
// }, 3000);

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
		target.name = body.name;
		target.x = body.x;
		target.y = body.y;
		updateTarget();
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
	})
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
			y: hero.y,
		},
		json: true
	})
};
