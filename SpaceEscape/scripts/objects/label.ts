module objects {
    //class for the labels
    export class Label extends createjs.Text {
        //Contrsuctor***************************  
        constructor(text: string, size: string) {
            super(text, "bold " + size + " arial", "#FF0404");            
        }
    }
} 