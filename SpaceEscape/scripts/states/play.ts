module states{
    export class Play{
        //Constructor*******************************
        constructor() {
            this.main();
        }

        //update method
        public update() {

            //UPDATE BACKGROUND
            background.update();

            //MOUSE UPDATE
            if (catched) {                          //IF THE MOUSE GET CATCHED
                level_1.removeChild(mouse);         //REMOVE THE MOUSE FROM STAGE
                level_1.addChild(catchedMouse);     //ADD CATCHED MOUSE TO STAGE
                catchedMouse.update();              //UPDATE CATCHED MOUSE
                setTimeout(function () {            //TIME FUNCTION FOR THE CATCHED MOUSE IN STAGE
                    catched = false;
                    level_1.removeChild(catchedMouse); //WHEN COUNTER FINISH REMOVE CATCHED MOUSE
                    level_1.addChild(mouse);
                }, 500);
            } else {
                mouse.update();                     //IF THE MOUSE HAS NOT BEEN CATCHED UPDATE MOUSE
            }
            
            //CHEESE UPDATE
            if (gotCheese) {                    //IF THE MOUSE GOT THE CHEESE
                level_1.removeChild(cheese);    //REMOVE CHEESE FORM SATGE
                cheese.update();                //CONTINUE UPDATING THE CHEESE

            } else {                            //IF THE CHEESE WAS NOT GOTTEN 
                if (!level_1.contains(cheese))  //IF THE CHEESE IS NOT IN STAGE, ADD IT
                    level_1.addChild(cheese);
                cheese.update()                 //CONTINUE UPDATING THE CHEESE
            }

            //CAT 1  UPDATE
            for (var cat = 0; cat < 3; cat++) {
                cats[cat].update();
                collision.checkMC(mouse, cats[cat]);                
            }   

            //CHECK CHEESE COLLISION
            collision.checkMC(mouse, cheese);

            //UPDATE SCOREBOARD
            scoreboard.update();

        }

        //our main game function
        main() {
            console.log("Game is Running");

            //instantiate new game conatainer
            level_1 = new createjs.Container();

            //add background
            background = new objects.Background(assets.loader.getResult("house"));
            level_1.addChild(background);

            //add energy objects to stage
            cheese = new objects.Cheese(assets.loader.getResult("cheese"));
            level_1.addChild(cheese);

            //add plane object to the stage
            mouse = new objects.Mouse(assets.loader.getResult("mouse"));            
            level_1.addChild(mouse);

            catchedMouse = new objects.CatchedMouse(assets.loader.getResult("catchedMouse"));

            //add cat object to the stage
            for (var cat = 0; cat < 3; cat++) {
                cats[cat] = new objects.Cats(assets.loader.getResult("cat"));
                level_1.addChild(cats[cat]);
            }

            //add scoreboard 
            scoreboard = new objects.ScoreBord();
            level_1.addChild(scoreboard.livesLabel);
            level_1.addChild(scoreboard.scoreLabel);

            //add collision manager
            collision = new managers.Collision();            
        }
    }
} 