/// <reference path="../config/config.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="managers/assets.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/mouse.ts" />
/// <reference path="objects/cheese.ts" />
/// <reference path="objects/cats.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/intro.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/over.ts" />
//game framework variables 
var canvas = document.getElementById("canvas");
var stage;
var stats;
//Game stages (containers)
var game;
var gOver;
var start;
var currentStateFunction; //save the current state i'm in
var currentStage; // the number of each screen
//Game states (Classes)
var play;
var over;
var intro;
//game variables
var space;
var mouse;
var cheese;
var cats = [];
var scoreboard;
var gameOver = 0;
var btnPlayAgain;
var labelScore;
var labelText;
var labelTitle;
var labelInstru;
var btnPlay;
//game managers
var collision;
var assets;
//preload function
function preload() {
    assets = new managers.Assets();
    setupStats();
}
//Everything starts here
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); //make the mouse known
    createjs.Ticker.setFPS(60); //framerate for the game 
    createjs.Ticker.on("tick", gameLoop); //same like useEventListener, every tick access the gameLoop function
    //set you current stage 
    currentStage = config.INRO_STATE;
    main();
    //intr();
}
//to show the stats of the FPS
function setupStats() {
    stats = new Stats();
    stats.setMode(0);
    //align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
//Our main Game loop access 60 fps / runs on the back 
function gameLoop() {
    stats.begin();
    if (gameOver == 1) {
        play.update();
    }
    else if (gameOver == 2) {
        currentStage = config.GAME_OVER_STATE;
        main();
    }
    stage.update(); //update/refresh state    
    stats.end();
}
//function of the intro screen
function intr() {
    //comment sound to have less loading time
    // createjs.Sound.play("music", { "loop": -1,"volume": .1 });
    //intro = new states.Intro();
    //the first stage to play 
    // currentStateFunction = intro;
}
//function that starts the playing the game
function main() {
    //instantiate play state conatainer
    play = new states.Play();
    switch (currentStage) {
        case config.INRO_STATE:
            intro = new states.Intro();
            currentStateFunction = intro;
            stage.addChild(start);
            break;
        case config.PLAY_STATE:
            play = new states.Play();
            currentStateFunction = play;
            stage.addChild(game);
            break;
        case config.GAME_OVER_STATE:
            createjs.Sound.stop();
            createjs.Sound.play("gameOverS");
            //comment sound to have less loading time
            //createjs.Sound.play("music", { "loop": -1, "volume": .1 });
            gameOver = 3;
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            over = new states.Over();
            stage.addChild(gOver);
            break;
    }
}
//# sourceMappingURL=game.js.map