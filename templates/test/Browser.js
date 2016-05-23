var Browser = require ('../src/Browser');
var Family = require ('../src/Family');
var Using = require ('../src/Using');
var Version = require ('../src/Version');
var assert = require('assert');

describe('Browser', function() {
    describe('name = Safari, version = [ value = 9.1 ]', function() {
        var result = new Browser({
            name: "Safari",
            version: new Version({
                value: "9.1"
            })
        });

        describe('#toString()', function () {
            it('should be equal to "Safari 9.1"', function () {
                assert.equal("Safari 9.1", result.toString());
            });
        });
    });

    describe('name = Opera, version = [ value = 35.0 ], family = []', function() {
        var result = new Browser({
            name: "Opera",
            version: new Version({
                value: "35.0.2066.68",
                details: 2
            }),
            family: new Family({
                name: "Chrome",
                version: new Version({
                    value: 48
                })
            })
        });

        describe('#toString()', function () {
            it('should be equal to "Opera 35.0"', function () {
                assert.equal("Opera 35.0", result.toString());
            });
        });
    });

    describe('using = [ name = Electron, version = [ value = 0.33.4 ] ]', function() {
        var result = new Browser({
            using: new Using({
                name: "Electron",
                version: new Version({
                    value: '0.33.4'
                })
            })
        });

        describe('#toString()', function () {
            it('should be equal to "Electron 0.33.4"', function () {
                assert.equal("Electron 0.33.4", result.toString());
            });
        });
    });

    describe('using = [ name = BlackBerry Browser, hidden = true ]', function() {
        var result = new Browser({
            name: "BlackBerry Browser",
            hidden: true
        });

        describe('#toString()', function () {
            it('should be equal to ""', function () {
                assert.equal("", result.toString());
            });
        });
    });});
