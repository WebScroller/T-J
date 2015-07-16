/// <reference path="../config/config.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="managers/assets.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/mouse.ts" />
/// <reference path="objects/catchedmouse.ts" />
/// <reference path="objects/cheese.ts" />
/// <reference path="objects/whistle.ts" />
/// <reference path="objects/dog.ts" />
/// <reference path="objects/cats.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/intro.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/garden.ts" />
/// <reference path="states/over.ts" />
//VARAIBLES **************************************************************************************************************
//GAME FRAMEWORK VARAIBLES
var canvas = document.getElementById("canvas");
var stage;
var stats;
//GAME STATES VARIABLES (CONTAINERS)
var start;
var level_1;
var level_2;
var level_3;
var gOver;
//GAME STATES VARIABLES (CLASSES)
var intro;
var play;
var kitchen;
var garden;
var over;
//HELP KNOW YOUR CURRENT STAGE
var currentStage; // THE NUMBER OF EACH SCREEN
var gameOver = 0;
//OBJECT VARIABLES
var background;
var mouse;
var catchedMouse;
var cheese;
var cats = [];
var cats2 = [];
var scoreboard;
var whistle;
var dog;
//BOTTON VARIABLES
var btnPlayAgain;
var btnPlay;
//LABEL VARIABLES
var labelScore;
var labelText;
var labelTitle;
var labelInstru;
//LOGIC VARAIABLES
var catched = false;
var gotCheese = false;
var gotWhistle = false;
//GAME MANAGE VARIABLES
var collision;
var assets;
//PRELOAD FUNCTION**********************************************************************************************************
function preload() {
    assets = new managers.Assets();
    setupStats();
}
//INIT FUNCTION (MAGIC STARTS HERE)*****************************************************************************************
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); //make the mouse known
    createjs.Ticker.setFPS(60); //framerate for the game 
    createjs.Ticker.on("tick", gameLoop); //same like useEventListener, every tick access the gameLoop function
    //SET YOUR CURRENT STAGE
    currentStage = config.INRO_STATE;
    main();
}
//SHOW STATS (FPS)***********************************************************************************************************
function setupStats() {
    stats = new Stats();
    stats.setMode(0);
    //align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
//MAIN GAME LOOP ACCESS 60 FPS***********************************************************************************************
function gameLoop() {
    stats.begin();
    if (gameOver == 0) {
        intro.update();
    }
    else if (gameOver == 1) {
        //play.update();
        garden.update();
    }
    else if (gameOver == 4) {
        currentStage = config.GAME_OVER_STATE; //STATE GO AFTER CLICK BUTTON START
        main();
    }
    stage.update(); //update/refresh state    
    stats.end();
}
//SELECT STATE*************************************************************************************************************
function main() {
    switch (currentStage) {
        case config.INRO_STATE:
            // createjs.Sound.play("music", { "loop": -1,"volume": .1 });
            intro = new states.Intro();
            stage.addChild(start);
            break;
        case config.LEVEL_1:
            play = new states.Play();
            stage.addChild(level_1);
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
            stage.removeChild(level_3);
            level_3.removeAllChildren();
            level_3.removeAllEventListeners();
            over = new states.Over();
            stage.addChild(gOver);
            break;
    }
}
//# sourceMappingURL=game.js.map