//TASK CONDITIONS
//Draw graphics using canvas

(function () {
    'use strict';

    var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.width);

    ctx.lineWidth = 2;

    ctx.strokeStyle = "rgb(29, 80, 91)";
    ctx.fillStyle = "rgb(144,202,215)";

    //head
    ctx.beginPath();
    ctx.arc(80, 150, 60, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.stroke();

    //eyes
    ctx.beginPath();
    ctx.scale(1, 0.5)
    ctx.arc(80 - 35, 260, 15, 0, 2 * Math.PI, true);
    ctx.moveTo(80 + 10 + 15, 260);
    ctx.arc(80 + 10, 260, 15, 0, 2 * Math.PI, true);
    ctx.scale(1, 2);
    ctx.stroke();

    ctx.fillStyle = "rgb(29, 80, 91)";

    //eyes pupils
    ctx.beginPath();
    ctx.scale(1, 2);
    ctx.arc(40, 65, 3, 0, 2 * Math.PI, true);
    ctx.moveTo(88, 65);
    ctx.arc(85, 65, 3, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.scale(1, 0.5);
    ctx.stroke();

    //nose
    ctx.beginPath();
    ctx.moveTo(67, 140);
    ctx.lineTo(57, 165);
    ctx.lineTo(67, 165);
    ctx.stroke();

    //mouth
    ctx.beginPath();
    ctx.scale(1, 0.25);
    ctx.arc(65, 750, 25, 0, 2 * Math.PI, true);
    ctx.scale(1, 4);
    ctx.stroke();

    ctx.strokeStyle = "black";
    ctx.fillStyle = "rgb(57,102,147)";

    //hat brim
    ctx.beginPath();
    ctx.scale(1, 0.25);
    //ctx.moveTo(140, 370);
    ctx.arc(80, 370, 60, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.scale(1, 4);
    ctx.stroke();

    //ctx.bezierCurveTo

    //hat bootom ellipse
    ctx.beginPath();
    ctx.scale(1, 0.5);
    ctx.arc(80, 160, 30, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.scale(1, 2);
    ctx.stroke();

    //hat rectangle
    ctx.beginPath();
    ctx.fillRect(50, 20, 60, 60);
    ctx.strokeRect(50, 20, 60, 60);
    ctx.stroke();

    //hat top ellipse
    ctx.beginPath();
    ctx.scale(1, 0.5);
    ctx.arc(80, 40, 30, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.scale(1, 2);
    ctx.stroke();

    ctx.strokeStyle = "rgb(57,102,147)";
    //ctx.strokeStyle = "yellow";

    //hat cover a bottom stroke line of rectangle
    ctx.beginPath();
    ctx.moveTo(51, 80);
    ctx.lineTo(109, 80);
    ctx.stroke();

    ctx.fillStyle = "rgb(144,202,215)";

    //bicycle tires
    ctx.beginPath()
    ctx.arc(100, 400, 50, 0, 2 * Math.PI, true);
    ctx.moveTo(350, 400)
    ctx.arc(300, 400, 50, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.stroke();

    //bicycle cradle
    ctx.beginPath();
    ctx.moveTo(100, 400);
    ctx.lineTo(150, 320);
    ctx.lineTo(280, 320);
    ctx.lineTo(180, 400);
    ctx.lineTo(100, 400);
    ctx.moveTo(180, 400);
    ctx.lineTo(143, 300);
    ctx.moveTo(125, 300);
    ctx.lineTo(161, 300);
    ctx.moveTo(300, 400);
    ctx.lineTo(274, 290);
    ctx.lineTo(235, 300);
    ctx.moveTo(274, 290);
    ctx.lineTo(300, 270);
    ctx.moveTo(195, 400);
    ctx.arc(180, 400, 15, 0, 2 * Math.PI, true);
    ctx.moveTo(180 - 10, 400 - 10);
    ctx.lineTo(180 - 20, 400 - 20);
    ctx.moveTo(180 + 10, 400 + 10);
    ctx.lineTo(180 + 20, 400 + 20);
    ctx.stroke();

    ctx.strokeStyle = "black";
    ctx.fillStyle = "rgb(151, 91, 91)";

    //house roof
    ctx.beginPath();
    ctx.moveTo(500, 200);
    ctx.lineTo(750, 200);
    ctx.lineTo(625, 25);
    ctx.lineTo(500, 200);
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 5;

    //house chimney rectangle
    ctx.beginPath();
    ctx.strokeRect(670, 50, 30, 100);
    ctx.fillRect(670, 50, 30, 100);
    ctx.strokeStyle = "rgb(151, 91, 91)";
    ctx.moveTo(670, 152);
    ctx.lineTo(670 + 30, 152);
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    //house chimney ellipse
    ctx.beginPath();
    ctx.scale(1, 0.5);
    ctx.arc(685, 100, 15, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.scale(1, 2);
    ctx.stroke();

    //house
    ctx.beginPath();
    ctx.strokeRect(500, 200, 250, 250);
    ctx.fillRect(501, 201, 248, 248);
    ctx.stroke();

    ctx.fillStyle = "black"
    ctx.strokeStyle = "rgb(151, 91, 91)";

    //house windows
    ctx.beginPath();
    ctx.fillRect(520, 220, 90, 80);
    ctx.fillRect(640, 220, 90, 80);
    ctx.fillRect(640, 320, 90, 80);

    ctx.moveTo(520, 260);
    ctx.lineTo(610, 260);
    ctx.moveTo(565, 220);
    ctx.lineTo(565, 300);

    ctx.moveTo(640, 260);
    ctx.lineTo(730, 260);
    ctx.moveTo(685, 220);
    ctx.lineTo(685, 300);

    ctx.moveTo(640, 360);
    ctx.lineTo(730, 360);
    ctx.moveTo(685, 320);
    ctx.lineTo(685, 400);
    ctx.stroke();

    ctx.strokeStyle = "black";

    //house door
    ctx.beginPath();
    ctx.moveTo(530, 450);
    ctx.lineTo(530, 380);
    ctx.arcTo(530, 350, 560, 350, 30);
    ctx.arcTo(590, 350, 590, 380, 30);
    ctx.lineTo(590, 450);
    ctx.moveTo(560, 450);
    ctx.lineTo(560, 350);

    ctx.moveTo(555, 420);
    ctx.arc(550, 420, 5, 0, 2 * Math.PI, true); //left handle
    ctx.moveTo(575, 420);
    ctx.arc(570, 420, 5, 0, 2 * Math.PI, true); //right handle
    ctx.stroke();
})();