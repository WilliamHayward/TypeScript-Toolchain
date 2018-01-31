var assert = require('assert');
var Class1 = require('../build/Class1.js').Class1;
var Class2 = require('../build/Class2.js').Class2;
describe('Main', function() {
    describe('#getMessage()', function() {
        it('should return the value created with', function() {
            console.log(Class1);
            let a = new Class1('Message 1');
            assert.equal(a.getMessage(), 'Message 1');

            let b = new Class2('Message 2');
            assert.equal(b.getMessage(), 'Message 2');
        });
    });
});