/**
 * @author Felipe
 */

function startGame (){
	
	initEvent();
	initAvatar();
	event.databaseEvent = loadEvent();
	var goGame = true;
	var nowEvent;
	var goEvent = false;
	var i=0
	
	while (goGame) {
	
		nowEvent = event.createEvent(); //Generate a random event
		goEvent = avatar.filterSetEvent(nowEvent); //Filter and register the event on player
		console.log("goEvent valor is: " + goEvent); 
		i++;
		if (i>10) {goGame=false;};
	}	
	
	
}
