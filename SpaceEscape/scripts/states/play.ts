module states{
    export class Play{
        //Constructor*******************************
        constructor() {
            this.main();
        }

        //update method
        public update() {
            house.update();
            if (catched) {
                catchedMouse.update();
                setTimeout(function () {
                catched = false;
                game.removeChild(catchedMouse);
                game.addChild(mouse);
                }, 500);

            } else {
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
        }

        //our main game function
        main() {
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

            //add collision manager
            collision = new managers.Collision();            
        }
    }
} 