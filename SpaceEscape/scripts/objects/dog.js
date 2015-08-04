var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //DOG CLASS*******************************************************************************************************
    var Dog = (function (_super) {
        __extends(Dog, _super);
        //CONSTRUCTOR*****************************************************************************************************
        function Dog(imageString) {
            _super.call(this, imageString);
            this.dx = 4;
            this.sound = "dogS";
            this.reset();
            this.name = "dog";
        }
        //PRIVATE METHODS*************************************************************************************************
        //CHECK IF THE DOG HAS LEFT THE SCREEN, THEN RESET
        Dog.prototype.checkBounds = function () {
            if (this.x >= 640 + this.width) {
                this.reset();
            }
        };
        //RESET THE DOG WHEN IS OUT OF STAGE
        Dog.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 330) + 150); //THE DOG STARTS AT A RANDOM LOCATION           
            this.x = -80; //THE DOG STARTS OUT OF STAGE    
            level_3.removeChild(dog);
        };
        //PUBLIC METHODS**************************************************************************************************
        //MOVE THE DOG ACROSS THE SCREEN
        Dog.prototype.update = function () {
            this.x += this.dx;
            this.checkBounds();
        };
        return Dog;
    })(objects.GameObject);
    objects.Dog = Dog;
})(objects || (objects = {}));
//# sourceMappingURL=dog.js.map