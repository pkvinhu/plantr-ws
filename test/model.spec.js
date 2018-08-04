const expect = require('chai').expect;
const models = require('./models');
const seed = require('./seed');

describe('gardener', () => {
	beforeEach(()=> {
		return db.syncSeed()
	});
	it('there are three users', () => {
		const allGardeners = Gardeners.findAll();
		return allGardeners;
		expect(allGardeners.length).to.equal(3);
	})
})

