var objects;
(function (objects) {
    var ScoreBord = (function () {
        //Contrsuctor***************************  
        function ScoreBord() {
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FF0404");
            this.livesLabel.shadow = new createjs.Shadow("#005C57", 5, 5, 10);
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FF0404");
            this.scoreLabel.shadow = new createjs.Shadow("#005C57", 5, 5, 10);
            this.scoreLabel.x = 350;
        }
        //update the score bord
        ScoreBord.prototype.update = function () {
            this.livesLabel.text = "Lives: " + lives;
            this.scoreLabel.text = "Score: " + score;
        };
        return ScoreBord;
    })();
    objects.ScoreBord = ScoreBord;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map