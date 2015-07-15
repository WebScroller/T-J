/// <reference path="../config/config.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="managers/assets.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/house.ts" />
/// <reference path="objects/mouse.ts" />
/// <reference path="objects/catchedmouse.ts" />
/// <reference path="objects/cheese.ts" />
/// <reference path="objects/cats.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/intro.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/garden.ts" />
/// <reference path="states/over.ts" />
//Game Framework Variables 
var canvas = document.getElementById("canvas");
var stage;
var stats;
//Game States Variables (Containers)
var start;
var game;
var level_2;
var level_3;
var gOver;
//Game states Variables (Classes)
var intro;
var play;
var kitchen;
var garden;
var over;
//Help know your current stage 
var currentStateFunction; //save the current state i'm in  probably not neceseary 
var currentStage; // the number of each screen
var gameOver = 0;
//Object variables
var background3;
var house;
var mouse;
var catchedMouse;
var cheese;
var cats = [];
var cats2 = [];
var scoreboard;
//Botton Variables
var btnPlayAgain;
var btnPlay;
//Label Varaibles
var labelScore;
var labelText;
var labelTitle;
var labelInstru;
//Logic Variables
var catched = false;
var gotCheese = false;
//Game Manage Variables
var collision;
var assets;
//PRELOAD FUNCTION
function preload() {
    assets = new managers.Assets();
    setupStats();
}
//INIT FUNCTION (everything starts here)
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); //make the mouse known
    createjs.Ticker.setFPS(60); //framerate for the game 
    createjs.Ticker.on("tick", gameLoop); //same like useEventListener, every tick access the gameLoop function
    //SET YOUR CURRENT STAGE
    //currentStage = config.INRO_STATE; //commented for test
    currentStage = config.LEVEL_3;
    main();
}
//SHOW STATS (FPS)
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
    garden.update();
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
//function that starts the playing the game
function main() {
    switch (currentStage) {
        case config.INRO_STATE:
            // createjs.Sound.play("music", { "loop": -1,"volume": .1 });
            intro = new states.Intro();
            currentStateFunction = intro; //probably not necesary 
            stage.addChild(start);
            break;
        case config.PLAY_STATE:
            play = new states.Play();
            currentStateFunction = play; //probably not necesary 
            stage.addChild(game);
            break;
        case config.LEVEL_2:
            break;
        case config.LEVEL_3:
            garden = new states.Garden();
            stage.addChild(level_3);
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