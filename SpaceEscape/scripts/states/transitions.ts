/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../game.ts" />

module states {
    export class Transitions {        
        //Constructor*******************************
        constructor() {
            this.main();
        }

        //UPDATE METHOD****************************************************************************************************
        public update() {

            //UPDATE BACKGROUND
            background.update();
        }

        //our intro main function
        main() {
            //instructions
            //var instructions: string = "\n\nMove your mouse up and down \n\nand don't let Tom catch you \n\n";

            console.log("Transition: " +level);

            transition = new createjs.Container();
                        
            //add background
            background = new objects.Background(assets.loader.getResult("backIntro"));
            transition.addChild(background);

            //add title to screen
            labelTitle = new objects.Label(level, "80px");
            labelTitle.shadow = new createjs.Shadow("#005C57", 5, 5, 10);
            labelTitle.x = 126;
            labelTitle.y = 33;
            transition.addChild(labelTitle);

            //add instructions to screen 
            labelInstru = new objects.Label("Instructions: " + instructions, "30px");
            labelInstru.shadow = new createjs.Shadow("#005C57", 5, 5, 10);
            labelInstru.x = 30;
            labelInstru.y = 134;
            transition.addChild(labelInstru);

            //add button to screen
            btnPlay = new objects.Button(250, 380, assets.loader.getResult("play"));
            transition.addChild(btnPlay);
            btnPlay.addEventListener("click", this.StartClicked);
            
        }

        //when the button was clicked change stage 
        private StartClicked() {
            console.log("button press");
            stage.removeChild(transition);
            transition.removeAllChildren();
            
            transition.removeAllEventListeners();
            console.log("current Stage: " + futureStage);

            console.log("game over: " + futureGameOver);
            currentStage = futureStage; //STATE GO AFTER CLICK BUTTON START
            gameOver = futureGameOver;
            main();
        }
    }
}   