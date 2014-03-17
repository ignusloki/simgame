/**
 * @author Felipe
 */
    
function initEvent() {
	
	var max = 4; //Max number of events in the DB
	var min = 0; //Always 0
	
    event = new function() {

        //Attributes to the generateEvent
        this.nEvents = 0;
        this.databaseEvent = []; 
        this.eventLength = function(type) //Responsible for telling the length of each db
        {        	
        	var end = true;
        	var n=0;
        	if (type == "random"){
        		while (end) {
            		if (typeof this.databaseEvent.random[n] === "undefined"){
            			break;
            		}
            		n++;
            	}
            	return n;
        	}
        	else{
        		while (end) {
            		if (typeof this.databaseEvent.planned[n] === "undefined"){
            			break;
            		}
            		n++;
            	}
            	return n;
        	}        	
        }	
        this.createEvent = function() //Responsible for generating an event to the player
        {
            var idEvent = Math.floor(Math.random() * (this.eventLength('random') - min));
            this.nEvents += 1;
            return this.databaseEvent.random[idEvent];
        };
    };
}