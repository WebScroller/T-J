var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Cat class *******************************
    var Cats = (function (_super) {
        __extends(Cats, _super);
        //Constructor**************************
        function Cats(imageString) {
            _super.call(this, imageString);
            this.sound = "explotion";
            this.reset();
            this.name = "tom";
        }
        //private method*********************************************
        Cats.prototype.checkBounds = function () {
            //check if energy has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        };
        //reset function when the asteroids leave stage
        Cats.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 480)); //start island at random location
            this.x = 640; //start enegy off stage
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5;
        };
        //public methods************************************
        Cats.prototype.update = function () {
            this.x -= this.dx; //moves the energy
            this.y += this.dy; // moves the asteroids horizontal 
            this.checkBounds();
        };
        return Cats;
    })(objects.GameObject);
    objects.Cats = Cats;
})(objects || (objects = {}));
//# sourceMappingURL=cats.js.map