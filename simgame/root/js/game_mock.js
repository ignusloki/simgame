/**
 * @author Felipe
 */
function startGame (){	
	
	var goGame = true;
	var goEvent = false;
	var i=0;
	var nowEvent;	
	var playerStat = new Array(8);	
	initEvent();
	initAvatar();
	fillPlayerStats(playerStat);
	
	event.databaseEvent = dbevent; //Load all events in the event object	
	avatar.name = playerStat[0];
	avatar.gender = playerStat[1];
	avatar.personality = playerStat[2];
	avatar.perk = playerStat[3];
	avatar.foil = playerStat[4];
	avatar.money = playerStat[5];
	avatar.health = playerStat[6];
	avatar.dedication = playerStat[7];
	
	consoleMsg("Name: " + avatar.name);
	consoleMsg("Gender: " + avatar.gender);
	consoleMsg("Money: " + avatar.money);
	consoleMsg("Health: " + avatar.health);
	consoleMsg("Dedication: " + avatar.dedication);
	
	var passWeek = document.getElementById ("oneWeek");
	passWeek.addEventListener ("click", function(){oneWeek(goEvent, nowEvent)}, false);		
	
}

//Function to get all players stats
function fillPlayerStats(playerStat) {	
	playerStat[0] = $('input#name').val();
	playerStat[1] = $('#gender').find(":selected").text();
	playerStat[2] = $('#personality').find(":selected").text();
	playerStat[3] = $('#perk').find(":selected").text();
	playerStat[4] = $('#foil').find(":selected").text();
	playerStat[5] = 100;
	playerStat[6] = 100;
	playerStat[7] = 100;
}

function consoleMsg (msg) {	
	$("div#console").append(msg + "<br>");
}

//Pass time
function oneWeek (goEvent, nowEvent) {
	while (!goEvent) {
		nowEvent = event.createEvent(); //Generate a random event
		goEvent = avatar.filterSetEvent(nowEvent); //Filter and register the event on player
		consoleMsg("goEvent valor is: " + goEvent);		
	}	
}

var playerStat;
$( document ).ready(function() {	
	var gameStart = document.getElementById ("gameStart");
	gameStart.addEventListener ("click", startGame, false);	
});