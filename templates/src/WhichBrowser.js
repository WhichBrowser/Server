var Browser = require('./Browser');
var Engine = require('./Engine');
var Os = require('./Os');
var Device = require('./Device');
var Family = require('./Family');
var Using = require('./Using');
var Version = require('./Version');


var WhichBrowser = function() { this.initialize.apply(this, arguments); };
WhichBrowser.prototype = {
    initialize: function(options) {
        this.options = {
        };

        _='';
        this.browser = new Browser({ using: new Using({}) });
        this.engine = new Engine({});
        this.os = new Os({ family: new Family({}), version: new Version({}) });
        this.device = new Device({});
        this.camouflage = false;
        this.features = [];
        _='';
    },

    a: function(s) {
        return (/^[aeiou]/i.test(s) ? 'an ' : 'a ') + s;
    },

    isX: function() {
        var valid = true;
        var x = arguments[0];

        if (arguments.length >= 2) {
            valid = valid && this[x].name == arguments[1];
        }

        if (arguments.length >= 4 && this[x].version && valid) {
            valid = valid && this[x].version.is(arguments[2], arguments[3]);
        }

        return valid;
    },

    isBrowser: function() { var a = Array.prototype.slice.call(arguments); a.unshift('browser'); return this.isX.apply(this, a); },
    isEngine: function() { var a = Array.prototype.slice.call(arguments); a.unshift('engine'); return this.isX.apply(this, a); },
    isOs: function() { var a = Array.prototype.slice.call(arguments); a.unshift('os'); return this.isX.apply(this, a); },

    isDevice: function(d) {
        return this.device.series == d || this.device.model == d;
    },

    isType: function() {
        var valid = false;
        for (var a = 0; a < arguments.length; a++) valid = valid || arguments[a] == this.device.type;
        return valid;
    },

    toJSON: function() {
        return {
            browser:    this.browser.toJSON(),
            os:         this.os.toJSON(),
            engine:     this.engine.toJSON(),
            device:     this.device.toJSON()
        };
    },

    toString: function() {
        var prefix = this.camouflage ? 'an unknown browser that imitates ' : '';
        var browser = this.browser.toString();
        var os = this.os.toString();
        var engine = this.engine.toString();
        var device = this.device.toString();

        if (!device && !os && this.device.type == 'television') device = 'television';
        if (!device && this.device.type == 'emulator') device = 'emulator';

        if (browser && os && device) return prefix + browser + ' on ' + this.a(device) + ' running ' + os;
        if (browser && !os && device) return prefix + browser + ' on ' + this.a(device);
        if (browser && os && !device) return prefix + browser + ' on ' + os;
        if (!browser && os && device) return prefix + this.a(device) + ' running ' + os;
        if (browser && !os && !device) return prefix + browser;
        if (!browser && !os && device) return prefix + this.a(device);
        if (this.device.type == 'desktop' && os && engine !== '' && !device) return 'an unknown browser based on ' + engine + ' running on ' + os;
        if (this.browser.stock && os && !device) return os;
        if (this.browser.stock && engine !== '' && !device) return 'an unknown browser based on ' + engine;

        return 'an unknown browser';
    }
};

module.exports = WhichBrowser;
