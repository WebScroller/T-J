var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //house class *******************************
    var Background = (function (_super) {
        __extends(Background, _super);
        //Constructor**************************
        function Background(imageString) {
            _super.call(this, imageString);
            this.dx = 3;
            this.x = 0;
            this.y = 0;
        }
        //private method
        Background.prototype.checkBounds = function () {
            //check if background has left the screen then reset
            if (this.x <= -1280) {
                this.reset();
            }
        };
        Background.prototype.reset = function () {
            this.y = 0;
            this.x = 0;
        };
        //public methods************************************
        Background.prototype.update = function () {
            this.x -= this.dx; //moves the background
            this.checkBounds();
        };
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map