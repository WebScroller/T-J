module objects {
    //space class *******************************
    export class Space extends createjs.Bitmap {
        //Public properties **************************
        width: number;
        height: number;
        dx: number = 2;
        //Constructor**************************
        constructor(imageString: string) {
            super(imageString);
            this.x = 0;
            this.y = 0;
        }
        
        //private method
        private checkBounds(): void {
            //check if space has left the screen then reset
            if (this.x <= -1280) {
                this.reset();
            }
        }

        private reset(): void {
            this.y = 0;
            this.x = 0;            
       }
        
        //public methods************************************
        public update(): void {
            this.x -= this.dx; //moves the space
            this.checkBounds();
        }
    }
}
  