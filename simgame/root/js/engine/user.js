/**
 * @author Felipe
 */

var avatar;
var nEvent = 0;

function initAvatar(){
	avatar = new function (name, gender, personality, perk, foil, moeny, health, dedication) {
		
		//Passive attributes to the avatar
		this.name = name;
		this.gender = gender;
		this.personality = personality;
		this.perk = perk;
		this.foil = foil;
		
		//Active attributes to the avatar
		this.moeny = moeny;
		this.health = health;
		this.dedication = dedication;		
		
		//Functions to recover data -- passive attributes
		this.getName = function(){return this.name};
		this.getGender = function(){return this.gender};
		this.getPersonality = function(){return this.personality};	
		this.getPerk = function(){return this.perk};
		this.getFoil = function(){return this.foil};
		
		//Functions to recover data -- active attributes
		this.getMoeny = function(){return this.money};
		this.getHealth = function(){return this.health};
		this.getDedication = function(){return this.dedication};
		
		//Functions to set data -- passive attributes
		this.setName = function(name){this.name = name};
		this.setGender = function(gender){this.gender = gender};
		this.setPersonality = function(personality){this.personality = personality};	
		this.setPerk = function(perk){this.perk = perk};
		this.setFoil = function(foil){this.foil = foil};
		
		//Functions to set data -- active attributes
		this.setMoeny = function(money){this.money = money};
		this.setHealth = function(health){this.health = health};
		this.setDedication = function(dedication){this.dedication = dedication};
		
		
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
