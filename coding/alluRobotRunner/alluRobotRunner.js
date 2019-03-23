//  R O B O T   R U N N E R

var robotRunner = (function(){

    var setupEventListeners = function(){
        document.querySelector('.arrow-button-left').addEventListener('click', moveRobotLeft);
        document.querySelector('.arrow-button-up').addEventListener('click', moveRobotUp);
        document.querySelector('.arrow-button-down').addEventListener('click', moveRobotDown);
        document.querySelector('.arrow-button-right').addEventListener('click', moveRobotRight);
    };
 
    let moveRobotLeft = function () {
        var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
            }
        xmlHttp.open("GET", 'http://127.0.0.1:8081/RobotLeft', true); 
        xmlHttp.send(null);

        console.log("Robot moves left ");
    };

    let moveRobotUp = function () {
        var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
            }
        xmlHttp.open("GET", 'http://127.0.0.1:8081/RobotForward', true); 
        xmlHttp.send(null);
        console.log("Robot moves forward");
    };

    let moveRobotDown = function () {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", 'http://127.0.0.1:8081/RobotBackward', true); 
        xmlHttp.send(null);
        console.log("Robot moves backward");
    };

    let moveRobotRight = function () {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", 'http://127.0.0.1:8081/RobotRight', true); 
        xmlHttp.send(null);
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