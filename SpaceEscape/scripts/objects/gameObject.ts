module objects {
    export class GameObject extends createjs.Bitmap {
        //Public properties **************************
        public width: number;
        public height: number;
        public isColliding: boolean = false;
        public sound: string = "";
        public name: string = "";

        //Protected properties **************************
        protected dx: number;
        protected dy: number;
        
        //Constructor**************************
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }  
    }
}
 