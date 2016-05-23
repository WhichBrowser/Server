var Device = function() { this.initialize.apply(this, Array.prototype.slice.call(arguments)); };
Device.prototype = {
    initialize: function(v) {
        this.type = v.type || null;
        this.identified = v.identified || false;
        this.manufacturer = v.manufacturer || null;
        this.model = v.model || null;
        this.series = v.series || null;

        this.hidden = v.hidden || false;
    },

    toJSON: function() {
        return {
            type:           this.type,
            identified:     this.identified,
            manufacturer:   this.manufacturer,
            model:          this.model,
            series:         this.series,
            hidden:         this.hidden
        };
    },

    toString: function() {
        if (this.hidden) return '';

        if (this.identified) {
            var manufacturer = this.manufacturer || '';
            var model = ((this.model || '') + ' ' + (this.series || '')).trim();

            if (model.indexOf(manufacturer) === 0) {
                manufacturer = '';
            }

            return (manufacturer + ' ' + model).trim();
        }

        return (this.model ? 'unrecognized device (' + this.model + ')' : '');
    }
};

module.exports = Device;
