var Browser = function() { this.initialize.apply(this, Array.prototype.slice.call(arguments)); };
Browser.prototype = {
    initialize: function(v) {
        this.name = v.name || null;
        this.alias = v.alias || null;
        this.version = v.version || null;
        this.using = v.using || null;
        this.family = v.family || null;

        this.stock = v.stock || false;
        this.channel = v.channel || null;
        this.mode = v.mode || null;
        this.hidden = v.hidden || false;
    },

    toJSON: function() {
        return {
            name:       this.name,
            alias:      this.alias,
            version:    (this.version) ? this.version.toJSON() : null,
            stock:      this.stock,
            channel:    this.channel,
            mode:       this.mode,
            hidden:     this.hidden
        };
    },

    toString: function() {
        if (this.hidden) return '';

        var name = this.alias ? this.alias : (this.name ? this.name : '');
        if (name !== '') return (name ? name + (this.channel ? ' ' + this.channel : '') + (this.version && !this.version.hidden ? ' ' + this.version.toString() : '') : '');
        if (this.using) return this.using.toString();
        return '';
    }
};

module.exports = Browser;
