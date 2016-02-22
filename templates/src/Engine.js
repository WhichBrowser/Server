var Engine = function() { this.initialize.apply(this, Array.prototype.slice.call(arguments)); };
Engine.prototype = {
    initialize: function(v) {
        this.name = v.name || null;
        this.alias = v.alias || null;
        this.version = v.version || null;
    },

    toJSON: function() {
        return {
            name:       this.name,
            version:    (this.version) ? this.version.toJSON() : null
        };
    },

    toString: function() {
        var name = this.alias ? this.alias : (this.name ? this.name : '');
        return name;
    }
};

module.exports = Engine;
