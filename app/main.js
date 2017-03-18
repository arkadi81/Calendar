
module.exports = {
  clean: function(data) {
    /**
      * will clean string and trim leading and trailing spaces 
      * @param {object} data input
      * returns clean string
    */  

  },
  addEvent: function(data) {
    /**
      * accepts data to add and dumps it into calendar.events table
      * todo. if event close in time, also populate occurances table
      * @param {object} data input
      * returns result of event addition
    */
  },

  editEvent: function(id, data) {
    /**
      * looks for event id, changes the information if exists
      * do precheck input for injection
      * @param {object} data input
      * returns ok if changed successfully or throws error if id not found
    */  
  },

  deleteEvent: function(id, orrucrances) {
    /**
      * marks event with matching id as deleted

      * @param {object} data input
      * @param {boolean} occurances will determine whether to mark occurances of original event as deleted as well
      * returns clean string
    */  
  },

  markOccuranceDone: function(occuranceID) {

  },

  markOccurancePending: function(occuranceID) {

  },

  deleteOccurance: function(occuranceID) {

  },
};