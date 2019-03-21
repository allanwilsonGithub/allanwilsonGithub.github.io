let moveRobotLeft = function () {
    console.log("Robot moves left");
}
let moveRobotUp = function () {
    console.log("Robot moves up");
}
let moveRobotDown = function () {
    console.log("Robot moves down");
}
let moveRobotRight = function () {
    console.log("Robot moves right");
}

document.querySelector('.arrow-button-left').addEventListener('click', moveRobotLeft);
document.querySelector('.arrow-button-up').addEventListener('click', moveRobotUp);
document.querySelector('.arrow-button-down').addEventListener('click', moveRobotDown);
document.querySelector('.arrow-button-right').addEventListener('click', moveRobotRight);