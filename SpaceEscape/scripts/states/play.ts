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
                game.removeChild(mouse);         //REMOVE THE MOUSE FROM STAGE
                game.addChild(catchedMouse);     //ADD CATCHED MOUSE TO STAGE
                catchedMouse.update();              //UPDATE CATCHED MOUSE
                setTimeout(function () {            //TIME FUNCTION FOR THE CATCHED MOUSE IN STAGE
                    catched = false;
                    game.removeChild(catchedMouse); //WHEN COUNTER FINISH REMOVE CATCHED MOUSE
                    game.addChild(mouse);
                }, 500);
            } else {
                mouse.update();                     //IF THE MOUSE HAS NOT BEEN CATCHED UPDATE MOUSE
            }
            
            //CHEESE UPDATE
            if (gotCheese) {                    //IF THE MOUSE GOT THE CHEESE
                game.removeChild(cheese);    //REMOVE CHEESE FORM SATGE
                cheese.update();                //CONTINUE UPDATING THE CHEESE

            } else {                            //IF THE CHEESE WAS NOT GOTTEN 
                if (!game.contains(cheese))  //IF THE CHEESE IS NOT IN STAGE, ADD IT
                    game.addChild(cheese);
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
        }
    }
} 