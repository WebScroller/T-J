var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //CHEESE CLASS*******************************************************************************************************
    var Cheese = (function (_super) {
        __extends(Cheese, _super);
        //CONSTRUCTOR*****************************************************************************************************
        function Cheese(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.sound = "eat";
            this.reset();
            this.name = "cheese";
        }
        //PRIVATE METHODS*************************************************************************************************
        //CHECK IF THE CHEESE HAS LEFT THE SCREEN, THEN RESET
        Cheese.prototype.checkBounds = function () {
            if (this.x <= 0 - this.width) {
                //gotCheese = false;
                this.reset();
            }
        };
        //RESET THE CHEESE WHEN IS OUT OF STAGE
        Cheese.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 380) + this.height); //THE CHEESE STARTS AT A RANDOM LOCATION           
            this.x = 1800; //THE CHEESE STARTS OUT OF STAGE          
        };
        //PUBLIC METHODS**************************************************************************************************
        //MOVE THE CHEESE ACROSS THE SCREEN
        Cheese.prototype.update = function () {
            this.x -= this.dx;
            this.checkBounds();
        };
        return Cheese;
    })(objects.GameObject);
    objects.Cheese = Cheese;
})(objects || (objects = {}));
//# sourceMappingURL=cheese.js.map