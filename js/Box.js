

	function Box() {
		var that = this;
		this.x =0;
		this.y =0;
		this.element;
		this.dx = 0;
		this.dy = 1;
		this.init = function() {
			this.element = document.createElement('div');
			this.element.setAttribute('class','box');
			this.container = document.getElementById('container');
			this.container.appendChild(this.element);

		}

		this.setBoxPosition = function(randX,randY) {
			this.x = randX * 100 + 25;
			this.y = -50;
		}

		this.draw = function() {
			this.element.style.top = this.y + 'px';
			this.element.style.left = this.x + 'px';
		}

		this.removeElement = function() {
			this.element.remove();
		}
	}

