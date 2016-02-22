var WhichBrowser = require ('../src/WhichBrowser');
var assert = require('assert');

describe('WhichBrowser', function() {
  var result = new WhichBrowser();

  describe('#browser', function () {
    it('should be defined', function () {
      assert.equal(true, typeof result.browser !== 'undefined');
    });
  });

  describe('#engine', function () {
    it('should be defined', function () {
      assert.equal(true, typeof result.engine !== 'undefined');
    });
  });

  describe('#os', function () {
    it('should be defined', function () {
      assert.equal(true, typeof result.os !== 'undefined');
    });
  });

  describe('#device', function () {
    it('should be defined', function () {
      assert.equal(true, typeof result.device !== 'undefined');
    });
  });

  describe('#camouflage', function () {
    it('should be defined', function () {
      assert.equal(true, typeof result.camouflage !== 'undefined');
    });
  });

  describe('#features', function () {
    it('should be defined', function () {
      assert.equal(true, typeof result.features !== 'undefined');
    });
  });
});
