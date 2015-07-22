module objects {
    //MOUSE TRAP CLASS*******************************************************************
    export class MouseTrap extends objects.GameObject {

        //CONSTRUCTOR********************************************************************
        constructor(imageString: string) {
            super(imageString);
            this.dx = 5;
            this.sound = "catch";
            this.reset();
            this.name = "mouseTrap";
        }

        //PRIVATE METHODS*************************************************************************************************

        //CHECK IF THE MOUSE TRAP HAS LEFT THE SCREEN, THEN RESET
        private checkBounds(): void {
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        }

        //RESET THE MOUSE TRAP WHEN IS OUT OF STAGE
        public reset(): void {
            this.y = Math.floor((Math.random() * 480));
            this.x = Math.floor(Math.random() * 200) + 640;
            this.x = 640; //start cat off stage
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5; 
               
        }

        //PUBLIC METHODS**************************************************************************************************

        //MOVE THE MOUSE TRAP ACROSS THE SCREEN
        public update(): void {
            this.x -= this.dx;
            this.checkBounds();
        }
    }
} 