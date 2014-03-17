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
		this.money = moeny;
		this.health = health;
		this.dedication = dedication;		
		
		//Array which is going to register all the events sent to the player
		this.timeline = [];
		
		//Function to filter events thrown at player
		this.filterSetEvent = function (eventGenerated){
			if (this.timeline.indexOf(eventGenerated) == -1){
				this.timeline[nEvent] = eventGenerated;
				nEvent++;				
				consoleMsg("Event accepted in player " + nEvent + " - " + eventGenerated.title);
				return true;
			} else {
				consoleMsg("Event already in player " + eventGenerated.title);
				return false;
			}
		}
	}	
}
