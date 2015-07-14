module objects {
    //Cat class *******************************
    export class Cats extends objects.GameObject {

         //Constructor**************************
        constructor(imageString: string) {
            super(imageString);
            this.sound = "explotion";
            this.reset();
            this.name = "tom"; 
        }  

        //private method*********************************************
        private checkBounds(): void {
            //check if energy has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        }

        //reset function when the asteroids leave stage
        private reset(): void {
            this.y = Math.floor((Math.random() * 480)); //start island at random location
            this.x = 640; //start enegy off stage
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5;
        }

 
        //public methods************************************
        public update(): void {
            this.x -= this.dx; //moves the energy
            this.y += this.dy; // moves the asteroids horizontal 
            this.checkBounds();
       }
    }
}

            