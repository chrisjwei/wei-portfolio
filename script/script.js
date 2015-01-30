function drawRect(c,x0,y0,x1,y1){
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(x0,y0,x1-x0,y1-y0);
}

function newTerrain(data,xi,yi,w){
	return
}

function drawBackdrop(c){
	var ctx = c.getContext("2d");
	ctx.clearRect (0,0,c.width,c.height);
	ctx.fillStyle = "#0f0f0f";
	ctx.fillRect(0,0,c.width,c.height);
}

function canvasUpdateAll(c,data){
	var currentTime = (new Date()).getTime();
	var dt = currentTime-data.lastTime;
	data.lastTime = currentTime;
	data.objArray.forEach(function(obj){
		obj.update(dt);
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
		canvasTimerFired(c,data);
	}, 17);
}

function canvasInit(c,data){
	c.width = window.innerWidth-17;
	c.height = Math.max(window.innerHeight-128,600);
	data.canvasWidth = c.width;
	data.canvasHeight = c.height;
	data.lastTime = (new Date()).getTime();
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,c.width,c.height);
}

$( document ).ready(function(){
	var c = document.getElementById("main");
	var data = {objArray:[],canvasWidth:0,canvasHeight:0,lastTime:0};
	canvasInit(c,data);
	drawBackdrop(c);
	canvasTimerFired(c,data);
	var python = document.getElementById("skill_python");
	python.style.width = "400px";
	//python.style.backgroundColor="rgb(255, 245, 67)";
	var c = document.getElementById("skill_c");
	c.style.width = "400px";
	//c.style.backgroundColor="rgb(89, 171, 227)";
	var jva = document.getElementById("skill_java");
	jva.style.width = "300px";
	//jva.style.backgroundColor="rgb(232, 126, 4)";
	var jscript = document.getElementById("skill_javascript");
	jscript.style.width = "300px";
	//jscript.style.backgroundColor="rgb(232, 16, 4)";
	var lamp = document.getElementById("skill_lamp");
	lamp.style.width = "200px";
	//lamp.style.backgroundColor="rgb(232, 84, 210)";
	var verilog = document.getElementById("skill_verilog");
	verilog.style.width = "100px";
	//verilog.style.backgroundColor="rgb(40, 56, 200)";
	var photoshop = document.getElementById("skill_photoshop");
	photoshop.style.width = "400px";
	var photoshop = document.getElementById("skill_illustrator");
	photoshop.style.width = "400px";
	var photoshop = document.getElementById("skill_css");
	photoshop.style.width = "300px";
	var photoshop = document.getElementById("skill_style");
	photoshop.style.width = "600px";

});