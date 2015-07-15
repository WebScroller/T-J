var states;
(function (states) {
    var Play = (function () {
        //Constructor*******************************
        function Play() {
            this.main();
        }
        //update method
        Play.prototype.update = function () {
            house.update();
            if (catched) {
                game.removeChild(mouse);
                game.addChild(catchedMouse);
                catchedMouse.update();
                setTimeout(function () {
                    catched = false;
                    game.removeChild(catchedMouse);
                    game.addChild(mouse);
                }, 500);
            }
            else {
                mouse.update(); //look for the mouse to change position
            }
            cheese.update(); //update the position of the cheese
            for (var cat = 0; cat < 3; cat++) {
                cats[cat].update();
                collision.check(cats[cat]);
            }
            //update the scoreboard
            scoreboard.update();
            //checkCollision(cheese);
            collision.check(cheese);
        };
        //our main game function
        Play.prototype.main = function () {
            console.log("Game is Running");
            //instantiate new game conatainer
            game = new createjs.Container();
            //add background
            house = new objects.House(assets.loader.getResult("house"));
            game.addChild(house);
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