var Using = function() { this.initialize.apply(this, Array.prototype.slice.call(arguments)); };
Using.prototype = {
    initialize: function(v) {
        this.name = v.name || null;
        this.version = v.version || null;
    },

    toJSON: function() {
        return {
            name:       this.name,
            version:    (this.version) ? this.version.toJSON() : null,
        };
    },

    toString: function() {
        return (this.name ? this.name + (this.version && !this.version.hidden ? ' ' + this.version.toString() : '') : '');
    }
};

module.exports = Using;
