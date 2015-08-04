var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //MOUSE TRAP CLASS*******************************************************************
    var MouseTrap = (function (_super) {
        __extends(MouseTrap, _super);
        //CONSTRUCTOR********************************************************************
        function MouseTrap(imageString) {
            _super.call(this, imageString);
            this.dx = 3;
            this.sound = "catch";
            this.reset();
            this.name = "mouseTrap";
        }
        //PRIVATE METHODS*************************************************************************************************
        //CHECK IF THE MOUSE TRAP HAS LEFT THE SCREEN, THEN RESET
        MouseTrap.prototype.checkBounds = function () {
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        };
        //RESET THE MOUSE TRAP WHEN IS OUT OF STAGE
        MouseTrap.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 138) + 342);
            this.x = Math.floor(Math.random() * 200) + 640;
            this.x = 640; //start cat off stage
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5;
        };
        //PUBLIC METHODS**************************************************************************************************
        //MOVE THE MOUSE TRAP ACROSS THE SCREEN
        MouseTrap.prototype.update = function () {
            this.x -= this.dx;
            this.checkBounds();
        };
        return MouseTrap;
    })(objects.GameObject);
    objects.MouseTrap = MouseTrap;
})(objects || (objects = {}));
//# sourceMappingURL=mousetrap.js.map