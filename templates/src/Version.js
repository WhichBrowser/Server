var Version = function() { this.initialize.apply(this, Array.prototype.slice.call(arguments)); };
Version.prototype = {
    initialize: function(v) {
        this.original = v.value || null;
        this.alias = v.alias || null;
        this.nickname = v.nickname || null;
        this.details = v.details || null;
        this.hidden = v.hidden || null;
        this.builds = typeof v.builds != 'undefined' ? v.builds : true;

        this.major = 0;
        this.minor = null;
        this.revision = null;
        this.build = null;
        this.type = '';

        var match = /([0-9]+)(?:\.([0-9]+))?(?:\.([0-9]+))?(?:\.([0-9]+))?(?:([ab])([0-9]+))?/.exec(this.original);
        if (match) {
            if (typeof match[1] != 'undefined') {
                this.major = match[1];
            }

            if (typeof match[2] != 'undefined') {
                this.minor = match[2];
            }

            if (typeof match[3] != 'undefined') {
                this.revision = match[3];
            }

            if (typeof match[4] != 'undefined') {
                this.build = match[4];
            }

            if (typeof match[5] != 'undefined') {
                switch(match[5]) {
                    case 'a':   this.type = 'alpha'; break;
                    case 'b':   this.type = 'beta'; break;
                }

                if (typeof match[6] != 'undefined') {
                    this.build = match[6];
                }
            }
        }
    },

    is: function(v) {
        var valid = false;

        if (arguments.length > 0) {
            var operator = '=';
            var compare = null;

            if (arguments.length == 1) {
                compare = new Version({ value: arguments[0] });
            }

            if (arguments.length >= 2) {
                operator = arguments[0];
                compare = new Version({ value: arguments[1] });
            }

            if (compare) {
                var v1 = '', v2 = '';

                if (compare.major && this.major) {
                    v1 += this.major;
                    v2 += compare.major;

                    if (compare.minor && this.minor) {
                        v1 += '.' + ('0000' + this.minor).slice(-4);
                        v2 += '.' + ('0000' + compare.minor).slice(-4);

                        if (compare.revision && this.revision) {
                            v1 += ('0000' + this.revision).slice(-4);
                            v2 += ('0000' + compare.revision).slice(-4);
                        }
                    }
                }

                v1 = parseFloat(v1);
                v2 = parseFloat(v2);

                switch (operator) {
                    case '<':   valid = v1 < v2; break;
                    case '<=':  valid = v1 <= v2; break;
                    case '=':   valid = v1 == v2; break;
                    case '>':   valid = v1 > v2; break;
                    case '>=':  valid = v1 >= v2; break;
                }
            }

            return valid;
        }

        return false;
    },

    valueOf: function() {
        return parseFloat('' + this.major + '.' + ('0000' + this.minor).slice(-4) + ('0000' + this.revision).slice(-4));
    },

    toJSON: function() {
        var o = {
            value:      this.toString(),
            details:    this.details,
            hidden:     this.hidden,
            original:   this.original,
            major:      this.major,
            minor:      this.minor,
            build:      this.build,
            revision:   this.revision
        };

        if (this.type) o.type = this.type;
        if (this.alias) o.alias = this.alias;
        if (this.nickname) o.nickname = this.nickname;

        return o;
    },

    toString: function() {
        if (this.alias)
            return this.alias;

        var version = '';

        if (this.nickname) {
            version += this.nickname + ' ';
        }

        if (this.major || this.minor) {
            var v = [];
            v.push(this.major);
            if (this.minor !== '' && this.minor !== null) v.push(this.minor);
            if (this.revision !== '' && this.revision !== null) v.push(this.revision);
            if (this.type === '' && this.build) v.push(this.build);
            if (this.details < 0) v.splice(this.details, 0 - this.details);
            if (this.details > 0) v.splice(this.details, v.length - this.details);

            if (!this.builds) {
                for (var i = 0; i < v.length; i++) {
                    if (v[i] > 999) {
                        v.splice(i, 1);
                        i--;
                    }
                }
            }

            version += v.join('.');

            if (this.type !== '') version += this.type[0] + (this.build ? this.build : '');
        }

        return version;
    }
};

module.exports = Version;
