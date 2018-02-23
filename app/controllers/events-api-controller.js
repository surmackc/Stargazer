var db = require("../models");

module.exports = {
    
    getEvents: function {
        db.Events
        .findAll()
        .then(function(result) {
            return result;
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

