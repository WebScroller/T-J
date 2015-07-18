module managers {
    export class Assets {
        //public properties 
        public loader: createjs.LoadQueue;
        
    //Constructor*************************
        constructor() {
            this.preload();
        }

        //all the objects that are load at the beginig of the game (Manifest)
        preload() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.on("complete", init, this);
            this.loader.loadManifest([
                { id: "house", src: "assets/images/background1.png" },
                { id: "kitchen", src: "assets/images/background2.png" },
                { id: "garden", src: "assets/images/background3.png" },
                { id: "mouse", src: "assets/images/mouse.png" },
                { id: "backIntro", src: "assets/images/backIntro3.png" },
                { id: "catchedMouse", src: "assets/images/catchedMouse.png" },
                { id: "cheese", src: "assets/images/cheese.png" },
                { id: "mouseTrap", src: "assets/images/mousetrap.png" },
                { id: "whistle", src: "assets/images/whistle.png" },
                { id: "dog", src: "assets/images/dog.png" },
                { id: "spanner", src: "assets/images/spanner.png" },
                { id: "play", src: "assets/images/play.png" },
                { id: "playAgain", src: "assets/images/playAgain.png" },
                { id: "cat", src: "assets/images/cat2.png" },
                { id: "cat3", src: "assets/images/cat3.png" },
                { id: "energyS", src: "assets/sounds/energySound.wav" },
                { id: "explotion", src: "assets/sounds/explotion.wav" },
                { id: "planeS", src: "assets/sounds/plane.wav" },
                { id: "gameOverS", src: "assets/sounds/gameOver.wav" },
               // { id: "music", src: "assets/sounds/music.mp3" },
            ]);
        }
    }
} 