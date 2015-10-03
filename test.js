import test from 'ava';
import quarter from './';

test('should get the quarter of the year', t => {
	t.is(quarter(new Date('January 1, 2000')), 1);
	t.is(quarter(new Date('February 1, 2000')), 1);
	t.is(quarter(new Date('March 1, 2000')), 1);

	t.is(quarter(new Date('April 1, 2015')), 2);
	t.is(quarter(new Date('May 1, 2015')), 2);
	t.is(quarter(new Date('June 1, 2015')), 2);

	t.is(quarter(new Date('July 20, 1950')), 3);
	t.is(quarter(new Date('August 20, 1950')), 3);
	t.is(quarter(new Date('September 20, 1950')), 3);

	t.is(quarter(new Date('October 3, 2050')), 4);
	t.is(quarter(new Date('November 3, 2050')), 4);
	t.is(quarter(new Date('December 3, 2050')), 4);

	t.end();
});

test('should make the `date` argument default to the current time', t => {
	const q = quarter();
	t.true(q === 1 || q === 2 || q === 3 || q === 4);

	t.end();
});
