var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //plane class *******************************
    var CatchedMouse = (function (_super) {
        __extends(CatchedMouse, _super);
        //Constructor**************************
        function CatchedMouse(imageString) {
            _super.call(this, imageString);
            this.x = 55;
        }
        //public methods************************************
        CatchedMouse.prototype.update = function () {
            this.y = stage.mouseY; //position of the plain over the mouse
        };
        return CatchedMouse;
    })(objects.GameObject);
    objects.CatchedMouse = CatchedMouse;
})(objects || (objects = {}));
//# sourceMappingURL=catchedmouse.js.map