var db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    
    getEvents: function(latRange, lngRange) {
        return new Promise(function(resolve, reject) {  
            db.Events
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

    addEvent: function(eventData) {
        db.Events
        .create(eventData)
        .then(function(result) {
            return result;
        });
    },

    updateEvent: function(eventData, id) {
        db.Events
        .update(
            eventData,
            {where: {id}}
        )
        .then(function(result) {
            return result;
        });
    },

    deleteEvent: function(id) {
        db.Events
        .destroy(
            {where: {id}}
        )
        .then(function(result) {
            return result;
        });
    }
}

