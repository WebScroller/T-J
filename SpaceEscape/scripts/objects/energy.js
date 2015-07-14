var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //energy class *******************************
    var Energy = (function (_super) {
        __extends(Energy, _super);
        //Constructor**************************
        function Energy(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.sound = "energyS";
            this.reset();
            this.name = "energy";
        }
        //private method
        Energy.prototype.checkBounds = function () {
            //check if energy has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        };
        //to reset the energy when is off of stage
        Energy.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 380) + this.height); //start energy at random location
            this.x = 1800; //start enegy off stage
        };
        //public methods************************************
        Energy.prototype.update = function () {
            this.x -= this.dx; //moves the energy
            this.checkBounds();
        };
        return Energy;
    })(objects.GameObject);
    objects.Energy = Energy;
})(objects || (objects = {}));
//# sourceMappingURL=energy.js.map