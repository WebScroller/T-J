var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //energy class *******************************
    var Asteroid = (function (_super) {
        __extends(Asteroid, _super);
        //Constructor**************************
        function Asteroid(imageString) {
            _super.call(this, imageString);
            this.sound = "explotion";
            this.reset();
            this.name = "asteroid";
        }
        //private method*********************************************
        Asteroid.prototype.checkBounds = function () {
            //check if energy has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        };
        //reset function when the asteroids leave stage
        Asteroid.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 480)); //start island at random location
            this.x = 640; //start enegy off stage
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5;
        };
        //public methods************************************
        Asteroid.prototype.update = function () {
            this.x -= this.dx; //moves the energy
            this.y += this.dy; // moves the asteroids horizontal 
            this.checkBounds();
        };
        return Asteroid;
    })(objects.GameObject);
    objects.Asteroid = Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid.js.map