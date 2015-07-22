var states;
(function (states) {
    var Kitchen = (function () {
        //CONSTRUCTOR***************************************************************************************
        function Kitchen() {
            this.main();
        }
        //UPDATE METHOD**************************************************************************************
        Kitchen.prototype.update = function () {
            //UPDATE BACKGROUND
            background.update();
            //UPDATE MOUSE
            if (catched) {
                level_2.removeChild(mouse); //REMOVE THE MOUSE FROM STAGE
                level_2.addChild(catchedMouse); //ADD CATCHED MOUSE TO STAGE
                catchedMouse.update(); //UPDATE CATCHED MOUSE
                setTimeout(function () {
                    catched = false;
                    level_2.removeChild(catchedMouse); //WHEN THE COUNTER FINISH REMOVE CATCHED MOUSE
                    level_2.addChild(mouse);
                }, 500);
            }
            else {
                mouse.update(); //IF THE MOUSE HAS NOT BEEN CAUGHT UPDATE MOUSE
            }
            //CHEESE UPDATE
            cheese.update();
            //CAT 1 UPDATE
            for (var cat = 0; cat < 3; cat++) {
                cats[cat].update();
                collision.checkMC(mouse, cats[cat]);
            }
            //MOUSE TRAP UPDATE
            for (var traps = 0; traps < 2; traps++) {
                mouseTrap[traps].update();
                collision.checkMT(mouse, mouseTrap[traps]);
                if (level_2.contains(spanner)) {
                    collision.checkST(spanner, mouseTrap[traps]);
                }
            }
            //SPANNER UPDATE
            if (level_2.contains(spanner))
                spanner.update();
            //CHECK CHEESE COLLISION
            collision.checkMC(mouse, cheese);
            //UPDATE SCOREBOARD
            scoreboard.update();
        };
        //CREATS SPANNER IF THE MOUSE IS CLICKED
        Kitchen.prototype.click = function () {
            if (!level_2.contains(spanner)) {
                spanner = new objects.Spanner(assets.loader.getResult("spanner"));
                level_2.addChild(spanner);
            }
        };
        //MAIN FUNCTION*************************************************************************************
        Kitchen.prototype.main = function () {
            console.log("Game is in level 2");
            //INSTANTIATE LEVEL 2 CONTAINER
            level_2 = new createjs.Container();
            //INSTANTIATE & ADD BACKGROUND TO STAGE
            background = new objects.Background(assets.loader.getResult("kitchen"));
            level_2.addChild(background);
            //INSTANTIATE & ADD CHEESE TO STAGE
            cheese = new objects.Cheese(assets.loader.getResult("cheese"));
            level_2.addChild(cheese);
            //INSTANTIATE & ADD MOUSE TO THE STAGE
            mouse = new objects.Mouse(assets.loader.getResult("mouse"));
            level_2.addChild(mouse);
            //INSTANTIATE CATCHED MOUSE
            catchedMouse = new objects.CatchedMouse(assets.loader.getResult("catchedMouse"));
            //INSTANTIATE & ADD CAT1 TO THE STAGE
            for (var cat = 0; cat < 3; cat++) {
                cats[cat] = new objects.Cats(assets.loader.getResult("cat3"));
                level_2.addChild(cats[cat]);
            }
            //INSTANTIATE & ADD MOUSE TRAP TO THE STAGE
            for (var traps = 0; traps < 2; traps++) {
                mouseTrap[traps] = new objects.MouseTrap(assets.loader.getResult("mouseTrap"));
                level_2.addChild(mouseTrap[traps]);
            }
            //INSTANTIATE COLLISION MANAGER
            collision = new managers.Collision();
            //INDTANTIATE & ADD SCOREBOARD TO THE STAGE
            scoreboard = new objects.ScoreBord();
            level_2.addChild(scoreboard.livesLabel);
            level_2.addChild(scoreboard.scoreLabel);
        };
        return Kitchen;
    })();
    states.Kitchen = Kitchen;
})(states || (states = {}));
//# sourceMappingURL=kitchen.js.map