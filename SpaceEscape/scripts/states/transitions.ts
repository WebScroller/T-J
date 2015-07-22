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
            stage.removeChild(transition);
            transition.removeAllChildren();            
            transition.removeAllEventListeners();
            currentStage = futureStage; //STATE GO AFTER CLICK BUTTON START
            gameOver = futureGameOver;
            main();
        }
    }
}   