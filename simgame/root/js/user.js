/**
 * @author Felipe
 */

var avatar;
var nEvent = 0;

function initAvatar(){
	avatar = new function (period, gender, personality, hunger, health, happiness, perk, foil) {
		
		//Attributes to the avatar
		this.period = period;
		this.gender = gender;
		this.personality = personality;
		this.hunger = hunger;
		this.health = health;
		this.happiness = happiness;
		this.perk = perk;
		this.foil = foil;
		
		//Functions to recover data
		this.getPeriod = function(){return this.period}
		this.getGEnder = function(){return this.gender}
		this.getPersonality = function(){return this.personality}
		this.getHunger = function(){return this.hunger}
		this.getHealth = function(){return this.health}
		this.getHappiness = function(){return this.happiness}
		this.getPerk = function(){return this.perk}
		this.getFoil = function(){return this.foil}		
		
		//Array which is going to register all the events sent to the player
		this.timeline = [];
		
		//Function to filter events thrown at player
		this.filterSetEvent = function (eventGenerated){
			if (this.timeline.indexOf(eventGenerated) == -1){
				this.timeline[nEvent] = eventGenerated;
				nEvent++;				
				console.log("Event accepted in player " + nEvent + " - " + eventGenerated.Title);
				return true;
			} else {
				console.log("Event already in player " + eventGenerated.Title);
				return false;
			}
		}
	}	
}
