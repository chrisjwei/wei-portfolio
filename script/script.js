function drawRect(c,x,y){
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(x,y,x+5,y+5);
}

function newTerrain(data){
	console.log("new terrain");
	var obj = new Object();
	obj.x = data.canvasWidth;
	obj.y = 10;
	obj.draw = function(c){
		drawRect(c,this.x,this.y);
	};
	obj.update = function(){
		x -= 1;
		if (x < 0){
			this.destroy();
		}
	}
	obj.destroy = function(d){
		d.objArray.remove(this);
	}
	console.log(data);
	data.objArray.push(this);
}

function drawBackdrop(c){
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#6BB9F0";
	ctx.fillRect(0,0,c.width,c.height);
}

function canvasUpdateAll(c,data){
	data.objArray.forEach(function(obj){
		obj.update();
	});
}

function canvasDrawAll(c,data){
	drawBackdrop(c);
	data.objArray.forEach(function(obj){
		obj.draw(c);
	});
}

function canvasTimerFired(c,data){
	setTimeout(function() {
		canvasUpdateAll(c,data);
		canvasDrawAll(c,data);
		newTerrain(data);
		console.log("data ="+data);
		canvasTimerFired(c,data);
	}, 1000);
}

function canvasInit(c,data){
	c.width = window.innerWidth;
	c.height = window.innerHeight-128;
	data.canvasWidth = c.width;
	data.canvasHeight = c.height;
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#e8e8e8";
	ctx.fillRect(0,0,c.width,c.height);
}

$( document ).ready(function(){
	var c = document.getElementById("main");
	var data = {objArray:[],canvasWidth:0,canvasHeight:0};
	canvasInit(c,data);
	drawBackdrop(c);
	canvasTimerFired(c,data);
});