var states;
(function (states) {
    var Play = (function () {
        //Constructor*******************************
        function Play() {
            this.main();
        }
        //update method
        Play.prototype.update = function () {
            //UPDATE BACKGROUND
            background.update();
            //MOUSE UPDATE
            if (catched) {
                game.removeChild(mouse); //REMOVE THE MOUSE FROM STAGE
                game.addChild(catchedMouse); //ADD CATCHED MOUSE TO STAGE
                catchedMouse.update(); //UPDATE CATCHED MOUSE
                setTimeout(function () {
                    catched = false;
                    game.removeChild(catchedMouse); //WHEN COUNTER FINISH REMOVE CATCHED MOUSE
                    game.addChild(mouse);
                }, 500);
            }
            else {
                mouse.update(); //IF THE MOUSE HAS NOT BEEN CATCHED UPDATE MOUSE
            }
            //CHEESE UPDATE
            if (gotCheese) {
                game.removeChild(cheese); //REMOVE CHEESE FORM SATGE
                cheese.update(); //CONTINUE UPDATING THE CHEESE
            }
            else {
                if (!game.contains(cheese))
                    game.addChild(cheese);
                cheese.update(); //CONTINUE UPDATING THE CHEESE
            }
            //CAT 1  UPDATE
            for (var cat = 0; cat < 3; cat++) {
                cats[cat].update();
                collision.check(cats[cat]);
            }
            //CHECK CHEESE COLLISION
            collision.check(cheese);
            //UPDATE SCOREBOARD
            scoreboard.update();
        };
        //our main game function
        Play.prototype.main = function () {
            console.log("Game is Running");
            //instantiate new game conatainer
            game = new createjs.Container();
            //add background
            background = new objects.Background(assets.loader.getResult("house"));
            game.addChild(background);
            //add energy objects to stage
            cheese = new objects.Cheese(assets.loader.getResult("cheese"));
            game.addChild(cheese);
            //add plane object to the stage
            mouse = new objects.Mouse(assets.loader.getResult("mouse"));
            game.addChild(mouse);
            catchedMouse = new objects.CatchedMouse(assets.loader.getResult("catchedMouse"));
            //add cat object to the stage
            for (var cat = 0; cat < 3; cat++) {
                cats[cat] = new objects.Cats(assets.loader.getResult("cat"));
                game.addChild(cats[cat]);
            }
            //add scoreboard 
            scoreboard = new objects.ScoreBord();
            game.addChild(scoreboard.livesLabel);
            game.addChild(scoreboard.scoreLabel);
            //add collision manager
            collision = new managers.Collision();
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map