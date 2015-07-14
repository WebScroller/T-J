var managers;
(function (managers) {
    var Assets = (function () {
        //Constructor*************************
        function Assets() {
            this.preload();
        }
        //all the objects that are load at the beginig of the game (Manifest)
        Assets.prototype.preload = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.on("complete", init, this);
            this.loader.loadManifest([
                { id: "house", src: "assets/images/background1.png" },
                { id: "mouse", src: "assets/images/mouse.png" },
                { id: "catchedMouse", src: "assets/images/catchedMouse.png" },
                { id: "cheese", src: "assets/images/cheese.png" },
                { id: "play", src: "assets/images/play.png" },
                { id: "playAgain", src: "assets/images/playAgain.png" },
                { id: "cat", src: "assets/images/cat.png" },
                { id: "energyS", src: "assets/sounds/energySound.wav" },
                { id: "explotion", src: "assets/sounds/explotion.wav" },
                { id: "planeS", src: "assets/sounds/plane.wav" },
                { id: "gameOverS", src: "assets/sounds/gameOver.wav" },
            ]);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map