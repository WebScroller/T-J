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
                    if (lives < 2) {  
                        //To know that the game is over
                        gameOver = 6;
                        currentStage = config.GAME_OVER_STATE
                        main();
                    } else {
                        lives--;
                        catched = true;
                    }
                }

                //IF COLLISION IS BETWEEN MOUSE & CHEESE
                if (gameObject1.name == "mouse" && gameObject2.name == "cheese") {
                    score += 100;
                    //TO TRANSITION LEVEL 2
                    if (score == 500){
                        stage.removeChild(level_1);
                        level_1.removeAllChildren();
                        level_1.removeAllEventListeners();
                        currentStage = config.TRANSITION //STATE GO AFTER CLICK BUTTON START
                        level = "Level 2"
                        instructions = "Use your mouse left click \n\n to throw spanners, but take care\n\n only works with the mousetraps"
                        gameOver = 2;
                        main();
                        //TO  TRANSITION LEVEL 3
                    } else if(score == 1000){
                        stage.removeChild(level_2);
                        level_2.removeAllChildren();
                        level_2.removeAllEventListeners();
                        currentStage = config.TRANSITION //STATE GO AFTER CLICK BUTTON START
                        level = "Level 3"
                        instructions = "Catch the whistle to call \n\n you friend for help"
                        gameOver = 4;
                        main();
                    }
                    cheese.reset();
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
                    createjs.Sound.play(gameObject2.sound);

                    //IF COLLISION IS BETWEEN MOUSE AND MOUSETRAP
                    if (gameObject1.name == "mouse" && gameObject2.name == "mouseTrap") {
                        if (lives < 2) {  
                            //To know that the game is over
                            gameOver = 6;
                            currentStage = config.GAME_OVER_STATE
                            main();
                        } else {
                            lives--;
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

        //PUBLIC METHOD TO CHECK COLLISIONS BETWEEN SPANNER AND MOUSETRAP *********************************************************************************************
        public checkST(gameObject1: objects.GameObject, gameObject2: objects.MouseTrap): boolean {
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

                    //IF COLLISION IS BETWEEN SPANNER & MOUSETRAP
                    if (gameObject1.name == "spanner" && gameObject2.name == "mouseTrap") {
                        gameObject2.reset();
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


