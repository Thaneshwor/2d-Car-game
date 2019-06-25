

	function GameAnimation() {
		var cars = [];
		var car = new Box();
		var that = this;
		var score = 0;
		var counter = 0;
		var moveBoxIntervalID;
		var gameStop = false;
		var scoreBoard = document.getElementById('score');
		var gameStatus = document.getElementById('gameStatus');


		this.init = function() {
			score = 0;
			counter = 0;
			makeCar();
			moveBoxIntervalID = setInterval(moveBoxes,10);
			scoreBoard.innerHTML = "Score: 0";
			gameStatus.innerHTML = "";
		}

		var stopGame= function(){
			clearInterval(moveBoxIntervalID);
			gameStop = true;
			gameStatus.innerHTML = "<h4>Game Over!!</h4> Press any key to continue";
		}

		function makeCar() {
			car.y =(ROAD_HEIGHT - CAR_HEIGHT);
			car.x = (ROAD_WIDTH  - CAR_WIDTH)/ 2;
			car.init();
			car.element.setAttribute('class','mycar');
			car.draw();
			document.addEventListener("keydown", KeyPressed, false);
		}

		var createBoxes = function() {
			var box = new Box();
			var randX = getRandom(0, 2);
			var randY = 0;
			box.setBoxPosition(randX,randY);
			box.init();
			box.draw();
			cars.push(box);
		}

		var moveBoxes = function() {
			counter++;
			if((counter % 200) == 0) {
				createBoxes();
			}
			moveRoad();
			for(var i =0; i< cars.length; i++) {
				var box = cars[i];
				box.y += box.dy;
				checkWallCollision(box);
				carCollision(i);
				box.draw();
			}
		}

		// ememy car bottom wall collison
		var checkWallCollision = function(box) {
			if(box.y >= (ROAD_HEIGHT)){
				score++;
				scoreBoard.innerHTML="Score: " + score;
				box.removeElement();
				cars.shift();
				
			}
		}
			
		// check for car collision
		var carCollision = function(position) {
			for(var i = 0; i < cars.length; i++) {
				if(i != position) {
					if ((car.x < cars[i].x + CAR_WIDTH) && (car.x + CAR_WIDTH > cars[i].x) &&
				   	(car.y < cars[i].y + CAR_HEIGHT) && (CAR_HEIGHT + car.y > cars[i].y)) {

						stopGame();
					}
				}
			}
		}

		function KeyPressed(e) {
		  if(e.keyCode == 68 && gameStop != true){
		  	//go right
		    if(car.x < ROAD_WIDTH - CAR_WIDTH - ROAD_X){
		    	car.x += 100;
		    }
		  }
		  else if (e.keyCode == 65 && gameStop != true ){
		  	//go left
		  	if(car.x > ROAD_X) {
			  	car.x -=100;	
		  	}
		  }
		  if(gameStop && e.keyCode != 0) {
		  	gameStop = false;
		  	car.removeElement();
		  	for(var i =0; i < cars.length; i++) {
		  		cars[i].removeElement();
		  	}
		  	score = 0;
		  	gameStatus.innerHTML = "Score: " + score;
		  	delete(car);
		  	delete(score);
		  	delete(gameObj);
		  	gameObj = new GameAnimation().init();
		  }
		 

		  car.draw();
		}
		
	}

	//function to move background road

	var moveRoad = function() {
		var background = document.getElementById('background');
		var margin = parseInt(getComputedStyle(background).getPropertyValue('margin-top'));
		console.log(margin);
		margin = margin + 1;
		background.style.marginTop = margin + 'px';
		
	}

	function getRandom(min, max) {
    	return Math.floor(Math.random() * (max - min + 1) + min);
	}	


	
	// var gameObj = new GameAnimation().init();
