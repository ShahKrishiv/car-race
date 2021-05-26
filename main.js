canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
background_image = "mars.jpg";
car1_image = "https://www.clker.com/cliparts/q/0/m/g/P/c/red-sports-car-top-view.svg";
car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png";
car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 100;
nasa_mars_images_array = ["https://i.postimg.cc/bv5d35nK/racing.jpg"];
random_number = Math.floor(Math.random() * 1);
console.log(random_number);
car1_width = 100;
car1_height = 90;
background_image = nasa_mars_images_array[random_number];

function add() {
    // load image 
    background_imgTag = new Image();
    //defining a variable with a new image 
    background_imgTag.onload = uploadBackground;
    // setting a function, onloading this variable 
    background_imgTag.src = background_image;
    car1_imgTag = new Image();
    //defining a variable with a new image 
    car1_imgTag.onload = uploadcar1;
    // setting a function, onloading this variable 
    car1_imgTag.src = car1_image;
    car2_imgTag = new Image();
    //defining a variable with a new image 
    car2_imgTag.onload = uploadcar2;
    // setting a function, onloading this variable 
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car1_width, car1_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '87') {
        up1();
        console.log("up1");
    }
    if (keyPressed == '65') {
        left1();
        console.log("left1");
    }
    if (keyPressed == '83') {
        down1();
        console.log("down1");
    }
    if (keyPressed == '68') {
        right1();
        console.log("right1");
    }

    if (car1_x > 700) {
        console.log("car1");
        document.getElementById('game_status').innerHTML = "Car 1 Won!!";
    } else if (car2_x > 700) {
        console.log("car2");
        document.getElementById('game_status').innerHTML = "Car 2 Won!!";
    }
}


function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function down() {
    if (car1_y >= 0) {
        car1_y = car1_y + 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function up1() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function down1() {
    if (car2_y >= 0) {
        car2_y = car2_y + 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function left1() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function right1() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}