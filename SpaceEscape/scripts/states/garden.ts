module states {
    export class Garden {
    
        //Constructor*******************************
        constructor() {
            this.main();
        }

        //UPDATE METHOD
        public update() {

            house.update();

            //MOUSE UPDATE
            if (catched) {                          //IF THE MOUSE GET CATCHED
                level_3.removeChild(mouse);         //REMOVE THE MOUSE FROM STAGE
                level_3.addChild(catchedMouse);     //ADD CATCHED MOUSE TO STAGE
                catchedMouse.update();              //UPDATE CATCHED MOUSE
                setTimeout(function () {            //TIME FUNCTION FOR THE CATCHED MOUSE IN STAGE
                    catched = false;
                    level_3.removeChild(catchedMouse); //WHEN COUNTER FINISH REMOVE CATCHED MOUSE
                    level_3.addChild(mouse);
                }, 500);
            } else {
                mouse.update();                     //IF THE MOUSE HAS NOT BEEN CATCHED UPDATE MOUSE
            }
        
            //CHEESE UPDATE
            if (gotCheese) {                    //IF THE MOUSE GOT THE CHEESE
                level_3.removeChild(cheese);    //REMOVE CHEESE FORM SATGE
                cheese.update();                //CONTINUE UPDATING THE CHEESE

            } else {                            //IF THE CHEESE WAS NOT GOTTEN 
                if (!level_3.contains(cheese))  //IF THE CHEESE IS NOT IN STAGE, ADD IT
                    level_3.addChild(cheese);
                cheese.update()                 //CONTINUE UPDATING THE CHEESE
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
             }

        //our main game function
        main() {

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


           

        }
    }
}    