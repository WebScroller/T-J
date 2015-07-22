/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../game.ts" />
var states;
(function (states) {
    var Over = (function () {
        //Constructor*******************************
        function Over() {
            this.main();
        }
        //UPDATE METHOD****************************************************************************************************
        Over.prototype.update = function () {
            //UPDATE BACKGROUND
            background.update();
        };
        //our main game function
        Over.prototype.main = function () {
            console.log("Game is Over");
            gOver = new createjs.Container();
            //add background
            background = new objects.Background(assets.loader.getResult("backIntro"));
            gOver.addChild(background);
            //add text Game over
            labelText = new objects.Label("Game Over!", "80px");
            labelText.shadow = new createjs.Shadow("#005C57", 5, 5, 10);
            labelText.x = 120;
            labelText.y = 70;
            gOver.addChild(labelText);
            //add score
            labelScore = new objects.Label("Your score is: " + score, "40px");
            labelScore.shadow = new createjs.Shadow("#005C57", 5, 5, 10);
            labelScore.x = 120;
            labelScore.y = 200;
            gOver.addChild(labelScore);
            //add btn to play again
            btnPlayAgain = new objects.Button(200, 325, assets.loader.getResult("playAgain"));
            gOver.addChild(btnPlayAgain);
            btnPlayAgain.addEventListener("click", this.tryAgainClicked);
        };
        //try again function
        Over.prototype.tryAgainClicked = function () {
            createjs.Sound.play("music", { "loop": -1, "volume": .1 });
            stage.removeChild(gOver);
            gOver.removeAllChildren();
            gOver.removeAllEventListeners();
            gameOver = 0;
            currentStage = config.INRO_STATE;
            main();
        };
        return Over;
    })();
    states.Over = Over;
})(states || (states = {}));
//# sourceMappingURL=over.js.map