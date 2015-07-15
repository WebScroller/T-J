var states;
(function (states) {
    var Garden = (function () {
        //Constructor*******************************
        function Garden() {
            this.main();
        }
        //UPDATE METHOD
        Garden.prototype.update = function () {
            house.update();
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
            if (gotCheese) {
                level_3.removeChild(cheese); //REMOVE CHEESE FORM SATGE
                cheese.update(); //CONTINUE UPDATING THE CHEESE
            }
            else {
                if (!level_3.contains(cheese))
                    level_3.addChild(cheese);
                cheese.update(); //CONTINUE UPDATING THE CHEESE
            }
            //CAT 1  UPDATE
            for (var cat = 0; cat < 3; cat++) {
                cats[cat].update();
                collision.check(cats[cat]);
            }
            //CAT 2  UPDATE
            for (var cat = 0; cat < 3; cat++) {
                cats2[cat].update();
                collision.check(cats2[cat]);
            }
            //CHECK CHEESE COLLISION
            collision.check(cheese);
            //UPDATE SCOREBOARD
            scoreboard.update();
            //house.update();
            /*
                        cheese.update(); //update the position of the cheese
            
            
            
                        for (var cat = 0; cat < 3; cat++) {
                            cats[cat].update();
                            collision.check(cats[cat]);
            
                        }
                         
            
            
                     
                  */
        };
        //our main game function
        Garden.prototype.main = function () {
            console.log("Game is in level 3");
            //instantiate new game conatainer
            level_3 = new createjs.Container();
            //add background
            house = new objects.House(assets.loader.getResult("garden"));
            level_3.addChild(house);
            //add cheese objects to stage
            cheese = new objects.Cheese(assets.loader.getResult("cheese"));
            level_3.addChild(cheese);
            //add plane object to the stage
            mouse = new objects.Mouse(assets.loader.getResult("mouse"));
            level_3.addChild(mouse);
            catchedMouse = new objects.CatchedMouse(assets.loader.getResult("catchedMouse"));
            //add cat object to the stage
            for (var cat = 0; cat < 3; cat++) {
                cats[cat] = new objects.Cats(assets.loader.getResult("cat3"));
                level_3.addChild(cats[cat]);
            }
            for (var cat = 0; cat < 3; cat++) {
                cats2[cat] = new objects.Cats(assets.loader.getResult("cat"));
                level_3.addChild(cats2[cat]);
            }
            //add collision manager
            collision = new managers.Collision();
            //add scoreboard 
            scoreboard = new objects.ScoreBord();
            level_3.addChild(scoreboard.livesLabel);
            level_3.addChild(scoreboard.scoreLabel);
        };
        return Garden;
    })();
    states.Garden = Garden;
})(states || (states = {}));
//# sourceMappingURL=garden.js.map