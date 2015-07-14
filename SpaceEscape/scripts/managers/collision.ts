module managers {
    export class Collision {
        //Constructor************************************
        constructor() {
        }
        
        //public method to check the distance between objects 
        public check(gameObject: objects.GameObject) {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();
        p1.x = mouse.x;
        p1.y = mouse.y;

        p2.x = gameObject.x;
        p2.y = gameObject.y;

        //if the objects are close...
        if (utility.distance(p1, p2) < ((mouse.height * 0.5) + (gameObject.height * 0.3))) {
            if (gameObject.isColliding == false) {
                createjs.Sound.play(gameObject.sound);
                //if is the asteroid 
                if (gameObject.name == "cat") {
                    if (scoreboard.lives < 2) {  
                        //To know that the game is over
                        gameOver = 2;                        
                    } else {
                        scoreboard.lives--;
                    }
                }
                //if is the energy 
                if (gameObject.name == "cheese") {
                    scoreboard.score += 100;
                   
                }
            }
            gameObject.isColliding = true;
        }else {
            gameObject.isColliding = false;
        }
    }
    }
}