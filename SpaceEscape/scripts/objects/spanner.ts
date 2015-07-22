module objects {
    //Spanner CLASS*******************************************************************************************************
    export class Spanner extends objects.GameObject {

        //CONSTRUCTOR*****************************************************************************************************
        constructor(imageString: string) {
            super(imageString);
            this.dx = 7;
            //this.sound = "energyS";
            this.reset();
            this.name = "spanner";
        }

        //PRIVATE METHODS*************************************************************************************************

       
         //CHECK IF THE SPANNER HAS LEFT THE SCREEN, THEN RESET
        private checkBounds(): void {
            if (this.x >= 640 + this.width) {
                level_2.removeChild(spanner);
            }
        }
         
        //RESET THE SPANNER WHEN IS OUT OF STAGE
        private reset(): void {
            this.y = stage.mouseY;                                  //THE SPANNER STARTS AT A RANDOM LOCATION           
            this.x = 55 + this.x;                                            //THE SPANNER STARTS OUT OF STAGE          
        }
       

        //PUBLIC METHODS**************************************************************************************************

        //MOVE THE SPANNER ACROSS THE SCREEN
        public update(): void {
            this.x += this.dx;
            this.checkBounds();
        }


    }
} 