module objects {
    //WHISTLE CLASS*******************************************************************************************************
    export class Whistle extends objects.GameObject {

        //CONSTRUCTOR*****************************************************************************************************
        constructor(imageString: string) {
            super(imageString);
            this.dx = 7;
            this.sound = "whistleS";
            this.reset();
            this.name = "whistle";
        }

        //PRIVATE METHODS*************************************************************************************************

        //CHECK IF THE WHISTLE HAS LEFT THE SCREEN, THEN RESET
        private checkBounds(): void {
            if (this.x <= 0 - this.width) {
                gotWhistle = false;
                this.reset();
            }
        }

        //RESET THE WHISTLE WHEN IS OUT OF STAGE
        private reset(): void {
            this.y = Math.floor((Math.random() * 380) + this.height); //THE WHISTLE STARTS AT A RANDOM LOCATION           
            this.x = 5000;                                            //THE WHISTLE STARTS OUT OF STAGE          
        }

        //PUBLIC METHODS**************************************************************************************************

        //MOVE THE WHISTLE ACROSS THE SCREEN
        public update(): void {
            this.x -= this.dx;
            this.checkBounds();
        }
    }
} 