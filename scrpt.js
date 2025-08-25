const productImage = document.getElementById("wheel");
const colorWheel = document.getElementById("color");

document.getElementById("button-gray").onclick = function () {
    productImage.src = "images/image_de_voiture_tesla/black_car.png";
    colorWheel.innerHTML = "BLACK";
}

document.getElementById("button-black").onclick = function () {
    productImage.src = "images/image_de_voiture_tesla/blue_car.png";
    colorWheel.innerHTML = "BLUE";
}

document.getElementById("button-red").onclick = function () {
    productImage.src = "images/image_de_voiture_tesla/red_car.png";
    colorWheel.innerHTML = "RED";
}






const productImage2 = document.getElementById("wheel2");
const colorWheel2 = document.getElementById("color2");

document.getElementById("button-gray2").onclick = function() {
    productImage2.src = "images/image_de_voiture_tesla/black_inside.png";
    colorWheel2.innerHTML = "BLACK";
}

document.getElementById("button-black2").onclick = function () {
    productImage2.src = "images/image_de_voiture_tesla/white_inside.png";
    colorWheel2.innerHTML = "WHITE";
}








const productImage3 = document.getElementById("wheel3");
const colorWheel3 = document.getElementById("color3");

document.getElementById("button-gray3").onclick = function() {
    productImage3.src = "images/image_de_voiture_tesla/car_black_wheel.png";
    colorWheel3.innerHTML = "ONE";
}

document.getElementById("button-black3").onclick = function () {
    productImage3.src = "images/image_de_voiture_tesla/car_gray_wheel.png";
    colorWheel3.innerHTML = "TWO";
}



