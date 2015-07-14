/// <reference path="../managers/assets.ts" />

module objects {
    export class Button extends createjs.Bitmap {
        //Constructor***********************************************
        constructor(x: number, y: number, buttonString: string) {
            super(buttonString);
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        //function for the mouse listener (the mouse is over the button)
        private setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        //change the alpha of the button 
        private onButtonOver() {
            this.alpha = 0.8;
        }

        //change the alpha of the button 
        private onButtonOut() {
            this.alpha = 1;
        }
    }
} 