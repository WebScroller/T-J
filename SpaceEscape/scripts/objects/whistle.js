var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //WHISTLE CLASS*******************************************************************************************************
    var Whistle = (function (_super) {
        __extends(Whistle, _super);
        //CONSTRUCTOR*****************************************************************************************************
        function Whistle(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            //this.sound = "energyS";
            this.reset();
            this.name = "whistle";
        }
        //PRIVATE METHODS*************************************************************************************************
        //CHECK IF THE WHISTLE HAS LEFT THE SCREEN, THEN RESET
        Whistle.prototype.checkBounds = function () {
            if (this.x <= 0 - this.width) {
                gotWhistle = false;
                this.reset();
            }
        };
        //RESET THE WHISTLE WHEN IS OUT OF STAGE
        Whistle.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 380) + this.height); //THE WHISTLE STARTS AT A RANDOM LOCATION           
            this.x = 4000; //THE WHISTLE STARTS OUT OF STAGE          
        };
        //PUBLIC METHODS**************************************************************************************************
        //MOVE THE WHISTLE ACROSS THE SCREEN
        Whistle.prototype.update = function () {
            this.x -= this.dx;
            this.checkBounds();
        };
        return Whistle;
    })(objects.GameObject);
    objects.Whistle = Whistle;
})(objects || (objects = {}));
//# sourceMappingURL=whistle.js.map