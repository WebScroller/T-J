module objects {
    export class ScoreBord {
        //public properties 
        public score: number = 0;
        public lives: number = 5;

        public scoreLabel: createjs.Text;
        public livesLabel: createjs.Text;

        //Contrsuctor***************************  
        constructor() {
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FF0404");
            this.livesLabel.shadow = new createjs.Shadow("#005C57", 5, 5, 10);
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FF0404");
            this.scoreLabel.shadow = new createjs.Shadow("#005C57", 5, 5, 10);
            this.scoreLabel.x = 350;
        }

        //update the score bord
        public update() {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        }
    }
}