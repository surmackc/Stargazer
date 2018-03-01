var db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    
    getLocations: function(latRange, lngRange) {
        return new Promise(function(resolve, reject) {  
            db.Locations
            .findAll({
                // where: {
                //     [Op.and]: [ 
                //         {latitude: {[Op.between]: latRange}},
                //         {longitude: {[Op.between]: lngRange}}
                //     ]
                // }
            })
            .then(function(result) {
                resolve(result);
            })
            .catch(function(error) {
                reject(error);
            });
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

