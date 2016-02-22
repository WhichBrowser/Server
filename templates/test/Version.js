var Version = require ('../src/Version');
var assert = require('assert');

describe('Version', function() {
    describe('value = 10.11.4, nickname = El Capitan, details = 2', function() {
        var result = new Version({
            value: "10.11.4",
            nickname: "El Capitan",
            details: 2
        });

        describe('#is(x)', function () {
            it('should be true for 10', function () {
                assert.equal(true, result.is(10));
            });

            it('should be true for 10.11', function () {
                assert.equal(true, result.is('10.11'));
            });

            it('should be true for 10.11.4', function () {
                assert.equal(true, result.is('10.11.4'));
            });

            it('should be false for 10.11.3', function () {
                assert.equal(false, result.is('10.11.3'));
            });

            it('should be false for 10.10', function () {
                assert.equal(false, result.is('10.10'));
            });

            it('should be false for 11', function () {
                assert.equal(false, result.is(11));
            });
        });

        describe('#is(">", x)', function () {
            it('should be false for 10', function () {
                assert.equal(false, result.is('>', 10));
            });

            it('should be false for 10.11', function () {
                assert.equal(false, result.is('>', '10.11'));
            });

            it('should be true for 10.11.0', function () {
                assert.equal(true, result.is('>', '10.11.0'));
            });

            it('should be true for 10.10', function () {
                assert.equal(true, result.is('>', '10.10'));
            });
        });

        describe('#is("<", x)', function () {
            it('should be false for 10', function () {
                assert.equal(false, result.is('<', 10));
            });

            it('should be false for 10.11', function () {
                assert.equal(false, result.is('<', '10.11'));
            });

            it('should be true for 10.11.8', function () {
                assert.equal(true, result.is('<', '10.11.8'));
            });

            it('should be true for 10.12', function () {
                assert.equal(true, result.is('<', '10.12'));
            });
        });

        describe('#valueOf', function () {
            it('should be a number', function () {
                assert.equal('number', typeof result.valueOf());
            });

            it('should be 10.00110004', function () {
                assert.equal(10.00110004, result.valueOf());
            });
        });

        describe('#toString()', function () {
            it('should be equal to "El Capitan 10.11"', function () {
                assert.equal("El Capitan 10.11", result.toString());
            });
        });

        describe('#JSON.stringify()', function () {
            it('should be equal to {...}', function () {
                assert.equal('{"value":"El Capitan 10.11","details":2,"hidden":null,"original":"10.11.4","major":"10","minor":"11","build":null,"revision":"4","nickname":"El Capitan"}', JSON.stringify(result));
            });
        });
    });

    describe('value = 5.1, alias = XP, details = 2', function() {
        var result = new Version({
            value: "5.1",
            alias: "XP",
            details: 2
        });

        describe('#toString()', function () {
            it('should be equal to "XP"', function () {
                assert.equal("XP", result.toString());
            });
        });

        describe('#JSON.stringify()', function () {
            it('should be equal to {...}', function () {
                assert.equal('{"value":"XP","details":2,"hidden":null,"original":"5.1","major":"5","minor":"1","build":null,"revision":null,"alias":"XP"}', JSON.stringify(result));
            });
        });
    });
});
