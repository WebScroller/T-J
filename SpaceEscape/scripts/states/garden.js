var states;
(function (states) {
    var Garden = (function () {
        //CONSTRUCTOR******************************************************************************************************
        function Garden() {
            this.main();
        }
        //UPDATE METHOD****************************************************************************************************
        Garden.prototype.update = function () {
            //UPDATE BACKGROUND
            background.update();
            //MOUSE UPDATE
            if (catched) {
                level_3.removeChild(mouse); //REMOVE THE MOUSE FROM STAGE
                level_3.addChild(catchedMouse); //ADD CATCHED MOUSE TO STAGE
                catchedMouse.update(); //UPDATE CATCHED MOUSE
                setTimeout(function () {
                    catched = false;
                    level_3.removeChild(catchedMouse); //WHEN COUNTER FINISH REMOVE CATCHED MOUSE
                    level_3.addChild(mouse);
                }, 500);
            }
            else {
                mouse.update(); //IF THE MOUSE HAS NOT BEEN CATCHED UPDATE MOUSE
            }
            //CHEESE UPDATE
            cheese.update();
            //CAT 1  UPDATE
            for (var cat = 0; cat < 3; cat++) {
                if (level_3.contains(dog)) {
                    cats[cat].update();
                    collision.checkMC(mouse, cats[cat]);
                    collision.checkDC(dog, cats[cat]);
                }
                else {
                    cats[cat].update();
                    collision.checkMC(mouse, cats[cat]);
                }
            }
            //CAT 2  UPDATE
            for (var cat = 0; cat < 3; cat++) {
                if (level_3.contains(dog)) {
                    cats2[cat].update();
                    collision.checkMC(mouse, cats2[cat]);
                    collision.checkDC(dog, cats2[cat]);
                }
                else {
                    cats2[cat].update();
                    collision.checkMC(mouse, cats2[cat]);
                }
            }
            //WHISTLE UPDATE
            if (gotWhistle) {
                level_3.removeChild(whistle); //REMOVE WHISTLE FORM SATGE
                level_3.addChild(dog);
                whistle.update(); //CONTINUE UPDATING THE WHISTLE
            }
            else {
                if (!level_3.contains(whistle))
                    level_3.addChild(whistle);
                whistle.update(); //CONTINUE UPDATING THE WHISTLE
            }
            //DOG UPDATE
            if (level_3.contains(dog)) {
                dog.update();
            }
            //CHECK CHEESE COLLISION
            collision.checkMC(mouse, cheese);
            //CHECK WHISTLE COLLISION
            collision.checkMC(mouse, whistle);
            //UPDATE SCOREBOARD
            scoreboard.update();
        };
        //MAIN FUNCTION*****************************************************************************************************
        Garden.prototype.main = function () {
            console.log("Game is in level 3");
            //INSTANTIATE LEVEL 3 CONTAINER 
            level_3 = new createjs.Container();
            //INSTANTIATE & ADD BACKGROUND TO STAGE
            background = new objects.Background(assets.loader.getResult("garden"));
            level_3.addChild(background);
            //INSTANTIATE & ADD CHEESE TO STAGE
            cheese = new objects.Cheese(assets.loader.getResult("cheese"));
            level_3.addChild(cheese);
            //INSTANTIATE & ADD MOUSE TO THE STAGE
            mouse = new objects.Mouse(assets.loader.getResult("mouse"));
            level_3.addChild(mouse);
            //INSTANTIATE CATCHED MOUSE
            catchedMouse = new objects.CatchedMouse(assets.loader.getResult("catchedMouse"));
            //INSTANTIATE & ADD CAT1 TO THE STAGE
            for (var cat = 0; cat < 3; cat++) {
                cats[cat] = new objects.Cats(assets.loader.getResult("cat3"));
                level_3.addChild(cats[cat]);
            }
            //INSTANTIATE & ADD CAT2 TO THE STAGE
            for (var cat = 0; cat < 3; cat++) {
                cats2[cat] = new objects.Cats(assets.loader.getResult("cat"));
                level_3.addChild(cats2[cat]);
            }
            //INSTANTIATE & ADD WHISTLE TO STAGE
            whistle = new objects.Whistle(assets.loader.getResult("whistle"));
            level_3.addChild(whistle);
            //INSTANTIATE THE DOG TO STAGE
            dog = new objects.Dog(assets.loader.getResult("dog"));
            ////INSTANTIATE COLLITION MANAGER
            collision = new managers.Collision();
            ////INSTANTIATE & ADD SCOREBOARD TO THE STAGE 
            scoreboard = new objects.ScoreBord();
            level_3.addChild(scoreboard.livesLabel);
            level_3.addChild(scoreboard.scoreLabel);
        };
        return Garden;
    })();
    states.Garden = Garden;
})(states || (states = {}));
//# sourceMappingURL=garden.js.map