var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(60,180,280,60);
ctx.fillStyle = "green";
ctx.fillRect(100,120,200,60);

ctx.beginPath();
ctx.arc(90,280,40,0,Math.PI*2,true);
ctx.strokeStyle = "#a6a6a6"
ctx.fillStyle = "#cdcdcd";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(300,280,40,0,Math.PI*2,true);
ctx.fillStyle = "#cdcdcd";
ctx.strokeStyle = "#a6a6a6"
ctx.fill();
ctx.stroke();
