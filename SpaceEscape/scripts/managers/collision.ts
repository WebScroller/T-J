module managers {
    export class Collision {
        
        //Constructor************************************
        constructor(){            
        }
        
        //PUBLIC METHOD TO CHECK COLITIONS BETWEEN MOUSE AND CAT *********************************************************************************************
        public checkMC(gameObject1: objects.GameObject, gameObject2: objects.GameObject) {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();
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
                    if (scoreboard.lives < 2) {  
                        //To know that the game is over
                        gameOver = 4;
                    } else {
                        scoreboard.lives--;
                        catched = true;
                    }
                }

                //IF COLLISION IS BETWEEN MOUSE & CHEESE
                if (gameObject1.name == "mouse" && gameObject2.name == "cheese") {
                    scoreboard.score += 100;
                    gotCheese = true;
                }
                
                //IF COLLISION IS BETWEEN MOUSE & WHISTLE
                if (gameObject1.name == "mouse" && gameObject2.name == "whistle") {
                    gotWhistle = true;
                }
            }
            gameObject2.isColliding = true;

        }else {
            gameObject2.isColliding = false;
        }
        }

        //PUBLIC METHOD TO CHECK COLLISIONS BETWEEN MOUSE AND MOUSETRAP *********************************************************************************************
        public checkMT(gameObject1: objects.GameObject, gameObject2: objects.GameObject): boolean {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = gameObject1.x;
            p1.y = gameObject1.y;

            p2.x = gameObject2.x;
            p2.y = gameObject2.y;


            //if the objects are close...
            if (utility.distance(p1, p2) < ((gameObject1.height * 0.5) + (gameObject2.height * 0.3))) {
                if (gameObject2.isColliding == false) {
                    createjs.Sound.play(gameObject1.sound);

                    //IF COLLISION IS BETWEEN MOUSE & CAT
                    if (gameObject1.name == "mouse" && gameObject2.name == "mouseTrap") {
                        if (scoreboard.lives < 2) {  
                            //To know that the game is over
                            gameOver = 4;
                        } else {
                            scoreboard.lives--;
                            catched = true;
                        }
                    }

                }
                gameObject2.isColliding = true;
                return false;

            } else {
                gameObject2.isColliding = false;
                return false;
            }
        }

        //PUBLIC METHOD TO CHECK COLLISIONS BETWEEN DOG AND CAT *********************************************************************************************
        public checkDC(gameObject1: objects.GameObject, gameObject2: objects.Cats): boolean {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
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

            } else {
                gameObject2.isColliding = false;
                return false;
            }
        }
    }
}


