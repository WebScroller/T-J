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
var stage: createjs.Stage;
var stats: Stats;


//GAME STATES VARIABLES (CONTAINERS)
var start: createjs.Container;
var game: createjs.Container;
var level_2: createjs.Container;
var level_3: createjs.Container;
var gOver: createjs.Container; 


//GAME STATES VARIABLES (CLASSES)
var intro: states.Intro;
var play: states.Play;
var kitchen: states.Kitchen;
var garden: states.Garden;
var over: states.Over;


//HELP KNOW YOUR CURRENT STAGE
var currentStateFunction: any;    //save the current state i'm in  probably not neceseary 
var currentStage: number;         // THE NUMBER OF EACH SCREEN
var gameOver: number = 0;


//OBJECT VARIABLES
var background: objects.Background;
var mouse: objects.Mouse;
var catchedMouse: objects.CatchedMouse;
var cheese: objects.Cheese;
var cats: objects.Cats[] = [];
var cats2: objects.Cats[] = [];
var scoreboard: objects.ScoreBord;
var whistle: objects.Whistle;


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
function gameLoop() {    
    stats.begin();
    
   if (gameOver == 1) {        
       //play.update();
       garden.update();
    } else if (gameOver == 2){
        currentStage = config.GAME_OVER_STATE
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
            currentStateFunction = intro;  //probably not necesary 
            stage.addChild(start);
        break;

        case config.PLAY_STATE:
            play = new states.Play();
            currentStateFunction = play;      //probably not necesary 
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

