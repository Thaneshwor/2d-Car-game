
	var ROAD_WIDTH = 300;
	var ROAD_HEIGHT = 500;
	var CAR_WIDTH = 50
	var CAR_HEIGHT = 100;
	var VELOCITY = 2;
	var CAR_LIMIT = 3;
	var ROAD_X = 25;



function startGame(){
	var button = document.getElementById('start');
	button.style.display='none';
	 new GameAnimation().init();
 }