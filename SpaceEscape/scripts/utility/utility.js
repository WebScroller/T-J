var utility;
(function (utility) {
    //distance utillity function 
    function distance(p1, p2) {
        return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
    }
    utility.distance = distance;
})(utility || (utility = {}));
//# sourceMappingURL=utility.js.map