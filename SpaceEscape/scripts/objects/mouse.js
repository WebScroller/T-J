var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //plane class *******************************
    var Mouse = (function (_super) {
        __extends(Mouse, _super);
        //Constructor**************************
        function Mouse(imageString) {
            _super.call(this, imageString);
            this.x = 55;
        }
        //public methods************************************
        Mouse.prototype.update = function () {
            this.y = stage.mouseY; //position of the plain over the mouse
        };
        return Mouse;
    })(objects.GameObject);
    objects.Mouse = Mouse;
})(objects || (objects = {}));
//# sourceMappingURL=mouse.js.map