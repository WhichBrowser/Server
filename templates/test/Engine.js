var Engine = require ('../src/Engine');
var Version = require ('../src/Version');
var assert = require('assert');

describe('Engine', function() {
    describe('name = Blink', function() {
        var result = new Engine({
            name: "Blink"
        });

        describe('#toString()', function () {
            it('should be equal to "Blink"', function () {
                assert.equal("Blink", result.toString());
            });
        });
    });

    describe('name = Webkit, version = [ value = 601.5.13 ]', function() {
        var result = new Engine({
            name: "Webkit",
            version: new Version({
                value: "601.5.13"
            })
        });

        describe('#toString()', function () {
            it('should be equal to "Webkit"', function () {
                assert.equal("Webkit", result.toString());
            });
        });
    });
});
