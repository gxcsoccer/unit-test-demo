var should = require('chai').should(),
    lib = require('../lib/fn');

describe('module', function() {
    beforeEach(function() {
        console.log('Pre something');
    });
    describe('limit', function() {
        it('limit should success', function() {
            lib.limit(10).should.equal(10);
        });
    });
    afterEach(function() {
        console.log('Post something');
    });
});