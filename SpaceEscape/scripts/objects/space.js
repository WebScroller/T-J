var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //space class *******************************
    var Space = (function (_super) {
        __extends(Space, _super);
        //Constructor**************************
        function Space(imageString) {
            _super.call(this, imageString);
            this.dx = 2;
            this.x = 0;
            this.y = 0;
        }
        //private method
        Space.prototype.checkBounds = function () {
            //check if space has left the screen then reset
            if (this.x <= -1280) {
                this.reset();
            }
        };
        Space.prototype.reset = function () {
            this.y = 0;
            this.x = 0;
        };
        //public methods************************************
        Space.prototype.update = function () {
            this.x -= this.dx; //moves the space
            this.checkBounds();
        };
        return Space;
    })(createjs.Bitmap);
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map