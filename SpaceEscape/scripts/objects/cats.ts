module objects {
    //Cat class *******************************
    export class Cats extends objects.GameObject {

         //Constructor**************************
        constructor(imageString: string) {
            super(imageString);
            this.sound = "explotion";
            this.reset();
            this.name = "cat"; 
        }  

        //private method*********************************************
        private checkBounds(): void {
            //check if cat has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        }

        //reset function when the cat leave stage
        public reset(): void {
            this.y = Math.floor((Math.random() * 480)); //start cat at random location
            this.x = Math.floor(Math.random() * 100) + 640;
            this.x = 640; //start cat off stage
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5; 
               
        }

 
        //public methods************************************
        public update(): void {
            this.x -= this.dx; //moves the cat
            this.y += this.dy; // moves the cat horizontal 
            this.checkBounds();
       }
    }
}

            