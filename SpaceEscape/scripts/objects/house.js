var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //house class *******************************
    var House = (function (_super) {
        __extends(House, _super);
        //Constructor**************************
        function House(imageString) {
            _super.call(this, imageString);
            this.dx = 2;
            this.x = 0;
            this.y = 0;
        }
        //private method
        House.prototype.checkBounds = function () {
            //check if house has left the screen then reset
            if (this.x <= -1280) {
                this.reset();
            }
        };
        House.prototype.reset = function () {
            this.y = 0;
            this.x = 0;
        };
        //public methods************************************
        House.prototype.update = function () {
            this.x -= this.dx; //moves the house
            this.checkBounds();
        };
        return House;
    })(createjs.Bitmap);
    objects.House = House;
})(objects || (objects = {}));
//# sourceMappingURL=house.js.map