/**
 * @author Felipe
 */

var avatar;
var nEvent = 0;

function initAvatar(){
	avatar = new function (name, gender, personality, perk, foil, moeny, health, happiness) {
		
		//Passive attributes to the avatar
		this.name = name;
		this.gender = gender;
		this.personality = personality;
		this.perk = perk;
		this.foil = foil;
		
		//Active attributes to the avatar
		this.moeny = moeny;
		this.health = health;
		this.happiness = happiness;		
		
		//Functions to recover data
		this.getName = function(){return this.name};
		this.getGender = function(){return this.gender};
		this.getPersonality = function(){return this.personality};	
		this.getPerk = function(){return this.perk};
		this.getFoil = function(){return this.foil};
		
		this.getMoeny = function(){return this.money};
		this.getHealth = function(){return this.health};
		this.getHappiness = function(){return this.happiness};
		
		//Array which is going to register all the events sent to the player
		this.timeline = [];
		
		//Function to filter events thrown at player
		this.filterSetEvent = function (eventGenerated){
			if (this.timeline.indexOf(eventGenerated) == -1){
				this.timeline[nEvent] = eventGenerated;
				nEvent++;				
				console.log("Event accepted in player " + nEvent + " - " + eventGenerated.title);
				return true;
			} else {
				console.log("Event already in player " + eventGenerated.title);
				return false;
			}
		}
	}	
}
