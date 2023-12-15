const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const battleBus = new Image();
battleBus.src = "./res/img/boss/battle_bus.png"

canvas.width = 1280;
canvas.height = 720;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1280, 720);

ctx.fillStyle = "orange";
ctx.fillRect(100, 200, 100, 200)

ctx.strokeStyle = "red";
ctx.strokeRect(400, 200, 100, 200);

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 100);
ctx.lineTo(100, 100);
ctx.lineTo(100, 150);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(200, 100);
ctx.lineTo(150, 100);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 50);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(150, 150);
ctx.stroke();


ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.arc(580, 105, 100, 0, 2 * Math.PI);
ctx.arc(580, 100, 10, 0, 2 * Math.PI);
ctx.stroke();
    

let busX = 200;

window.onload = () => {
    setInterval(() =>{
        busX++;
        ctx.drawImage(battleBus, 100, busX, 200 , 200,)
    }100)
}