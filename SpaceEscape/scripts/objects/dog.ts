module objects {
    //DOG CLASS*******************************************************************************************************
    export class Dog extends objects.GameObject {


        //CONSTRUCTOR*****************************************************************************************************
        constructor(imageString: string) {
            super(imageString);
            this.dx = 4;
            //this.sound = "energyS";
            this.reset();
            this.name = "dog";
        }

        //PRIVATE METHODS*************************************************************************************************

        //CHECK IF THE DOG HAS LEFT THE SCREEN, THEN RESET
        private checkBounds(): void {
            if (this.x >= 640 + this.width) {
                this.reset();
            }
        }

        //RESET THE DOG WHEN IS OUT OF STAGE
        private reset(): void {
            this.y = Math.floor((Math.random() * 380) + this.height); //THE DOG STARTS AT A RANDOM LOCATION           
            this.x = -80;                                            //THE DOG STARTS OUT OF STAGE    
            level_3.removeChild(dog);      
        }

        //PUBLIC METHODS**************************************************************************************************

        //MOVE THE DOG ACROSS THE SCREEN
        public update(): void {
            this.x += this.dx;
            this.checkBounds();
        }
    }
}  