'use strict';

let december = require('../../december.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return december.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return december.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


