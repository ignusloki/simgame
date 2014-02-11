/**
 * @author Felipe
 */

function startGame (){	
	
	var goGame = true;
	var nowEvent;
	var goEvent = false;
	var i=0;
	
	initEvent();
	initAvatar();
	event.databaseEvent = dbevent; //Load all events in the event object
	
	while (goGame) {
	
		nowEvent = event.createEvent(); //Generate a random event
		goEvent = avatar.filterSetEvent(nowEvent); //Filter and register the event on player
		console.log("goEvent valor is: " + goEvent); 
		i++;
		if (i>10) {goGame=false;};
	}		
}
