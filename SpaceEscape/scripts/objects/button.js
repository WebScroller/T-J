/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        //Constructor***********************************************
        function Button(x, y, buttonString) {
            _super.call(this, buttonString);
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }
        //function for the mouse listener (the mouse is over the button)
        Button.prototype.setButtonListeners = function () {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        };
        //change the alpha of the button 
        Button.prototype.onButtonOver = function () {
            this.alpha = 0.8;
        };
        //change the alpha of the button 
        Button.prototype.onButtonOut = function () {
            this.alpha = 1;
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map