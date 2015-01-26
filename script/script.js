function canvasInit(){
	var c = document.getElementById("main");
	c.width = window.innerWidth;
	c.height = window.innerHeight-128;
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#e8e8e8";
	ctx.fillRect(0,0,c.width,c.height);
}

$( document ).ready(function(){
	canvasInit();
});