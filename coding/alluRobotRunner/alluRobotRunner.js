//  R O B O T   R U N N E R

var robotRunner = (function(){

    var setupEventListeners = function(){
        document.querySelector('.arrow-button-left').addEventListener('click', moveRobotLeft);
        document.querySelector('.arrow-button-up').addEventListener('click', moveRobotUp);
        document.querySelector('.arrow-button-down').addEventListener('click', moveRobotDown);
        document.querySelector('.arrow-button-right').addEventListener('click', moveRobotRight);
    };
 
    let moveRobotLeft = function () {
        console.log("Robot moves left");
    };

    let moveRobotUp = function () {
        console.log("Robot moves up");
    };

    let moveRobotDown = function () {
        console.log("Robot moves down");
    };

    let moveRobotRight = function () {
        console.log("Robot moves right");
    };

    return {
        init: function(){
            console.log('RobotRunner has started...');
            setupEventListeners();
            
        }
    };

})();

robotRunner.init();