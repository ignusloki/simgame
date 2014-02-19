/**
 * @author Felipe
 */
var playerStat;

function fillPlayerStats() {
	$("form").submit(function(e){		
		playerStat = $(this).serializeArray();
	});
	playerStat["5"] = { "name": "moeny", "value": 100};
	playerStat["6"] = { "name": "health", "value": 100};
	playerStat["7"] = { "name": "dedication", "value": 100};
	startGame(playerStat);
	console.log(playerStat);
}



function startGame (){	
	
	var goGame = true;
	var goEvent = false;
	var i=0;
	var nowEvent;
	
	initEvent();
	initAvatar();
	
	event.databaseEvent = dbevent; //Load all events in the event object	
	avatar.setName(playerStat[0].value);
	avatar.setGender(playerStat[1].value);
	avatar.setPersonality(playerStat[2].value);
	avatar.setPerk(playerStat[3].value);
	avatar.setFoil(playerStat[4].value);
	avatar.setMoeny(playerStat[5].value);
	avatar.setHealth(playerStat[6].value);
	avatar.setDedication(playerStat[7].value);
	
	while (goGame) {
	
		nowEvent = event.createEvent(); //Generate a random event
		goEvent = avatar.filterSetEvent(nowEvent); //Filter and register the event on player
		console.log("goEvent valor is: " + goEvent); 
		i++;
		if (i>10) {goGame=false;};
	}		
}
