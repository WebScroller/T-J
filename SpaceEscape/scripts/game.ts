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
/// <reference path="objects/mousetrap.ts" />
/// <reference path="objects/spanner.ts" />
/// <reference path="objects/whistle.ts" />
/// <reference path="objects/dog.ts" />
/// <reference path="objects/cats.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />

/// <reference path="states/transitions.ts" />
/// <reference path="states/intro.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/kitchen.ts" />
/// <reference path="states/garden.ts" />

/// <reference path="states/over.ts" />


//VARAIBLES **************************************************************************************************************
//GAME FRAMEWORK VARAIBLES
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;


//GAME STATES VARIABLES (CONTAINERS)
var start: createjs.Container;
var level_1: createjs.Container;
var level_2: createjs.Container;
var level_3: createjs.Container;
var gOver: createjs.Container; 
var transition: createjs.Container;


//GAME STATES VARIABLES (CLASSES)
var intro: states.Intro;
var play: states.Play;
var kitchen: states.Kitchen;
var garden: states.Garden;
var over: states.Over;
var transitions: states.Transitions;

//GAME TRANSITION VARIABLES
var instructions: string;
var level: string;

//HELP KNOW YOUR CURRENT STAGE
var futureGameOver: number;
var futureStage: number;
var currentStage: number;         // THE NUMBER OF EACH SCREEN
var oldStage: number;
var gameOver: number = 0;


//OBJECT VARIABLES
var background: objects.Background;
var mouse: objects.Mouse;
var catchedMouse: objects.CatchedMouse;
var cheese: objects.Cheese;
var mouseTrap: objects.MouseTrap[] = [];
var cats: objects.Cats[] = [];
var cats2: objects.Cats[] = [];
var scoreboard: objects.ScoreBord;
var whistle: objects.Whistle;
var dog: objects.Dog;
var spanner: objects.Spanner;
var score: number = 0;
var lives: number = 5;


//BOTTON VARIABLES
var btnPlayAgain: objects.Button;
var btnPlay: objects.Button;


//LABEL VARIABLES
var labelScore: objects.Label;
var labelText: objects.Label;
var labelTitle: objects.Label;
var labelInstru: objects.Label;


//LOGIC VARAIABLES
var catched: boolean = false;
var gotCheese: boolean = false;
var gotWhistle: boolean = false;


//GAME MANAGE VARIABLES
var collision: managers.Collision;
var assets: managers.Assets;


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
/*
 * INTRO = GAMEOVER 0 
 * LEVEL 1 = GAMEOVER 1 
 * TRANITION = GAMEOVER 2 
 * LEVEL 2 = GAMEOVER 3
 * TRANSITION = GAMEOVER 4
 * LEVEL 3 = GAMEOVER 5
 * GAME OVER = GAMEOVER 6
 */
function gameLoop() {    
    stats.begin();
    if (gameOver == 0) {
        intro.update();
    } else if (gameOver == 1) {        
        play.update();      
    } else if (gameOver == 2) {
        transitions.update();
    } else if (gameOver == 3) {
        kitchen.update();
    } else if (gameOver == 4) {
        transitions.update();
    } else if (gameOver == 5) {
        garden.update();
    } else if (gameOver == 6) {
        over.update();
    }
    stage.update(); //update/refresh state    
    stats.end();
}


//SELECT STATE*************************************************************************************************************
function main() {
    switch (currentStage) {
        case config.INRO_STATE:
            score = 0;
            lives = 5;
            // createjs.Sound.play("music", { "loop": -1,"volume": .1 });
            intro = new states.Intro();
            stage.addChild(start);
        break;

        case config.LEVEL_1:
            futureGameOver = 3;
            oldStage = config.LEVEL_1;
            futureStage = config.LEVEL_2;
            play = new states.Play();
            stage.addChild(level_1);                   
            break;

        case config.LEVEL_2:
            oldStage = config.LEVEL_2;
            futureGameOver =  5;
            futureStage = config.LEVEL_3;            
            kitchen = new states.Kitchen();
            level_2.addEventListener("click", kitchen.click);
            stage.addChild(level_2);
            break;

        case config.LEVEL_3:
            oldStage = config.LEVEL_3;
            garden = new states.Garden();
            stage.addChild(level_3);  
            break;

        case config.GAME_OVER_STATE:
            createjs.Sound.stop();
            createjs.Sound.play("gameOverS");
            //comment sound to have less loading time
            //createjs.Sound.play("music", { "loop": -1, "volume": .1 });
            gameOver = 6;
            stage.removeAllChildren();
            if (oldStage == config.LEVEL_1){
                level_1.removeAllChildren();
                level_1.removeAllEventListeners();
            } else if (oldStage == config.LEVEL_2){
                level_2.removeAllChildren();
                level_2.removeAllEventListeners();
            } else if (oldStage == config.LEVEL_3){
                level_3.removeAllChildren();
                level_3.removeAllEventListeners();
            }
            over = new states.Over();
            stage.addChild(gOver);
            break;

        case config.TRANSITION:
            transitions = new states.Transitions();
            stage.addChild(transition);
            break;
    }

}

