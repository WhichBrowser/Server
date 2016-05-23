var Os = function() { this.initialize.apply(this, Array.prototype.slice.call(arguments)); };
Os.prototype = {
    initialize: function(v) {
        this.name = v.name || null;
        this.family = v.family || null;
        this.alias = v.alias || null;
        this.version = v.version || null;
        
        this.hidden = v.hidden || false;
    },

    toJSON: function() {
        return {
            name:       this.name,
            family:     this.family,
            alias:      this.alias,
            version:    (this.version) ? this.version.toJSON() : null,
            hidden:     this.hidden
        };
    },

    toString: function() {
        if (this.hidden) return '';
        
        var name = this.alias ? this.alias : (this.name ? this.name : '');
        return (name ? name + (this.version && !this.version.hidden ? ' ' + this.version.toString() : '') : '');
    }
};

module.exports = Os;
