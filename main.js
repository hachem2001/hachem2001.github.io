window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		dx=0, dy=0;


	s = 0
	render();
	function getDistance(x, y, x2, y2){
		return Math.pow((x-x2)*(x-x2)+(y-y2)*(y-y2), 1/2)
	}

	function render(){
		context.clearRect(0,0,width,height)
		for(var h=0;h<height;h+=height/3){
			
			for(var x=0;x<width;x+=17){
				var y = h+Math.sin(s)*50
				var ang = Math.atan2(x-dx, y-dy)

				var intensity = 200/getDistance(x, y, dx, dy)
				var ny = h+Math.sin(s-ang)*50*intensity
				var nx = x+Math.cos(-ang)*50*intensity
				context.beginPath();
				context.arc(nx, ny, 50, 0, Math.PI*2, false)
				context.fill();
				context.stroke();
				s=(s+0.0001)
			}
		}
		requestAnimationFrame(render);
	}
	document.body.addEventListener("mousemove", function(event) {
		dx = event.clientX ;
		dy = event.clientY ;
		angle = Math.atan2(dy, dx);
	});

};