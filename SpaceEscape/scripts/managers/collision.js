var managers;
(function (managers) {
    var Collision = (function () {
        //Constructor************************************
        function Collision() {
        }
        //PUBLIC METHOD TO CHECK COLITIONS BETWEEN MOUSE AND CAT *********************************************************************************************
        Collision.prototype.checkMC = function (gameObject1, gameObject2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = gameObject1.x;
            p1.y = gameObject1.y;
            p2.x = gameObject2.x;
            p2.y = gameObject2.y;
            //if the objects are close...
            if (utility.distance(p1, p2) < ((gameObject1.height * 0.5) + (gameObject2.height * 0.3))) {
                if (gameObject2.isColliding == false) {
                    createjs.Sound.play(gameObject2.sound);
                    //IF COLLISION IS BETWEEN MOUSE & CAT
                    if (gameObject1.name == "mouse" && gameObject2.name == "cat") {
                        if (lives < 2) {
                            //To know that the game is over
                            gameOver = 6;
                        }
                        else {
                            lives--;
                            catched = true;
                        }
                    }
                    //IF COLLISION IS BETWEEN MOUSE & CHEESE
                    if (gameObject1.name == "mouse" && gameObject2.name == "cheese") {
                        score += 100;
                        //TO TRANSITION LEVEL 2
                        if (score == 500) {
                            stage.removeChild(level_1);
                            level_1.removeAllChildren();
                            level_1.removeAllEventListeners();
                            currentStage = config.TRANSITION; //STATE GO AFTER CLICK BUTTON START
                            level = "Level 2";
                            instructions = "Throw spanners";
                            gameOver = 2;
                            main();
                        }
                        else if (score == 1000) {
                            stage.removeChild(level_2);
                            level_2.removeAllChildren();
                            level_2.removeAllEventListeners();
                            currentStage = config.TRANSITION; //STATE GO AFTER CLICK BUTTON START
                            level = "Level 3";
                            instructions = "Catch the whistle";
                            gameOver = 4;
                            main();
                        }
                        gotCheese = true;
                    }
                    //IF COLLISION IS BETWEEN MOUSE & WHISTLE
                    if (gameObject1.name == "mouse" && gameObject2.name == "whistle") {
                        gotWhistle = true;
                    }
                }
                gameObject2.isColliding = true;
            }
            else {
                gameObject2.isColliding = false;
            }
        };
        //PUBLIC METHOD TO CHECK COLLISIONS BETWEEN MOUSE AND MOUSETRAP *********************************************************************************************
        Collision.prototype.checkMT = function (gameObject1, gameObject2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = gameObject1.x;
            p1.y = gameObject1.y;
            p2.x = gameObject2.x;
            p2.y = gameObject2.y;
            //if the objects are close...
            if (utility.distance(p1, p2) < ((gameObject1.height * 0.5) + (gameObject2.height * 0.3))) {
                if (gameObject2.isColliding == false) {
                    createjs.Sound.play(gameObject1.sound);
                    //IF COLLISION IS BETWEEN MOUSE AND MOUSETRAP
                    if (gameObject1.name == "mouse" && gameObject2.name == "mouseTrap") {
                        if (lives < 2) {
                            //To know that the game is over
                            gameOver = 6;
                        }
                        else {
                            lives--;
                            catched = true;
                        }
                    }
                }
                gameObject2.isColliding = true;
                return false;
            }
            else {
                gameObject2.isColliding = false;
                return false;
            }
        };
        //PUBLIC METHOD TO CHECK COLLISIONS BETWEEN SPANNER AND MOUSETRAP *********************************************************************************************
        Collision.prototype.checkST = function (gameObject1, gameObject2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = gameObject1.x;
            p1.y = gameObject1.y;
            p2.x = gameObject2.x;
            p2.y = gameObject2.y;
            //if the objects are close...
            if (utility.distance(p1, p2) < ((gameObject1.height * 0.5) + (gameObject2.height * 0.3))) {
                if (gameObject2.isColliding == false) {
                    createjs.Sound.play(gameObject1.sound);
                    //IF COLLISION IS BETWEEN SPANNER & MOUSETRAP
                    if (gameObject1.name == "spanner" && gameObject2.name == "mouseTrap") {
                        gameObject2.reset();
                    }
                }
                gameObject2.isColliding = true;
                return false;
            }
            else {
                gameObject2.isColliding = false;
                return false;
            }
        };
        //PUBLIC METHOD TO CHECK COLLISIONS BETWEEN DOG AND CAT *********************************************************************************************
        Collision.prototype.checkDC = function (gameObject1, gameObject2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = gameObject1.x;
            p1.y = gameObject1.y;
            p2.x = gameObject2.x;
            p2.y = gameObject2.y;
            //if the objects are close...
            if (utility.distance(p1, p2) < ((gameObject1.height * 0.5) + (gameObject2.height * 0.3))) {
                if (gameObject2.isColliding == false) {
                    createjs.Sound.play(gameObject1.sound);
                    //IF COLLISION IS BETWEEN MOUSE & CAT
                    if (gameObject1.name == "dog" && gameObject2.name == "cat") {
                        //level_3.removeChild(gameObject2); 
                        gameObject2.reset();
                        gameObject2.isColliding = true;
                        return true;
                    }
                }
                gameObject2.isColliding = true;
                return false;
            }
            else {
                gameObject2.isColliding = false;
                return false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map