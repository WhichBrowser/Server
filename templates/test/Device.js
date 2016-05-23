var Device = require ('../src/Device');
var assert = require('assert');

describe('Device', function() {
    describe('model = SM-G930, identified = false', function() {
        var result = new Device({
            model: "SM-G930",
            identified: false
        });

        describe('#toString()', function () {
            it('should be equal to "unrecognized device (SM-G930)"', function () {
                assert.equal("unrecognized device (SM-G930)", result.toString());
            });
        });
    });

    describe('model = SM-G930, identified = true', function() {
        var result = new Device({
            model: "SM-G930",
            identified: true
        });

        describe('#toString()', function () {
            it('should be equal to "SM-G930"', function () {
                assert.equal("SM-G930", result.toString());
            });
        });
    });

    describe('manufacturer = Samsung, model = Galaxy S7, identified = true', function() {
        var result = new Device({
            manufacturer: "Samsung",
            model: "Galaxy S7",
            identified: true
        });

        describe('#toString()', function () {
            it('should be equal to "Samsung Galaxy S7"', function () {
                assert.equal("Samsung Galaxy S7", result.toString());
            });
        });
    });

    describe('manufacturer = Apple, model = AppleTV, identified = true', function() {
        var result = new Device({
            manufacturer: "Apple",
            model: "AppleTV",
            identified: true
        });

        describe('#toString()', function () {
            it('should be equal to "AppleTV"', function () {
                assert.equal("AppleTV", result.toString());
            });
        });
    });

    describe('manufacturer = Sony, model = Bravia 2015, series = SmartTV identified = true', function() {
        var result = new Device({
            manufacturer: "Sony",
            model: "Bravia 2015",
            series: "SmartTV",
            identified: true
        });

        describe('#toString()', function () {
            it('should be equal to "Sony Bravia 2015 SmartTV"', function () {
                assert.equal("Sony Bravia 2015 SmartTV", result.toString());
            });
        });
    });

    describe('manufacturer = Apple, model = Macintosh, hidden = true', function() {
        var result = new Device({
            manufacturer: "Apple",
            model: "Macintosh",
            hidden: true
        });

        describe('#toString()', function () {
            it('should be equal to ""', function () {
                assert.equal("", result.toString());
            });
        });
    });

});
