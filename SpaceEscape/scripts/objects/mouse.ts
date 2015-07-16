module objects {
    //plane class *******************************
    export class Mouse extends objects.GameObject{

         //Constructor**************************
        constructor(imageString: string) {
            super(imageString);
            this.x = 55;
            this.name = "mouse"; 
        }

        //public methods************************************
        public update(): void {
            this.y = stage.mouseY;  //position of the plain over the mouse
        }

    }

} 