/**
 * @author Felipe
 */

var max = 4; //Max number of events in the DB
var min = 0; //Always 0
    
function initEvent() {
    event = new function() {

        //Attributes to the generateEvent
        this.nEvents = 0;
        this.databaseEvent = []; //Mocking access to the event database
        this.createEvent = function() //Responsible for generating an event to the player
        {
            var idEvent = Math.floor(Math.random() * (max - min)) + min;
            this.nEvents += 1;
            return this.databaseEvent.event[idEvent];
        };
    };
}

function loadEvent() {
    var requestJSON = new XMLHttpRequest();
    requestJSON.open("GET", "res/data/events/events.json", false);
    requestJSON.send(null);
    return JSON.parse(requestJSON.responseText);
}