var states;
(function (states) {
    var Play = (function () {
        //Constructor*******************************
        function Play() {
            this.main();
        }
        //update method
        Play.prototype.update = function () {
            space.update();
            mouse.update(); //look for the mouse to change position
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
            space = new objects.Space(assets.loader.getResult("space"));
            game.addChild(space);
            //add energy objects to stage
            cheese = new objects.Cheese(assets.loader.getResult("cheese"));
            game.addChild(cheese);
            //add plane object to the stage
            mouse = new objects.Mouse(assets.loader.getResult("mouse"));
            game.addChild(mouse);
            //add cat object to the stage
            for (var cat = 0; cat < 3; cat++) {
                cats[cat] = new objects.Cats(assets.loader.getResult("cat"));
                game.addChild(cats[cat]);
            }
            //add scoreboard 
            scoreboard = new objects.ScoreBord();
            //add collision manager
            collision = new managers.Collision();
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map