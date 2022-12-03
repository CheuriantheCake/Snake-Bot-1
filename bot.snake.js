
//board
var blockSize = 25;
var rows = 24;
var cols = 25;
var board;
var context;

//snake head
var snakeX = blockSize * 24;
var snakeY = blockSize * 23;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//food
var foodX;
var foodY;

var gameOver = false;

let time = 0;
let score = 0;


//When window opens/refreshes run this
window.onload = () => {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //for drawing on the board

    placeFood();


    // update();

    velocityX = -1;
    velocityY = 0;

    // Calls update() every 120 milliseconds
    setInterval(update, 120);
    
 }

 function update() {


    // if game over, break out of the update function
    if (gameOver) {
        return;
    }

    if (snakeX == blockSize * 24 && snakeY == blockSize * 0) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 1) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 1) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 2) {
        velocityX = 1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 2) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 3) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 3) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 4) {
        velocityX = 1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 4) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 5) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 5) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 6) {
        velocityX = 1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 6) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 7) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 7) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 8) {
        velocityX = 1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 8) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 9) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 9) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 10) {
        velocityX = 1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 10) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 11) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 11) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 12) {
        velocityX = 1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 12) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 13) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 13) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 14) {
        velocityX = 1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 14) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 15) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 15) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 16) {
        velocityX = 1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 16) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 17) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 17) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 18) {
        velocityX = 1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 18) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 19) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 19) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 20) {
        velocityX = 1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 20) {
        velocityX = 0;
        velocityY = 1;
    }
 
    if (snakeX == blockSize * 24 && snakeY == blockSize * 21) {
        velocityX = -1;
        velocityY = 0;
    }
 
    if (snakeX == blockSize * 1 && snakeY == blockSize * 21) {
        velocityX = 0;
        velocityY = 1;
    }

    if (snakeX == blockSize * 1 && snakeY == blockSize * 22) {
        velocityX = 1;
        velocityY = 0;
    }

    if (snakeX == blockSize * 24 && snakeY == blockSize * 22) {
        velocityX = 0;
        velocityY = 1;
    }

    if (snakeX == blockSize * 24 && snakeY == blockSize * 22) {
        velocityX = 0;
        velocityY = 1;
    }

    if (snakeX == blockSize * 24 && snakeY == blockSize * 23) {
        velocityX = -1;
        velocityY = 0;
    }

    if (snakeX == blockSize * 0 && snakeY == blockSize * 23) {
        velocityX = 0;
        velocityY = -1;
    }
 
    if (snakeX == blockSize * 0 && snakeY == blockSize * 0) {
        velocityX = 1;
        velocityY = 0;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="purple";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    //if snake head posn is at food position, increase snake length and place food somewhere else
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    //each piece of snake body follows snake head
    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }


    context.fillStyle="pink";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //game over conditions
    if (snakeX < 0 || snakeX > cols*blockSize - 1 || snakeY < 0 || snakeY > rows*blockSize - 1) {
        gameOver = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }

    if (snakeX == foodX && snakeY == foodY) {
        score += 1;
        console.log(`Score: ` + `${score}`);
        document.getElementById("score").innerHTML = `Score: ` + `${score}`;
    } else {
        document.getElementById("score").innerHTML = `Score: ` + `${score}`;
    }

    time += 1;
    console.log(`Time: ` + `${time}`);

    if (snakeBody == foodX && snakeBody == foodY) {
        placeFood();
    }
 }



 function placeFood() {
    //0-1) * cols -> (0-19.9999) -> (0-19) * 25
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
 }