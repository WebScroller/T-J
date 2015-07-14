var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Cheese class *******************************
    var Cheese = (function (_super) {
        __extends(Cheese, _super);
        //Constructor**************************
        function Cheese(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.sound = "energyS";
            this.reset();
            this.name = "cheese";
        }
        //private method
        Cheese.prototype.checkBounds = function () {
            //check if energy has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        };
        //to reset the energy when is off of stage
        Cheese.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 380) + this.height); //start energy at random location
            this.x = 1800; //start enegy off stage
        };
        //public methods************************************
        Cheese.prototype.update = function () {
            this.x -= this.dx; //moves the energy
            this.checkBounds();
        };
        return Cheese;
    })(objects.GameObject);
    objects.Cheese = Cheese;
})(objects || (objects = {}));
//# sourceMappingURL=cheese.js.map