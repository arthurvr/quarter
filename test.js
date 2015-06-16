'use strict';
var assert = require('assert');
var quarter = require('./');

it('should get the quarter of the year', function () {
	assert.equal(quarter(new Date('January 1, 2000')), 1);
	assert.equal(quarter(new Date('February 1, 2000')), 1);
	assert.equal(quarter(new Date('March 1, 2000')), 1);

	assert.equal(quarter(new Date('April 1, 2015')), 2);
	assert.equal(quarter(new Date('May 1, 2015')), 2);
	assert.equal(quarter(new Date('June 1, 2015')), 2);

	assert.equal(quarter(new Date('July 20, 1950')), 3);
	assert.equal(quarter(new Date('August 20, 1950')), 3);
	assert.equal(quarter(new Date('September 20, 1950')), 3);

	assert.equal(quarter(new Date('October 3, 2050')), 4);
	assert.equal(quarter(new Date('November 3, 2050')), 4);
	assert.equal(quarter(new Date('December 3, 2050')), 4);
});

it('should make the `date` argument default to the current time', function () {
	var q = quarter();
	assert(q === 1 || q === 2 || q === 3 || q === 4);
});
