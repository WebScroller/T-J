module states {
    export class Garden {
    
        //CONSTRUCTOR******************************************************************************************************
        constructor() {
            this.main();
        }

        //UPDATE METHOD****************************************************************************************************
        public update() {

            //UPDATE BACKGROUND
            background.update();

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

            //WHISTLE UPDATE
            if (gotWhistle) {                    //IF THE MOUSE GOT THE WHISTLE
                level_3.removeChild(whistle);    //REMOVE WHISTLE FORM SATGE
                level_3.addChild(dog);
                whistle.update();                //CONTINUE UPDATING THE WHISTLE

            } else {                            //IF THE WHISTLE WAS NOT GOTTEN 
                if (!level_3.contains(whistle))  //IF THE WHISTLE IS NOT IN STAGE, ADD IT
                    level_3.addChild(whistle);
                whistle.update()                 //CONTINUE UPDATING THE WHISTLE
            }

            //DOG UPDATE
            if (level_3.contains(dog))
                dog.update();

            //CHECK CHEESE COLLISION
            collision.check(cheese);

            //CHECK WHISTLE COLLISION
            collision.check(whistle);

            //UPDATE SCOREBOARD
            scoreboard.update();

            }

        //MAIN FUNCTION*****************************************************************************************************
        main() {

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
        }
    }
}    