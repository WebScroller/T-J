var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Spanner CLASS*******************************************************************************************************
    var Spanner = (function (_super) {
        __extends(Spanner, _super);
        //CONSTRUCTOR*****************************************************************************************************
        function Spanner(imageString) {
            _super.call(this, imageString);
            this.dx = 7;
            this.sound = "spannerS";
            this.reset();
            this.name = "spanner";
        }
        //PRIVATE METHODS*************************************************************************************************
        //CHECK IF THE SPANNER HAS LEFT THE SCREEN, THEN RESET
        Spanner.prototype.checkBounds = function () {
            if (this.x >= 640 + this.width) {
                level_2.removeChild(spanner);
            }
        };
        //RESET THE SPANNER WHEN IS OUT OF STAGE
        Spanner.prototype.reset = function () {
            this.y = stage.mouseY; //THE SPANNER STARTS AT A RANDOM LOCATION           
            this.x = 55 + this.x; //THE SPANNER STARTS OUT OF STAGE          
        };
        //PUBLIC METHODS**************************************************************************************************
        //MOVE THE SPANNER ACROSS THE SCREEN
        Spanner.prototype.update = function () {
            this.x += this.dx;
            this.checkBounds();
        };
        return Spanner;
    })(objects.GameObject);
    objects.Spanner = Spanner;
})(objects || (objects = {}));
//# sourceMappingURL=spanner.js.map