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
            this.sound = "catch";
            this.reset();
            this.name = "cat";
        }
        //private method*********************************************
        Cats.prototype.checkBounds = function () {
            //check if cat has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        };
        //reset function when the cat leave stage
        Cats.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 480)); //start cat at random location
            this.x = Math.floor(Math.random() * 100) + 640;
            this.x = 640; //start cat off stage
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5;
        };
        //public methods************************************
        Cats.prototype.update = function () {
            this.x -= this.dx; //moves the cat
            this.y += this.dy; // moves the cat horizontal 
            this.checkBounds();
        };
        return Cats;
    })(objects.GameObject);
    objects.Cats = Cats;
})(objects || (objects = {}));
//# sourceMappingURL=cats.js.map