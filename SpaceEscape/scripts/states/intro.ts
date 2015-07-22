/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../game.ts" />

module states {
    export class Intro {        
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
            var instructions: string = "\n\nMove your mouse up and down \n\nand don't let Tom catch you \n\n";

            console.log("Intro");

            start = new createjs.Container();
                        
            //add background
            background = new objects.Background(assets.loader.getResult("backIntro"));
            start.addChild(background);

            //add title to screen
            labelTitle = new objects.Label("T&J Chase", "80px");
            labelTitle.shadow = new createjs.Shadow("#005C57", 5, 5, 10);
            labelTitle.x = 126;
            labelTitle.y = 33;
            start.addChild(labelTitle);

            //add instructions to screen 
            labelInstru = new objects.Label("Instructions: " + instructions, "30px");
            labelInstru.shadow = new createjs.Shadow("#005C57", 5, 5, 10);
            labelInstru.x = 30;
            labelInstru.y = 134;
            start.addChild(labelInstru);

            //add button to screen
            btnPlay = new objects.Button(250, 380, assets.loader.getResult("play"));
            start.addChild(btnPlay);
            btnPlay.addEventListener("click", this.StartClicked);
        }

        //when the button was clicked change stage 
        private StartClicked() {
            stage.removeChild(start);
            start.removeAllChildren();
            start.removeAllEventListeners();
            currentStage = config.LEVEL_1 //STATE GO AFTER CLICK BUTTON START
            gameOver = 1;
            main();
        }
    }
}   