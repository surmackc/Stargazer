var db = require("../models");

module.exports = {
    
    getLocations: function {
        db.Locations
        .findAll()
        .then(function(result) {
            return result;
        });
    },

    addLocation: function(locationData) {
        db.Locations
        .create(locationData)
        .then(function(result) {
            return result;
        });
    },

    updateLocation: function(locationData, id) {
        db.Locations
        .update(
            locationData,
            {where: {id}}
        )
        .then(function(result) {
            return result;
        });
    },

    deleteLocation: function(id) {
        db.Locations
        .destroy(
            {where: {id}}
        )
        .then(function(result) {
            return result;
        });
    }
}

