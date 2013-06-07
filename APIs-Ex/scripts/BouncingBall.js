//TASK CONDITIONS:
//Draw a circle that flies inside a box
//When it reaches an edge, it should bounce that edge
   
(function () {
    'use strict';

    var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");

    ctx.lineWidth = 2;
    ctx.fillStyle = "black";
    var fieldWidth = ctx.canvas.width;
    var fieldHeight = ctx.canvas.height;

    ctx.fillRect(0, 0, fieldWidth, fieldHeight);
    
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "red";
    var ballCenterX = 0;
    var ballCenterY = Math.random() * fieldHeight;

    ctx.beginPath();
    ctx.arc(ballCenterX, ballCenterY, 10, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.stroke();

    var positiveXMoving = true;
    var positiveYMoving = true;
    var movingInClockwise = false;

    setInterval(function () {
        if (!movingInClockwise) {
            if (positiveXMoving && positiveYMoving) {
                ballCenterX++;
                ballCenterY++;

                drawCircle(ballCenterX, ballCenterY, 10);

                if (ballCenterY >= fieldHeight || ballCenterX >= fieldWidth) {               
                    if (ballCenterY >= fieldHeight) {
                        positiveYMoving = false;
                    }
                    else {
                        movingInClockwise = true;
                    }
                }
            }
            else if (positiveXMoving && !positiveYMoving) {
                ballCenterX++;
                ballCenterY--;

                drawCircle(ballCenterX, ballCenterY, 10);

                if (ballCenterX >= fieldWidth || ballCenterY <= 0) {
                    if (ballCenterX >= fieldWidth) {
                        positiveXMoving = false;
                    }
                    else {
                        movingInClockwise = true;
                    }
                }
            }
            else if (!positiveXMoving && !positiveYMoving) {
                ballCenterX--;
                ballCenterY--;

                drawCircle(ballCenterX, ballCenterY, 10);

                if (ballCenterY <= 0 || ballCenterX <= 0) {
                    if (ballCenterY <= 0) {
                        positiveYMoving = true;
                    }
                    else {
                        movingInClockwise = true;
                    }
                }
            }
            else if (!positiveXMoving && positiveYMoving) {
            ballCenterX--;
            ballCenterY++;

            drawCircle(ballCenterX, ballCenterY, 10);

            if (ballCenterX <= 0 || ballCenterY >= fieldHeight) {
                if (ballCenterX <= 0) {
                    positiveXMoving = true;
                }
                else {
                    movingInClockwise = true;
                }
            }
        }
        }
        else {
            if (positiveXMoving && !positiveYMoving) {
                ballCenterX++;
                ballCenterY--;

                drawCircle(ballCenterX, ballCenterY, 10);

                if (ballCenterY <= 0 || ballCenterX >= fieldWidth) {
                    if (ballCenterY <= 0) {
                        positiveYMoving = true;
                    }
                    else {
                        movingInClockwise = false;
                    }
                }
            }
            else if (positiveXMoving && positiveYMoving) {
                ballCenterX++;
                ballCenterY++;

                drawCircle(ballCenterX, ballCenterY, 10);

                if (ballCenterX >= fieldWidth || ballCenterY >= fieldHeight) {
                    if (ballCenterX >= fieldWidth) {
                        positiveXMoving = false;
                    }
                    else {
                        movingInClockwise = false;
                    }
                }
            }
            else if (!positiveXMoving && positiveYMoving) {
                ballCenterX--;
                ballCenterY++;

                drawCircle(ballCenterX, ballCenterY, 10);

                if (ballCenterY >= fieldHeight || ballCenterX <= 0) {
                    if (ballCenterY >= fieldHeight) {
                        positiveYMoving = false;
                    }
                    else {
                        movingInClockwise = false;
                    }
                }
            }
            else if (!positiveXMoving && !positiveYMoving) {
            ballCenterX--;
            ballCenterY--;

            drawCircle(ballCenterX, ballCenterY, 10);

            if (ballCenterX <= 0 || ballCenterY <= 0) {
                if (ballCenterX <= 0) {
                    positiveXMoving = true;
                }
                else {
                    movingInClockwise = false;
                }
            }
        }
        }
    }, 5);
    
    function drawCircle(centerX, centerY, radius) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.stroke();
    }
})();