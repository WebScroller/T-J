module objects {
    //CHEESE CLASS*******************************************************************************************************
    export class Cheese extends objects.GameObject {

        //CONSTRUCTOR*****************************************************************************************************
        constructor(imageString: string) {
            super(imageString);
            this.dx = 5;
            this.sound = "eat";
            this.reset();
            this.name = "cheese";        
        }

        //PRIVATE METHODS*************************************************************************************************

        //CHECK IF THE CHEESE HAS LEFT THE SCREEN, THEN RESET
        private checkBounds(): void {
            if (this.x <= 0 - this.width) {
                //gotCheese = false;
                this.reset();
            }
        }

        //RESET THE CHEESE WHEN IS OUT OF STAGE
        public reset(): void {
            this.y = Math.floor((Math.random() * 380) + this.height); //THE CHEESE STARTS AT A RANDOM LOCATION           
            this.x = 1800;                                            //THE CHEESE STARTS OUT OF STAGE          
        }

        //PUBLIC METHODS**************************************************************************************************

        //MOVE THE CHEESE ACROSS THE SCREEN
        public update(): void {
                this.x -= this.dx; 
                this.checkBounds();
        }
     }
  }
 