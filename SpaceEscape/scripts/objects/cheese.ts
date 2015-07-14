﻿module objects {
    //Cheese class *******************************
    export class Cheese extends objects.GameObject {

        //Constructor**************************
        constructor(imageString: string) {
            super(imageString);
            this.dx = 5;
            this.sound = "energyS";
            this.reset();
            this.name = "cheese";        
        }

        //private method
        private checkBounds(): void {
            //check if cheese has left the screen then reset
            if (this.x <= 0 - this.width) {
                //outOfState = true;
                this.reset();

            }
        }

        //to reset the energy when is off of stage
        private reset(): void {
            this.y = Math.floor((Math.random() * 380) + this.height); //start energy at random location            
            this.x = 1800; //start enegy off stage
            game.addChild(cheese);
        }


        //public methods************************************
        public update(): void {
                this.x -= this.dx; //moves the cheese
                this.checkBounds();
        }
     }
  }
 