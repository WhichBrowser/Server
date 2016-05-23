var Os = require ('../src/Os');
var Version = require ('../src/Version');
var assert = require('assert');

describe('Os', function() {
    describe('name = OS X, alias = Mac OS X, version = [ value = 10.5.2, details = 2 ]', function() {
        var result = new Os({
            name: "OS X",
            alias: "Mac OS X",
            version: new Version({
                value: "10.5.2",
                details: 2
            })
        });

        describe('#toString()', function () {
            it('should be equal to "Mac OS X 10.5"', function () {
                assert.equal("Mac OS X 10.5", result.toString());
            });
        });
    });

    describe('name = OS X, version = [ value = 10.11.4, nickname = El Capitan, details = 2 ]', function() {
        var result = new Os({
            name: "OS X",
            version: new Version({
                value: "10.11.4",
                nickname: "El Capitan",
                details: 2
            })
        });

        describe('#toString()', function () {
            it('should be equal to "OS X El Capitan 10.11"', function () {
                assert.equal("OS X El Capitan 10.11", result.toString());
            });
        });
    });

    describe('name = Windows, version = [ value = 5.1, alias = XP, details = 2 ]', function() {
        var result = new Os({
            name: "Windows",
            version: new Version({
                value: "5.1",
                alias: "XP",
                details: 2
            })
        });

        describe('#toString()', function () {
            it('should be equal to "Windows XP"', function () {
                assert.equal("Windows XP", result.toString());
            });
        });
    });

    describe('name = webOS, hidden = true ]', function() {
        var result = new Os({
            name: "webOS",
            hidden: true
        });

        describe('#toString()', function () {
            it('should be equal to ""', function () {
                assert.equal("", result.toString());
            });
        });
    });
});
