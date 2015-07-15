module states {
    export class Garden {
    
        //Constructor*******************************
        constructor() {
            this.main();
        }

        //update method
        public update() {
         //   mouse.update(); //look for the mouse to change position
            cheese.update();
            for (var cat = 0; cat < 3; cat++) {
                cats[cat].update();
                collision.check(cats[cat]);
            }   
            for (var cat = 0; cat < 3; cat++) {
                cats2[cat].update();
                collision.check(cats2[cat]);
            }   
            //checkCollision(cheese);
            collision.check(cheese);

            //update the scoreboard
            scoreboard.update();

           //house.update();
        if (catched) {
                
            level_3.removeChild(mouse);
            level_3.addChild(catchedMouse); 
            catchedMouse.update();           
                setTimeout(function () {
                    catched = false;

                    level_3.removeChild(catchedMouse);
                    level_3.addChild(mouse);
                }, 500);

            } else {
                mouse.update(); //look for the mouse to change position
            }
/* 
            cheese.update(); //update the position of the cheese



            for (var cat = 0; cat < 3; cat++) {
                cats[cat].update();
                collision.check(cats[cat]);

            }   
             


         
      */
             }

        //our main game function
        main() {

            console.log("Game is in level 3");
                        
            //instantiate new game conatainer
            level_3 = new createjs.Container();
            
            //add background
            background3 = new objects.House(assets.loader.getResult("garden"));
            level_3.addChild(background3);
            
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


           

        }
    }
}    