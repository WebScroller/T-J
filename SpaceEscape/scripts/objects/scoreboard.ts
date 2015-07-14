module objects {
    export class ScoreBord {
        //public properties 
        public score: number = 0;
        public lives: number = 5;

        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;

        //Contrsuctor***************************  
        constructor() {
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FF0404");
            this.livesLabel.shadow = new createjs.Shadow("#FFFF00", 5, 5, 10);
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FF0404");
            this.scoreLabel.shadow = new createjs.Shadow("#FFFF00", 5, 5, 10);
            this.scoreLabel.x = 350;
            game.addChild(this.livesLabel);
            game.addChild(this.scoreLabel);
        }

        //update the score bord
        public update() {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        }
    }
}