/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../game.ts" />

module states {
    export class Over {
        //Constructor*******************************
        constructor() {
            this.main();            
        }

        //our main game function
        main() {

            console.log("Game is Over");
            gOver = new createjs.Container();

            //add background
            space = new objects.Space(assets.loader.getResult("space"));
            gOver.addChild(space);

            //add text Game over
            labelText = new objects.Label("Game Over!","80px");
            labelText.x = 120;
            labelText.y = 70; 
            gOver.addChild(labelText);

            //add score
            labelScore = new objects.Label("Your score is: " + scoreboard.score, "40px");
            labelScore.x = 120;
            labelScore.y = 200;
            gOver.addChild(labelScore);

            //add btn to play again
            btnPlayAgain = new objects.Button(220, 325, assets.loader.getResult("playAgain"));
            gOver.addChild(btnPlayAgain);
            btnPlayAgain.addEventListener("click", this.tryAgainClicked);
        }

        //try again function
        private tryAgainClicked() {
            createjs.Sound.play("music", { "loop": -1, "volume": .1 });
            stage.removeChild(gOver);
            gOver.removeAllChildren();
            gOver.removeAllEventListeners();
            gameOver = 1;
            currentStage = config.PLAY_STATE;
            main();
        }
        
    }
}  