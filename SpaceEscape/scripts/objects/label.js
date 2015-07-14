var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //class for the labels
    var Label = (function (_super) {
        __extends(Label, _super);
        //Contrsuctor***************************  
        function Label(text, size) {
            _super.call(this, text, size + " Consolas", "#28E90F");
        }
        return Label;
    })(createjs.Text);
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map