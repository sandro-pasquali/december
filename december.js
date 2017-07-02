'use strict';

let december = require('wikijs').default().page('December');

module.exports = {
	data : () => december.then(page => page.content()),
	images : () => december.then(page => page.images())
};