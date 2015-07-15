/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../game.ts" />

module states {
    export class Intro {        
        //Constructor*******************************
        constructor() {
            this.main();
        }

        //our intro main function
        main() {
            //instructions
            var instructions: string = "\n\nMove your spaceship up and down \n\nwith the mouse, catch the \n\nbatteries and avoid the asteroids!";

            console.log("Intro");

            start = new createjs.Container();
                        
            //add background
            background = new objects.Background(assets.loader.getResult("house"));
            start.addChild(background);

            //add title to screen
            labelTitle = new objects.Label("T&J Chase", "80px");
            labelTitle.shadow = new createjs.Shadow("#FFFF00", 5, 5, 10);
            labelTitle.x = 126;
            labelTitle.y = 33;
            start.addChild(labelTitle);

            //add instructions to screen 
            labelInstru = new objects.Label("Instructions: " + instructions, "30px");
            labelInstru.shadow = new createjs.Shadow("#FFFF00", 5, 5, 10);
            labelInstru.x = 30;
            labelInstru.y = 134;
            start.addChild(labelInstru);

            //add button to screen
            btnPlay = new objects.Button(220, 350, assets.loader.getResult("play"));
            start.addChild(btnPlay);
            btnPlay.addEventListener("click", this.StartClicked);
        }

        //when the button was clicked change stage 
        private StartClicked() {
            stage.removeChild(start);
            start.removeAllChildren();
            start.removeAllEventListeners();
            currentStage = config.PLAY_STATE
            gameOver = 1;
            main();
        }
    }
}   