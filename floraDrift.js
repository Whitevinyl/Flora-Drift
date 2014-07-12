// JavaScript Document


// INIT //
var canvasA;
var cxa;
var FPS = 30;


var acx;
var bpm = 110;
var paused = true;
var firstTime = true;

var scene = 0;
var mainScene = 3;
var titleIn = 100;
var titleOut = 100;
var titleOutYes = 0;
var introAlpha = 100;
var startCounter = 0;
var mode = 2;


// COLOUR //
var col1 = ["#634a4c","#624b56","#6c4c56","#a05b6d","#3e3940","#3c3d49","#36363f","#868c9d","#bdc4cc","#312d33","#e17280","#787f83","#583c52","#6e8073","#e39f9f","#3e3f4b","#363138","#5e4358","#525363","#484d5b"]; // MAUVE
var col2 = ["#554a45","#5e4c4f","#544b4f","#945b66","#313939","#303d42","#2a3638","#798c97","#b4c4c8","#242b2b","#dc7279","#6a7f7c","#4a3c4b","#60806c","#df9f99","#313f44","#283030","#4e424f","#43555c","#3b4d54"]; // OLIVE
var col3 = ["#6e5348","#6d5452","#795552","#bc6769","#413f3c","#3f4445","#373c3b","#9aa199","#e3e3c9","#30302e","#ff827c","#88927f","#60434e","#7c936f","#ffb79b","#414647","#363633","#634953","#565d5e","#4d5757"]; // YELLOW
var col4 = ["#54524f","#53535a","#5d545a","#936371","#304143","#2f454c","#293d42","#7894a0","#b3c9cd","#253436","#dc7a83","#698786","#494456","#5f8876","#dfa6a2","#30474e","#28383b","#504b5c","#3f5d66","#3a555f"]; // BLUE 

var col = [];


var sky1 = ["#d9c6be","#c0948f","#e8b892","#624b56","#a05b6d","#3e3940","#36363f","#36363f" ];
var sky2 = ["#d9c6be","#c0948f","#e8b892","#5e4c4f","#945b66","#313939","#2a3638","#2a3638" ];
var sky3 = ["#ffe6c0","#f1aa91","#ffd594","#6d5452","#bc6769","#413f3c","#373c3b","#373c3b" ];
var sky4 = ["#d9cbc4","#bf9c98","#e8be9b","#53535a","#936371","#304143","#293d42","#293d42" ];

var sky = [];
var skyCol = "";
var palette = 0;

var white = "#fff";
var font1 = "Georgia";
var font1 = "Lora";


// MEASUREMENT //
var halfX = 0;
var halfY = 0;
var fullX = 0;
var fullY = 0;
var units = 0;
var unitOne = 0;
var headerType = 40;
var menuType = 18;
var midType = 26;
var bodyType = 12;
var dx = 0;
var dy = fullY;
var sx = 0;
var sy = 0;
var grd = 30;
var yOff = 0;


var consoleY = fullY;
var consoleDest = fullY;
var panY = halfY;
var panDest = halfY;
var harpY = halfY;
var harpDest = halfY;

// TWEENING //
var panEase = 50;
var panSpeed = 50;
var consoleEase = 50;
var consoleSpeed = 50;
var harpEase = 50;
var harpSpeed = 50;
var titleEase = 50;
var titleSpeed = 50;


// CAMERA //
var titleY = 0;
var titleDest = 0;
var textA = 1;
var textADest = 1;
var zoomLevel = 1;


// ROLLOVERS / CONTROLS //  
var touchTakeover = false;
var touch;
var touchCounter = 0;

var wvOver = false;
var fbOver = false;
var twitterOver = false;
var pauseOver = false;
var infoOver = false;
var consoleOver = false;
var consoleQuitOver = false;
var drumGainOver = false;
var bpmSetOver = false;
var fullScreenOver = false;
var thisFineOver = false;


var panBtnOver = false;
var harpBtnOver = false;

var panOver = [false,false,false,false,false,false,false];
var panOn = [false,false,false,false,false,false,false];
var panTimer = [];
var panG = [];
var panOpen = false;
var panCloseOver = false;

var panPadY = [1,1,1,1,1,1,1];
var panPadDest = [1,1,1,1,1,1,1];

var harpOpen = false;
var harpCloseOver = false;
var harpOver = false;
var harpHold = false;

var harpN = 0;
var harpNLast = 0;
var harpOn = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var harpTimer = [];
var harpInterval;
var harpD = [];
var harpG = [];
var harpCount = 0;

var drumGainX = 0;
var drumGainDragging = false;
var drumGainDrag = 0;
var drumGainStart = 0;

var bpmSetX = 0;
var bpmSetDragging = false;
var bpmSetDrag = 0;
var bpmSetStart = 0;


var roll = [false];
var mouseX = 0;
var mouseY = 0;
var mox = 0;
var moy = 0;
var mouseIsDown = false;
var mouseHold = false;
var canPress = true;



// VISUALS //
var ground1 = [];
var ground2 = [];

var bgSky = [];
var bgDiamond = [];
var bgDiamond2 = [];

var canopyStyle = 1;
var foreGroundStyle = 0;
var canopyCol = 1;
var clusters = [];

var bgPlant = [];
var tree1 = [];
var tree2 = [];
var diamond1 = [];
var diamond2 = [];
var plant1 = [];
var plant2 = [];
var flower1 = [];
var vine1 = [];
var vine2 = [];
var vine3 = [];
var vine4 = [];
var palm = [];
var palm2 = [];
var broad1 = [];
var broad2 = [];
var animal = [];
var dangle = [];

var dangleCol = 0;
var vineDest = 0;

var sway = 0;
var swayFrame = 40;
var swayCount = 39;
var swaySmooth = 0;
var swayDir = 1;
var swaySpeed = 0;
var swayDest = 0;



// SOUND //
var beatCount = 0;
var fInt = 0;
var midC = -9;
var thisInt = 0;

var freq = 0;
var freq2 = 0;

var major = [0,2,4,5,7,9,11,12];
var minor = [0,2,3,5,7,0,10,12];
var minor2 = [-2,0,3,5,7 ,8, 10,12];
var minor3 = [0,2,3,5,7,3,10,12];
var harmony = [2,3,7,8,10,12,14,15];
var fifth = [5,7,10,12,14,15,17,19];

var panScale = [0,3,12,7,10,-2,2];
var panHarm = [7,10,17,12,15,5,10];

var harpScale = [0,2,3,5,7,8,10,12,14,15,17,19,20,22,24];
var harpFreq = 0;
var harpFreqDest = 0;

var harmonyInterval;
var harmPlaying = false;
var harmFreq = 10;
var harmFreqDest = 10;
var harmTimer = 0;

var note = minor;
var note2 = minor2;
var note3 = minor3;

var lead8 = [1,0,0,1,1,0,1,0];
var count8 = 0;
var bass8 = [1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0];
var bassReset = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
var bassLength = [4,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0];
var currentBassLength = 0;
var countBass = 0;
var monoBass = "";
var bassSelect = 0;
var bassSelectLast = 0;
var bassSelectCount = 0;
var bassHarmVol = 0.2 + Math.random()*0.1;
var bassHarmVolDest = bassHarmVol;
var drum8 = [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0];
var countDrum = 0;

var mainDest = "";

var delayLevel = 0.8;
var drumLevel = 0;

var starting = true;
var breaking = false;
var leadBreak = false;

var leadMode = 0;
var leadDir = 1;
var leadStep = 0;
var leadStepCount = 0;

var leadLastNote = 5;
var leadLastOctave = 12;


// EFFECTS //
var flickerH = [];
var flickerX = [];
var flickerY = [];
var flickerW = [];
var flickerCount = 0;



//-------------------------------------------------------------------------------------------
//  INITIALISE
//-------------------------------------------------------------------------------------------


function init() {
	
	////////////// SETUP CANVAS ////////////
	
	canvasA = document.getElementById("layerA");
	keyInput = document.getElementById("keyLayer"); // REFERENCES AN EMPTY DIV TO "FOCUS"
	keyInput.focus();
	
	// MOUSE //
	canvasA.addEventListener("mousedown", clickOrTouch, false);
	canvasA.addEventListener("mouseup", mouseRelease, false);
	canvasA.addEventListener("mousemove", mouseMove, false);
	
    // TOUCH //
	canvasA.addEventListener('touchstart', function(event) {
	    if (event.targetTouches.length == 1) {
			touch = event.targetTouches[0];
		    touchTakeover = true;
		} else {
			touchTakeover = false;
		}
		clickOrTouch();
	}, false);
	
	canvasA.addEventListener('touchmove', function(event) {
		event.preventDefault();
		if (event.targetTouches.length == 1) {
			touch = event.targetTouches[0];
		}
		mouseMove(event);
	}, false);
	
	canvasA.addEventListener('touchend', function(event) {
		mouseRelease();
		touchTakeover = false;
	}, false);
	
	 
    cxa = canvasA.getContext("2d");
	document.body.addEventListener('mousewheel', function(event) {
	  event.preventDefault();
	}, false); 
	document.body.addEventListener('DOMMouseScroll', function(event) {
	  event.preventDefault();
	}, false); 
	
	
	// SET CANVAS & DRAWING POSITIONS //
	resize_canvas();
	units = (unitOne*0.06)*zoomLevel;
	consoleDest = fullY;
	panDest = -fullY;
	harpDest = -fullY;
	titleY = titleDest = (halfY-(unitOne));
	
	
	// SETUP AUDIO //
	soundSetup();
	
	// GENERATE SCENE //
	generateScene();
	
	
	if (screenfull.enabled) {
		
		document.addEventListener(screenfull.raw.fullscreenchange, function () { // change
			if (scene==2 && screenfull.isFullscreen==true) {
				
				// START PLAYING //
				setTimeout(function(){
					scene += 1;
					consoleY = fullY*2;
					consoleTo(fullY,30,20);
					titleTo(-fullY,20,0);
				
					paused = false;
					beatCount = 15;
					count8 = 0;
					countBass = 0;
					countDrum = 0;
					setTimeout(function(){
						harmonyInterval = setInterval(harmonyLoop, ((60/bpm)*2)*1000);
					},((60/bpm)*3)*1000);
					
				},2000);
			}
		});
		
	}
	
	scene = 1; // FINISHED INITALISING, GO TO SCENE
	
} // END INIT



//-------------------------------------------------------------------------------------------
//  LOOP
//-------------------------------------------------------------------------------------------


// FRAME //
setInterval(function() {
	
	if (scene==1) { 
	    update();
	    drawBG();
		drawScene();
		drawTitle();
		
	} else if (scene==2) { 
	    update();
	    drawBG();
		drawScene();
		drawTitle();
		
	} else if (scene==3) {// PRIMARY SCENE
	
		update();
	    drawBG();
		drawScene();
		drawTitle();
		drawPan();
		drawHarp();
		drawDisplay();
	}
	
	if (scene>0) {
	    testing(); //DISPLAY TESTED VARIABLES (FUNCTION AT VERY BOTTOM)
	}
}, Math.round(1000/FPS));

// END INTERVAL




//-------------------------------------------------------------------------------------------
//  UPDATE
//-------------------------------------------------------------------------------------------


function update() {
	
	
	units = (unitOne*0.06)*zoomLevel; // UPDATE SCALED UNITS
	
	// CONSOLE //
	drumMaster.gain.value = drumLevel;
	
	
	// TWEENS //
	swaySmooth += ((sway - swaySmooth)/100)*swaySpeed;
	swaySpeed += ((swayDest - swaySpeed)/100)*2;
	
	consoleY += ((consoleDest - consoleY)/100)*consoleEase;
	consoleEase += ((consoleSpeed - consoleEase)/100)*2;
	
	panY += ((panDest - panY)/100)*panEase;
	panEase += ((panSpeed - panEase)/100)*2;
	
	harpY += ((harpDest - harpY)/100)*harpEase;
	harpEase += ((harpSpeed - harpEase)/100)*2;
	
	titleY += ((titleDest - titleY)/100)*titleEase;
	titleEase += ((titleSpeed - titleEase)/100)*2;
	
	harpFreq += ((harpFreqDest - harpFreq)/100)*100;
	harmFreq += ((harmFreqDest - harmFreq)/100)*1;
	bassHarmVol += ((bassHarmVolDest - bassHarmVol)/100)*10;
	
	
	if (scene<mainScene) {
		textA += ((textADest - textA)/100)*10;
	}
	
	for (i=0;i<7;i++) {
		panPadY[i] += ((panPadDest[i] - panPadY[i])/100)*20;
	}
	
	
	// UPDATE SOUND FILTERING ETC //
	panFilter.frequency.value = 900 + (drumLevel*1000);
	leadFilter.frequency.value = 1100 + (drumLevel*1000);
	leadEchoFilter.frequency.value = 800 + (drumLevel*1000);
	bassFilter.frequency.value = 1000 + (drumLevel*1000);
	bassFilter2.gain.value = (drumLevel*10);
	leadEchoL.delayTime.value = ((60/bpm)*0.5);
	leadEchoR.delayTime.value = ((60/bpm)*1);
	harpFilter.frequency.value = 900 + (drumLevel*1000);
	harmFilter.frequency.value = ((800/10)*harmFreq) + (drumLevel*500);
	holdFilter.gain.value = 5 + harmFreq; // 15
	shelfFilter.frequency.value = (700/10)*harmFreq;
	shelfFilter.gain.value = -(10+harmFreq);
	
} /////   END UPDATE 




//-------------------------------------------------------------------------------------------
//  DRAWING FUNCTIONS
//-------------------------------------------------------------------------------------------


function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}
function Vine(x, y, mult, y2) {
  this.x = x || 0;
  this.y = y || 0;
  this.y2 = y2 || 0;
  this.mult = mult;
}

function Diamond(position) {
  this.position = position;
}

function Flower(position,scale,mult) {
  this.position = position;
  this.scale = scale;
  this.mult = mult;
}

function Plant(position, l1, l2, l3, mult) {
  this.position = position;
  this.l1 = l1;
  this.l2 = l2;
  this.l3 = l3;
  this.mult = mult;
}

function Palm(position, l1, l2, l3, l4, mult) {
  this.position = position;
  this.l1 = l1;
  this.l2 = l2;
  this.l3 = l3;
  this.l4 = l4;
  this.mult = mult;
}


function randPos() { // GEN A RANDOM POSITION
	return position = new Vector(  ((-fullX*0.4) + (Math.random()*(fullX*0.8)))/units ,((-fullY*0.5) + (Math.random()*(fullY*0.4)))/units );
}

function clusterPos(x,y) { // GEN A RANDOM POSITION
	return position = new Vector(  (x-250) + (Math.random()*500) ,(y-100) + (Math.random()*200) );
}

function swayTo(z,d,s) { // ZOOM
	swaySpeed = s;
	swayDest = d;
	sway = z;
}


///////  CAMERA  ///////////////


function panTo(to,topspeed,startspeed,delay) {
	
	delay = delay||0;
	
	if (delay==0) {
		  panDest = to;
		  panSpeed = topspeed;
		  panEase = startspeed;
	} else {
		setTimeout(function(){
			panDest = to;
		  panSpeed = topspeed;
		  panEase = startspeed;
		},delay);
	}
}

function harpTo(to,topspeed,startspeed,delay) {
	
	delay = delay||0;
	
	if (delay==0) {
		  harpDest = to;
		  harpSpeed = topspeed;
		  harpEase = startspeed;
	} else {
		setTimeout(function(){
			harpDest = to;
		    harpSpeed = topspeed;
		    harpEase = startspeed;
		},delay);
	}
}


function consoleTo(to,topspeed,startspeed) {
	consoleDest = to;
	consoleSpeed = topspeed;
	consoleEase = startspeed;
}

function titleTo(to,topspeed,startspeed) {
	titleDest = to;
	titleSpeed = topspeed;
	titleEase = startspeed;
}



function in_array(array, el) {
   for(var i = 0, j = array.length; i < j; i++) 
       if(array[i] == el) return true;
   return false;
}

function dotDivide(y) {
	cxa.globalAlpha = 1;
	cxa.fillStyle = col[10];
	for (i=0;i<Math.floor(stageW/6);i++) {
		cxa.fillRect(Math.round(dx-(stageW/2)) + (i*6),Math.round(y),1,1);
	}
}

function dotSection(x,y,l) {
	cxa.globalAlpha = 1;
	cxa.fillStyle = col[10];
	for (i=0;i<Math.floor((l)/6);i++) {
		cxa.fillRect(Math.round(dx+x) + (i*6),Math.round(y),1,1);
	}
}

function drawOrigin(x,y) {
	
	sx=dx+(x*units);
	sy=dy+yOff+(y*units);
}

function translateOrigin(x,y) {
	
	sx=sx+(x*units);
	sy=sy+(y*units);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function drawHex(x,y,rad) {
	cxa.beginPath();
	cxa.moveTo(x,y-(1*rad)); //b
	cxa.lineTo(x-(0.87*rad),y-(0.5*rad)); //t
	cxa.lineTo(x-(0.87*rad),y+(0.5*rad)); 
	cxa.lineTo(x,y+(1*rad)); 
	cxa.lineTo(x+(0.87*rad),y+(0.5*rad)); 
	cxa.lineTo(x+(0.87*rad),y-(0.5*rad)); 
	cxa.closePath();
	cxa.fill();
}

function drawHexOver(x,y,rad,m) {
	
	if (panOver[m]==true) {
		panPadDest[m] = 1;
	} else {
		panPadDest[m] = 0;
	}
	
	x1 = x;
	y1 = y-(1*rad);
	x2 = x-(0.87*rad);
	y2 = y-(0.5*rad);
	
	if (panPadY[m]>0.05) {
		
		cxa.beginPath();
		cxa.moveTo(x1,y1); //b
		cxa.lineTo(x2,y2);
		cxa.lineTo(x2,y2+(panPadY[m]*rad)); 
		cxa.lineTo(x1+((panPadY[m]*0.87)*rad),y1+((panPadY[m]*0.5)*rad)); 
		cxa.closePath();
		cxa.fill();
	
	}
	
}

function drawHexOver2(x,y,rad,m) {
	
	if (panOver[m]==true) {
		panPadDest[m] = 1;
	} else {
		panPadDest[m] = 0;
	}
	
	x1 = x;
	y1 = y-(1*rad);
	x2 = x-(0.87*rad);
	y2 = y-(0.5*rad);
	
	if (panPadY[m]>0.05) {
	
		cxa.beginPath();
		cxa.moveTo(x1,y1); //b
		cxa.lineTo(x2,y2);
		cxa.lineTo(x2+((panPadY[m]*0.87)*rad),y2+((panPadY[m]*0.5)*rad)); 
		cxa.lineTo(x1+((panPadY[m]*0.87)*rad),y1+((panPadY[m]*0.5)*rad)); 
		cxa.closePath();
		cxa.fill();
	}
	
}


function wordWrap( context , text, x, y, lineHeight, fitWidth)
{
    fitWidth = fitWidth || 0;
    
    if (fitWidth <= 0)
    {
        context.fillText( text, x, y );
        return;
    }
    var words = text.split(' ');
    var currentLine = 0;
    var idx = 1;
    while (words.length > 0 && idx <= words.length)
    {
        var str = words.slice(0,idx).join(' ');
        var w = context.measureText(str).width;
        if ( w > fitWidth )
        {
            if (idx==1)
            {
                idx=2;
            }
            context.fillText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );
            currentLine++;
            words = words.splice(idx-1);
            idx = 1;
        }
        else
        {idx++;}
    }
    if  (idx > 0)
        context.fillText( words.join(' '), x, y + (lineHeight*currentLine) );
}




function harpOnCheck(n,c) {
	if (harpOn[n]==true) {
		cxa.strokeStyle = sky[0];
		if (harpN==n) {
			cxa.lineWidth = (unitOne*0.4);
		} else {
			cxa.lineWidth = (unitOne*0.2);
		}
	} else {
		cxa.strokeStyle = col[c];
		cxa.lineWidth = (unitOne*0.2);
	}
}




//-------------------------------------------------------------------------------------------
//  BACKGROUND
//-------------------------------------------------------------------------------------------


function drawBG() {
	
	cxa.globalAlpha = 1;
	cxa.fillStyle = col[0];
	cxa.fillRect(0,0,fullX,fullY);
	
	
	// BG SKY //
	cxa.fillStyle = skyCol;
	
	for (i=0;i<bgSky.length;i++) {
			
		sx = dx + (bgSky[i].x*units);
		sy = 0 + (bgSky[i].y*units);
		
		cxa.beginPath();
		cxa.moveTo(sx,sy+(320*units)); //p
		cxa.lineTo(sx-(400*units),sy); 
		cxa.lineTo(sx+(400*units),sy);
		cxa.closePath();
		cxa.fill();
	}
	
	
	
	// BG DIAMOND //
	cxa.fillStyle = col[1];
	for (i=0;i<bgDiamond.length;i++) {
		
		var position = bgDiamond[i].position;
			
		sx = dx + (position.x*units);
		sy = dy + (position.y*units);
		
		
		cxa.beginPath();
		cxa.moveTo(sx-(200*units),sy); //t
		cxa.lineTo(sx,sy-(160*units)); //r
		cxa.lineTo(sx+(200*units),sy); //tip 1
		cxa.lineTo(sx,sy+(160*units)); //r
		cxa.closePath();
		cxa.fill();
		
		
	}
	
	cxa.fillStyle = col[2];
	for (i=0;i<bgDiamond2.length;i++) {
		
		var position = bgDiamond2[i].position;
			
		sx = dx + (position.x*units);
		sy = dy + (position.y*units);
		
		
		cxa.beginPath();
		cxa.moveTo(sx-(30*units),sy); //t
		cxa.lineTo(sx,sy-(24*units)); //r
		cxa.lineTo(sx+(30*units),sy); //tip 1
		cxa.lineTo(sx,sy+(24*units)); //r
		cxa.closePath();
		cxa.fill();
		
		
	}
	
	// BG PLANT //
	cxa.fillStyle = col[3];
	for (i=0;i<bgPlant.length;i++) {
		
		var position = bgPlant[i].position;
		var l1 = bgPlant[i].l1;
		var l2 = bgPlant[i].l2;
		var l3 = bgPlant[i].l3;
		
			
		sx = dx + ((position.x)*units);
		sy = dy + ((position.y)*units);
		
		
		cxa.beginPath();
		cxa.moveTo(sx,sy); //t
		cxa.lineTo(sx-(10*units),sy+((l2.y*0.5)*units)); //r
		cxa.lineTo(sx,sy+(l2.y*units)); //tip 1
		cxa.lineTo(sx+(10*units),sy+((l2.y*0.5)*units)); //r
		cxa.closePath();
		cxa.fill();
		
	}
	
	
	// VINES //
	for (i=0;i<(vine1.length-6);i++) {
		cxa.fillStyle = col[3];
		if (i<6) {
			cxa.fillStyle = col[6];
		}
	    
		sx = dx + ((vine1[i].x)*units);
		sy = 0;
		vh = ((vine1[i].y)*units);
		
		cxa.beginPath();
		cxa.moveTo(sx-(4*units),sy); //t
		cxa.lineTo(sx-(3*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx,sy+(vh)); //tip 1
		cxa.lineTo(sx+(3*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx+(4*units),sy); //r
		cxa.closePath();
		cxa.fill();
	}
	
	
	// GROUND //
	cxa.fillStyle = col[4];
	
	cxa.beginPath();
	cxa.moveTo(0,dy+(ground1[0]*units)); //t
	
	for (i=1;i<ground1.length;i++) {
		cxa.lineTo(i*(80*units),dy+(ground1[i]*units)); 
	}
	
	cxa.lineTo(fullX,fullY);
	cxa.lineTo(0,fullY);
	
	cxa.closePath();
	cxa.fill();
	
	// TREES //
	for (i=0;i<tree1.length;i++) {
	    cxa.fillRect(dx + (tree1[i].x*units),0,tree1[i].y*units,fullY);
	}
	
	// ANIMAL //
	for (i=0;i<animal.length;i++) {
		cxa.fillStyle = sky[0];
		
		sx = dx + ((animal[i].x)*units);
		sy = ((animal[i].y)*units);
		m = animal[i].mult;
		s = swaySmooth * m;
		
		
		// LEFT //
		cxa.beginPath();
		cxa.moveTo(sx-((12*m)*units),sy-((4*m)*units)+(s*units)); //t
		cxa.lineTo(sx-((14*m)*units),sy+(s*units)); //r
		cxa.lineTo(sx-((12*m)*units),sy+((4*m)*units)+(s*units)); //b
		cxa.lineTo(sx-((10*m)*units),sy+(s*units)); //r
		cxa.closePath();
		cxa.fill();
		
		//RIGHT //
		cxa.beginPath();
		cxa.moveTo(sx+((12*m)*units),sy-((4*m)*units)+(s*units)); //t
		cxa.lineTo(sx+((14*m)*units),sy+(s*units)); //r
		cxa.lineTo(sx+((12*m)*units),sy+((4*m)*units)+(s*units)); //b
		cxa.lineTo(sx+((10*m)*units),sy+(s*units)); //r
		cxa.closePath();
		cxa.fill();
		
	}
	
	
	// DARK VINES //
	cxa.fillStyle = col[6];
	for (i=0;i<vine4.length;i++) {
		
	    
		sx = dx + ((vine4[i].x)*units);
		sy = ((vine4[i].y2)*units);
		vh = ((vine4[i].y)*units);
		
		cxa.beginPath();
		cxa.moveTo(sx-(4*units),sy); //t
		cxa.lineTo(sx-(3*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx,sy+(vh)); //tip 1
		cxa.lineTo(sx+(3*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx+(4*units),sy); //r
		cxa.closePath();
		cxa.fill();
	}
	
	// PURPLE VINES //
	cxa.fillStyle = col[12];
	for (i=0;i<vine2.length;i++) {
		
		sx = dx + ((vine2[i].x)*units);
		sy = ((vine2[i].y2)*units);
		vh = ((vine2[i].y)*units);
		
		cxa.beginPath();
		cxa.moveTo(sx-(4*units),sy); //t
		cxa.lineTo(sx-(3*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx,sy+(vh)); //tip 1
		cxa.lineTo(sx+(3*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx+(4*units),sy); //r
		cxa.closePath();
		cxa.fill();
	}
	
	// BROAD //
	for (i=0;i<broad1.length;i++) {
		
		var position = broad1[i].position;
		var l1 = broad1[i].l1;
		var l2 = broad1[i].l2;
		var l3 = broad1[i].l3;
		var l4 = broad1[i].l4;
		var m = broad1[i].mult;
		
			
		sx = 0 + ((position.x)*units);
		sy = fullY + ((position.y)*units);
		
		cxa.fillStyle = col[15];
		cxa.beginPath();
		cxa.moveTo(sx,sy+(40*units)); //b
		cxa.lineTo(sx+((l1.x*m)*units),sy+((l1.y*m)*units)); //l
		cxa.lineTo(sx+(((l3.x-20)*m)*units),sy+((l3.y*m)*units)); //l2
		cxa.lineTo(sx+((l4.x*m)*units),sy+((l4.y*m)*units)); //tip
		cxa.lineTo(sx+(((l3.x+20)*m)*units),sy+((l3.y*m)*units)); //r2
		cxa.lineTo(sx+((l2.x*m)*units),sy+((l2.y*m)*units)); //r
		cxa.closePath();
		cxa.fill();
		
		cxa.fillStyle = col[3];
		cxa.beginPath();
		cxa.moveTo(sx-(5*units),sy+(40*units)); //b
		cxa.lineTo(sx+(5*units),sy+(40*units)); //l
		cxa.lineTo(sx+((l3.x*m)*units),sy+((l3.y*m)*units)); //l2
		cxa.closePath();
		cxa.fill();
	}
	
	
	// GROUND //
	cxa.fillStyle = col[5];
	
	cxa.beginPath();
	cxa.moveTo(0,fullY+(ground2[0]*units)); //t
	
	for (i=1;i<ground2.length;i++) {
		cxa.lineTo(i*(80*units),fullY+(ground2[i]*units)); 
	}
	
	cxa.lineTo(fullX,fullY);
	cxa.lineTo(0,fullY);
	
	cxa.closePath();
	cxa.fill();
	
	// TREES //
	for (i=0;i<tree2.length;i++) {
	    cxa.fillRect(dx + (tree2[i].x*units),0,tree2[i].y*units,fullY);
	}
	
}


//-------------------------------------------------------------------------------------------
//  FOREGROUND
//-------------------------------------------------------------------------------------------


function drawScene() {

	cxa.globalAlpha = 1;
	cxa.strokeStyle = col[6];
	
	
	// LARGE CANOPY DIAMONDS //
	cxa.fillStyle = col[6];
	for (i=0;i<diamond1.length;i++) {
		
		var position = diamond1[i].position;
		
		sx = dx + ((position.x)*units);
		sy = 0 + ((position.y)*units);
		
		cxa.beginPath();
		cxa.moveTo(sx-(200*units),sy); //t
		cxa.lineTo(sx,sy-(160*units)); //r
		cxa.lineTo(sx+(200*units),sy); //tip 1
		cxa.lineTo(sx,sy+(160*units)); //r
		cxa.closePath();
		cxa.fill();
	}
	
	// SMALL DIAMONDS //
	cxa.fillStyle = col[5];
	for (i=0;i<diamond2.length;i++) {
		
		var position = diamond2[i].position;
		
		sx = dx + ((position.x)*units);
		sy = 0 + ((position.y)*units);
		
		cxa.beginPath();
		cxa.moveTo(sx-(30*units),sy); //t
		cxa.lineTo(sx,sy-(24*units)); //r
		cxa.lineTo(sx+(30*units),sy); //tip 1
		cxa.lineTo(sx,sy+(24*units)); //r
		cxa.closePath();
		cxa.fill();
	}
	
	
	// LEAVES 1 //
	for (i=0;i<plant1.length;i++) {
		
		cxa.fillStyle = col[7];
		
		var position = plant1[i].position;
		var l1 = plant1[i].l1;
		var l2 = plant1[i].l2;
		var l3 = plant1[i].l3;
		var s = swaySmooth * plant1[i].mult;
		
		sx = dx + ((position.x+(s*0.2))*units);
		sy = 0 + ((position.y)*units);
		
		if (canopyStyle==1) {
			cxa.fillStyle = col[18];
			if (canopyCol==1) {
				cxa.fillStyle = col[12];
			}
			
			cxa.beginPath();
			cxa.moveTo(sx,sy); //t
			cxa.lineTo(sx+((((l1.x+(s+0.4))*0.8)-8)*units),sy+((l1.y*0.2)*units)); //r
			cxa.lineTo(sx+((l1.x+(s*1.2))*units),sy+(l1.y*units)); //tip 1
			cxa.lineTo(sx+((((l1.x+(s+0.4))*0.8)+8)*units),sy+((l1.y*0.2)*units)); //r
			cxa.closePath();
			cxa.fill();
			
			cxa.beginPath();
			cxa.moveTo(sx,sy); //t
			cxa.lineTo(sx+((((l3.x+(s+0.4))*0.8)-8)*units),sy+((l3.y*0.2)*units)); //r
			cxa.lineTo(sx+((l3.x+(s*1.2))*units),sy+(l3.y*units)); //tip 1
			cxa.lineTo(sx+((((l3.x+(s+0.4))*0.8)+8)*units),sy+((l3.y*0.2)*units)); //r
			cxa.closePath();
			cxa.fill();
			
		} else {
		
			cxa.beginPath();
			cxa.moveTo(sx,sy); //t
			cxa.lineTo(sx+((((l1.x+(s+0.4))*0.5)-10)*units),sy+((l1.y*0.4)*units)); //r
			cxa.lineTo(sx+((l1.x+s)*units),sy+(l1.y*units)); //tip 1
			cxa.lineTo(sx+((((l1.x+(s+0.4))*0.5)+10)*units),sy+((l1.y*0.4)*units)); //r
			cxa.closePath();
			cxa.fill();
			
			cxa.beginPath();
			cxa.moveTo(sx,sy); //t
			cxa.lineTo(sx+(((l2.x+(s+0.4))-10)*units),sy+((l2.y*0.4)*units)); //r
			cxa.lineTo(sx+((l2.x+s)*units),sy+(l2.y*units)); //tip 1
			cxa.lineTo(sx+(((l2.x+(s+0.4))+10)*units),sy+((l2.y*0.4)*units)); //r
			cxa.closePath();
			cxa.fill();
			
			cxa.beginPath();
			cxa.moveTo(sx,sy); //t
			cxa.lineTo(sx+((((l3.x+(s+0.4))*0.5)-10)*units),sy+((l3.y*0.4)*units)); //r
			cxa.lineTo(sx+((l3.x+s)*units),sy+(l3.y*units)); //tip 1
			cxa.lineTo(sx+((((l3.x+(s+0.4))*0.5)+10)*units),sy+((l3.y*0.4)*units)); //r
			cxa.closePath();
			cxa.fill();
		
		}
		
	}
	
	
	// RED FLOWERS //
	if (canopyStyle!==1) {
		
		for (i=0;i<flower1.length;i++) {
			
			var position = flower1[i].position;
			var sz = flower1[i].scale;
			var s = swaySmooth * flower1[i].mult;
				
			sx = dx + ((position.x)*units);
			sy = 0 + ((position.y)*units);
			
			cxa.fillStyle = col[10];
			cxa.beginPath();
			cxa.moveTo(sx+((s*0.2)*units)-((20*sz)*units),sy); //t
			cxa.lineTo(sx,sy-((16*sz)*units)); //t
			cxa.lineTo(sx+((s*0.2)+((20*sz))*units),sy); //tip 1
			cxa.lineTo(sx+(s*units),sy+((100*sz)*units)); //r
			cxa.closePath();
			cxa.fill();
			cxa.fillStyle = col[3];
			cxa.beginPath();
			cxa.moveTo(sx+((s*0.2)*units)-((20*sz)*units),sy); //t
			cxa.lineTo(sx,sy-((16*sz)*units)); //t
			cxa.lineTo(sx+((s*0.2)+((20*sz))*units),sy); //tip 1
			cxa.lineTo(sx+((s*0.2)*units),sy+((16*sz)*units)); //r
			cxa.closePath();
			cxa.fill();
		}
	}
	
	
	// LEAVES 2 //
	cxa.fillStyle = col[8];
	for (i=0;i<plant2.length;i++) {
		
		var position = plant2[i].position;
		var l1 = plant2[i].l1;
		var l2 = plant2[i].l2;
		var l3 = plant2[i].l3;
		var s = swaySmooth * plant2[i].mult;
		
			
		sx = dx + ((position.x+(s*0.2))*units);
		sy = 0 + ((position.y)*units);
		
		
		if (canopyStyle==1) {
			cxa.fillStyle = col[7];
			if (canopyCol==1) {
			    cxa.fillStyle = col[18];
			}
			cxa.beginPath();
			cxa.moveTo(sx,sy); //t
			cxa.lineTo(sx+((((l1.x+(s+0.4))*0.8)-8)*units),sy+((l1.y*0.2)*units)); //r
			cxa.lineTo(sx+((l1.x+(s*1.2))*units),sy+(l1.y*units)); //tip 1
			cxa.lineTo(sx+((((l1.x+(s+0.4))*0.8)+8)*units),sy+((l1.y*0.2)*units)); //r
			cxa.closePath();
			cxa.fill();
			
			cxa.beginPath();
			cxa.moveTo(sx,sy); //t
			cxa.lineTo(sx+((((l3.x+(s+0.4))*0.8)-8)*units),sy+((l3.y*0.2)*units)); //r
			cxa.lineTo(sx+((l3.x+(s*1.2))*units),sy+(l3.y*units)); //tip 1
			cxa.lineTo(sx+((((l3.x+(s+0.4))*0.8)+8)*units),sy+((l3.y*0.2)*units)); //r
			cxa.closePath();
			cxa.fill();
			
		} else {
		    
			cxa.beginPath();
			cxa.moveTo(sx,sy); //t
			cxa.lineTo(sx+((((l1.x+(s+0.4))*0.5)-10)*units),sy+((l1.y*0.4)*units)); //r
			cxa.lineTo(sx+((l1.x+s)*units),sy+(l1.y*units)); //tip 1
			cxa.lineTo(sx+((((l1.x+(s+0.4))*0.5)+10)*units),sy+((l1.y*0.4)*units)); //r
			cxa.closePath();
			cxa.fill();
			
			cxa.beginPath();
			cxa.moveTo(sx,sy); //t
			cxa.lineTo(sx+(((l2.x+(s+0.4))-10)*units),sy+((l2.y*0.4)*units)); //r
			cxa.lineTo(sx+((l2.x+s)*units),sy+(l2.y*units)); //tip 1
			cxa.lineTo(sx+(((l2.x+(s+0.4))+10)*units),sy+((l2.y*0.4)*units)); //r
			cxa.closePath();
			cxa.fill();
			
			cxa.beginPath();
			cxa.moveTo(sx,sy); //t
			cxa.lineTo(sx+((((l3.x+(s+0.4))*0.5)-10)*units),sy+((l3.y*0.4)*units)); //r
			cxa.lineTo(sx+((l3.x+s)*units),sy+(l3.y*units)); //tip 1
			cxa.lineTo(sx+((((l3.x+(s+0.4))*0.5)+10)*units),sy+((l3.y*0.4)*units)); //r
			cxa.closePath();
			cxa.fill();
		}
		
	}
	
	
	// WHITE FLOWERS //
	if (canopyStyle==1) {
		
		for (i=0;i<flower1.length;i++) {
			
			var position = flower1[i].position;
			var sz = flower1[i].scale;
			var s = swaySmooth * flower1[i].mult;
				
			sx = dx + ((position.x)*units);
			sy = 0 + ((position.y)*units);
			
			
			cxa.fillStyle = col[13];
			cxa.beginPath();
			cxa.moveTo(sx+((s*0.8)*units)-((30+(15*sz))*units),sy+((30+(15*sz))*units)); //s
			cxa.lineTo(sx,sy-((20+(16*sz))*units)); //t
			cxa.lineTo(sx+((s*0.8)+((30+(15*sz)))*units),sy+((30+(15*sz))*units)); //s
			cxa.lineTo(sx+((4+(5*sz))*units),sy); //t
			cxa.lineTo(sx-((4+(5*sz))*units),sy); //t
			cxa.closePath();
			cxa.fill();
			
			cxa.fillStyle = sky[0];
			cxa.beginPath();
			cxa.moveTo(sx+((s*0.2)*units)-((4+(12*sz))*units),sy); //t
			cxa.lineTo(sx,sy-((8+(16*sz))*units)); //t
			cxa.lineTo(sx+((s*0.2)+((4+(12*sz)))*units),sy); //tip 1
			cxa.lineTo(sx+(s*units),sy+((20+(130*sz))*units)); //r
			cxa.closePath();
			cxa.fill();
			cxa.fillStyle = col[14];
			cxa.beginPath();
			cxa.moveTo(sx+((s*0.2)*units)-((4+(12*sz))*units),sy); //t
			cxa.lineTo(sx,sy-((8+(16*sz))*units)); //t
			cxa.lineTo(sx+((s*0.2)+((4+(12*sz)))*units),sy); //tip 1
			cxa.lineTo(sx+((s*0.2)*units),sy+((4+(10*sz))*units)); //r
			cxa.closePath();
			cxa.fill();
			cxa.fillStyle = col[10];
			cxa.beginPath();
			cxa.moveTo(sx+((s*0.2)*units)-((4+(12*sz))*units),sy); //t
			cxa.lineTo(sx+(s*0.5),sy+((20+(28*sz))*units)); //t
			cxa.lineTo(sx+((s*0.2)+((4+(12*sz)))*units),sy); //tip 1
			cxa.lineTo(sx+((s*0.2)*units),sy+((4+(10*sz))*units)); //r
			cxa.closePath();
			cxa.fill();
	
		}
	}
	
	
	// VINES //
	for (i=(vine1.length-6);i<vine1.length;i++) {
		cxa.fillStyle = col[14];
	    
		sx = dx + ((vine1[i].x)*units);
		sy = 0;
		vh = ((vine1[i].y)*units);
		s = (swaySmooth * vine1[i].mult)*units;
		
		cxa.beginPath();
		cxa.moveTo(sx-(4*units),sy); //t
		cxa.lineTo((sx+(s*0.2))-(3*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx+s,sy+(vh)); //tip 1
		cxa.lineTo((sx+(s*0.2))+(3*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx+(4*units),sy); //r
		cxa.closePath();
		cxa.fill();
	}
	
	// VINES GREEN//
	for (i=0;i<vine3.length;i++) {
		cxa.fillStyle = col[13];
	    
		sx = dx + ((vine3[i].x)*units);
		sy = 0;
		vh = ((vine3[i].y)*units);
		s = (swaySmooth * vine3[i].mult)*units;
		
		cxa.beginPath();
		cxa.moveTo(sx-(4*units),sy); //t
		cxa.lineTo((sx+(s*0.2))-(3*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx+s,sy+(vh)); //tip 1
		cxa.lineTo((sx+(s*0.2))+(3*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx+(4*units),sy); //r
		cxa.closePath();
		cxa.fill();
	}
	
	// PALM //
	cxa.fillStyle = col[11];
	for (i=0;i<palm.length;i++) {
		
		var position = palm[i].position;
		var l1 = palm[i].l1;
		var l2 = palm[i].l2;
		var l3 = palm[i].l3;
		var l4 = palm[i].l4;
		var s = swaySmooth * palm[i].mult;
		
			
		sx = dx + ((position.x+(s*0.3))*units);
		sy = 0 + ((position.y)*units);
		
		
		cxa.beginPath();
		cxa.moveTo(sx-(60*units),sy-(40*units)); //t
		cxa.lineTo(sx+((l1.x+s)*units),sy+(l1.y*units)); //tip 1
		cxa.lineTo(sx-(60*units),sy+(60*units)); //l
		cxa.lineTo(sx+((l2.x+s)*units),sy+(l2.y*units)); //tip 2
		cxa.lineTo(sx,sy+(80*units)); //c
		cxa.lineTo(sx+((l3.x+s)*units),sy+(l3.y*units)); //tip 3
		cxa.lineTo(sx+(60*units),sy+(60*units)); //r
		cxa.lineTo(sx+((l4.x+s)*units),sy+(l4.y*units)); //tip 4
		cxa.lineTo(sx+(60*units),sy-(40*units)); //tip 4
		cxa.closePath();
		cxa.fill();
		
	}
	
	// DANGLE FLOWERS //
	for (i=0;i<dangle.length;i++) {
		cxa.fillStyle = col[10];
		if (dangleCol==1) {
			cxa.fillStyle = sky[0];
		}
	    
		sx = dx + ((dangle[i].x)*units);
		sy = 0;
		vh = ((dangle[i].y)*units);
		s = (swaySmooth * (dangle[i].mult/4))*units;
		
		cxa.beginPath();
		cxa.moveTo(sx-(2*units),sy); //t
		cxa.lineTo((sx+(s*0.2))-(2*units),sy+((vh*0.5))); //r
		 
		
		for (h=0; h<dangle[i].mult; h++) {
			cxa.lineTo((sx+(s*(0.7+(h*0.05))))-(2*units),sy+vh+((h*26)*units));
			cxa.lineTo((sx+(s*(0.7+(h*0.05))))-(14*units),sy+vh+((h*26)*units)+(12*units));
			cxa.lineTo((sx+(s*(0.7+(h*0.05))))-(12*units),sy+vh+((h*26)*units)+(30*units));
			cxa.lineTo((sx+(s*(0.7+(h*0.05))))-(2*units),sy+vh+((h*26)*units)+(8*units));
			
		}
		
		cxa.lineTo(sx+(s*(0.4+(dangle[i].mult*0.1))),sy+vh+((dangle[i].mult*20)*units)+(28*units) );
		
		for (h=0; h<dangle[i].mult; h++) {
			cxa.lineTo((sx+(s*(0.7+(((dangle[i].mult-1)-h)*0.05))))+(2*units), sy+vh+((((dangle[i].mult-1)-h)*26)*units)+(8*units));
			cxa.lineTo((sx+(s*(0.7+(((dangle[i].mult-1)-h)*0.05))))+(12*units),sy+vh+((((dangle[i].mult-1)-h)*26)*units)+(30*units));
			cxa.lineTo((sx+(s*(0.7+(((dangle[i].mult-1)-h)*0.05))))+(14*units),sy+vh+((((dangle[i].mult-1)-h)*26)*units)+(12*units));
			cxa.lineTo((sx+(s*(0.7+(((dangle[i].mult-1)-h)*0.05))))+(2*units),sy+vh+((((dangle[i].mult-1)-h)*26)*units));

		}
		
		
		cxa.lineTo((sx+(s*0.2))+(2*units),sy+((vh*0.5))); //r
		cxa.lineTo(sx+(2*units),sy); //r
		cxa.closePath();
		cxa.fill();
	}
	
	
	// PALM FOREGROUND//
	cxa.fillStyle = col[6];
	
	if (foreGroundStyle==1) {
		for (i=0;i<palm2.length;i++) {
			
			cxa.fillStyle = col[6];
			if (palm2[i].mult>1.1) {
				cxa.fillStyle = col[11];
			}
			
			var position = palm2[i].position;
			var l1 = palm2[i].l1;
			var l2 = palm2[i].l2;
			var l3 = palm2[i].l3;
			var l4 = palm2[i].l4;
			var s = swaySmooth * palm2[i].mult;
			
				
			sx = dx + ((position.x+(s*0.3))*units);
			sy = fullY + ((position.y)*units);
			
			
			cxa.beginPath();
			cxa.moveTo(sx-(60*units),sy+(40*units)); //t
			cxa.lineTo(sx+((l1.x+s)*units),sy+(l1.y*units)); //tip 1
			cxa.lineTo(sx-(30*units),sy+(40*units)); //l
			cxa.lineTo(sx+((l2.x+s)*units),sy+(l2.y*units)); //tip 2
			cxa.lineTo(sx,sy+(60*units)); //c
			cxa.lineTo(sx+((l3.x+s)*units),sy+(l3.y*units)); //tip 3
			cxa.lineTo(sx+(30*units),sy+(40*units)); //r
			cxa.lineTo(sx+((l4.x+s)*units),sy+(l4.y*units)); //tip 4
			cxa.lineTo(sx+(60*units),sy+(40*units)); //tip 4
			cxa.closePath();
			cxa.fill();
			
		}
	}
	
	// GRASS CLUMPS //
	else if (foreGroundStyle==2||foreGroundStyle==3) {
		for (i=0;i<palm2.length;i++) {
			
			var position = palm2[i].position;
			var l1 = palm2[i].l1;
			var l2 = palm2[i].l2;
			var l3 = palm2[i].l3;
			var l4 = palm2[i].l4;
			var s = swaySmooth * palm2[i].mult;
			
				
			sx = dx + ((position.x+(s*0.3))*units);
			sy = fullY + ((position.y)*units);
			
			
			cxa.beginPath();
			cxa.moveTo(sx-(40*units),sy+(40*units)); //t
			cxa.lineTo(sx+((l1.x+s)*units),sy+(l1.y*units)); //tip 1
			cxa.lineTo(sx-(20*units),sy+(40*units)); //l
			cxa.lineTo(sx+((l2.x+s)*units),sy+(l2.y*units)); //tip 2
			cxa.lineTo(sx,sy+(60*units)); //c
			cxa.lineTo(sx+((l3.x+s)*units),sy+(l3.y*units)); //tip 3
			cxa.lineTo(sx+(20*units),sy+(40*units)); //r
			cxa.lineTo(sx+((l4.x+s)*units),sy+(l4.y*units)); //tip 4
			cxa.lineTo(sx+(40*units),sy+(40*units)); //tip 4
			cxa.closePath();
			cxa.fill();
			
		}
	} 
	else {
		
	}
	
	// FOREGROUND BROAD //
	if (foreGroundStyle==3) {
	
		for (i=0;i<broad2.length;i++) {
			
			var position = broad2[i].position;
			var l1 = broad2[i].l1;
			var l2 = broad2[i].l2;
			var l3 = broad2[i].l3;
			var l4 = broad2[i].l4;
			var m = broad2[i].mult;
			var s = swaySmooth * (broad2[i].mult*0.4);
				
			sx = 0 + ((position.x)*units);
			sy = fullY + ((position.y)*units);
			
			cxa.fillStyle = col[19];
			cxa.beginPath();
			cxa.moveTo(sx,sy+(40*units)); //b
			cxa.lineTo(sx+((l1.x*m)*units),sy+((l1.y*m)*units)); //l
			cxa.lineTo(sx+((((l3.x-20)*m)+(s+0.8))*units),sy+((l3.y*m)*units)); //l2
			cxa.lineTo(sx+(((l4.x*m)+s)*units),sy+((l4.y*m)*units)); //tip
			cxa.lineTo(sx+((((l3.x+20)*m)+(s+0.8))*units),sy+((l3.y*m)*units)); //r2
			cxa.lineTo(sx+((l2.x*m)*units),sy+((l2.y*m)*units)); //r
			cxa.closePath();
			cxa.fill();
			
			
			cxa.fillStyle = col[3];
			cxa.beginPath();
			cxa.moveTo(sx-(5*units),sy+(40*units)); //b
			cxa.lineTo(sx+(5*units),sy+(40*units)); //l
			cxa.lineTo(sx+(((l3.x*m)+(s+1.5))*units),sy+((l3.y*m)*units)); //l2
			cxa.closePath();
			cxa.fill();
			
			
		}
	}
	
	if (scene==mainScene) {
	    flickers(mouseX,mouseY);
	}
}


//-------------------------------------------------------------------------------------------
// PAN
//-------------------------------------------------------------------------------------------


function drawPan() {
	
	cxa.fillStyle = col[9];
	
	sx = dx;
	sy = panY + (unitOne*5);

	
	cxa.fillStyle = col[9];
	sx = dx;
	sy = panY;
	cxa.beginPath();
	cxa.moveTo(sx-(10.8*unitOne),sy);
	cxa.lineTo(sx-(10.8*unitOne),sy+(10*unitOne));
	cxa.lineTo(sx,sy+(16.2*unitOne)); 
	cxa.lineTo(sx+(10.8*unitOne),sy+(10*unitOne));
	cxa.lineTo(sx+(10.8*unitOne),sy);
	cxa.closePath();
	cxa.fill();
	
	
	drawHex(sx,sy,7*unitOne);
	drawHex(sx-(9.4*unitOne),sy,7*unitOne);
	drawHex(sx+(9.4*unitOne),sy,7*unitOne);
	
	drawHex(sx-(4.7*unitOne),sy-(8.1*unitOne),7*unitOne);
	drawHex(sx+(4.7*unitOne),sy-(8.1*unitOne),7*unitOne);
	
	cxa.fillStyle = col[12];
	if (panOn[0]==true) {cxa.fillStyle = sky[0];}
	drawHex(sx,sy,5*unitOne);
	
	cxa.fillStyle = col[12];
	if (panOn[1]==true) {cxa.fillStyle = sky[0];}
	drawHex(sx-(9.4*unitOne),sy,5*unitOne);
	
	cxa.fillStyle = col[12];
	if (panOn[2]==true) {cxa.fillStyle = sky[0];}
	drawHex(sx+(9.4*unitOne),sy,5*unitOne);
	
	cxa.fillStyle = col[12];
	if (panOn[3]==true) {cxa.fillStyle = sky[0];}
	drawHex(sx-(4.7*unitOne),sy-(8.1*unitOne),5*unitOne);
	
	cxa.fillStyle = col[12];
	if (panOn[4]==true) {cxa.fillStyle = sky[0];}
	drawHex(sx+(4.7*unitOne),sy-(8.1*unitOne),5*unitOne);
	
	
	rad = 5*unitOne;
	sx = (dx-(4.7*unitOne));
	sy = (panY+(8.1*unitOne));
	
	cxa.fillStyle = col[12];
	if (panOn[5]==true) {cxa.fillStyle = sky[0];}
	cxa.beginPath();
	cxa.moveTo(sx,sy-(1*rad)); //b
	cxa.lineTo(sx-(0.87*rad),sy-(0.5*rad)); 
	cxa.lineTo(sx+(0.87*rad),sy+(0.5*rad)); 
	cxa.lineTo(sx+(0.87*rad),sy-(0.5*rad)); 
	cxa.closePath();
	cxa.fill();
	
	sx = (dx+(4.7*unitOne));
	
	cxa.fillStyle = col[12];
	if (panOn[6]==true) {cxa.fillStyle = sky[0];}
	cxa.beginPath();
	cxa.moveTo(sx,sy-(1*rad)); //b
	cxa.lineTo(sx-(0.87*rad),sy-(0.5*rad));
	cxa.lineTo(sx-(0.87*rad),sy+(0.5*rad)); 
	cxa.lineTo(sx+(0.87*rad),sy-(0.5*rad)); 
	cxa.closePath();
	cxa.fill();
	
	// ROLLOVER //
	cxa.fillStyle = sky[2];
	sx = dx;
	sy = panY;
	
	if (panOn[0]==false) {
		drawHexOver(sx,sy,5*unitOne,0);
	}
	if (panOn[1]==false) {
		drawHexOver(sx-(9.4*unitOne),sy,5*unitOne,1);
	}
	if (panOn[2]==false) {
		drawHexOver(sx+(9.4*unitOne),sy,5*unitOne,2);
	}
	if (panOn[3]==false) {
		drawHexOver(sx-(4.7*unitOne),sy-(8.1*unitOne),5*unitOne,3);
	}
	if (panOn[4]==false) {
		drawHexOver(sx+(4.7*unitOne),sy-(8.1*unitOne),5*unitOne,4);
	}
	if (panOn[5]==false) {
		drawHexOver2(sx-(4.7*unitOne),sy+(8.1*unitOne),5*unitOne,5);
	}
	if (panOn[6]==false) {
		drawHexOver(sx+(4.7*unitOne),sy+(8.1*unitOne),5*unitOne,6);
	}
	
	
	cxa.lineWidth = (unitOne*0.2);
	cxa.strokeStyle = col[6];
	
	sx = dx;
	sy = panY;
	
	cxa.beginPath();
	cxa.moveTo(sx-(9.3*unitOne),sy+(8.3*unitOne)); //b
	cxa.lineTo(sx,sy+(13.7*unitOne)); //t
	cxa.lineTo(sx+(9.3*unitOne),sy+(8.3*unitOne)); //t
	cxa.stroke();
	
	
	// CLOSE
	cxa.fillStyle = col[9];
	if (panCloseOver==true) {cxa.fillStyle = sky[0];}
	
	drawHex(sx+(21.4*unitOne),sy,5*unitOne);
	
	//cross
	cxa.strokeStyle = col[10];
	
	cxa.beginPath();
	cxa.moveTo(dx+(20.9*unitOne),sy-(0.5*unitOne)); //b
	cxa.lineTo(dx+(21.9*unitOne),sy+(0.5*unitOne)); //t
	cxa.stroke();
	
	cxa.beginPath();
	cxa.moveTo(dx+(21.9*unitOne),sy-(0.5*unitOne)); //b
	cxa.lineTo(dx+(20.9*unitOne),sy+(0.5*unitOne)); //t
	cxa.stroke();
	
}



//-------------------------------------------------------------------------------------------
//  LASER HARP
//-------------------------------------------------------------------------------------------


function drawHarp() {
	
	cxa.fillStyle = col[9];
	
	sx = dx - (unitOne*5);
	sy = harpY ;
	
	
	
	cxa.fillStyle = col[9];
	
	//plate//
	cxa.beginPath();
	cxa.moveTo(sx-(8*unitOne),sy+(20*unitOne));
	cxa.lineTo(sx+(24*unitOne),sy-(20*unitOne));
	cxa.lineTo(sx-(8*unitOne),sy-(20*unitOne));
	cxa.closePath();
	cxa.fill();
	
	//tri
	cxa.fillStyle = col[16];
	cxa.beginPath();
	cxa.moveTo(sx-(11.5*unitOne),sy-(16.5*unitOne));
	cxa.lineTo(sx-(4.6*unitOne),sy-(16.6*unitOne));
	cxa.lineTo(sx-(8*unitOne),sy-(13*unitOne)); // tip
	cxa.closePath();
	cxa.fill();
	
	
	//bridge//
	
	cxa.beginPath();
	cxa.moveTo(sx-(8*unitOne),sy+(15*unitOne));
	cxa.lineTo(sx-(8*unitOne),sy+(11.6*unitOne));
	cxa.lineTo(sx+(16*unitOne),sy-(18.5*unitOne));
	cxa.lineTo(sx+(16.8*unitOne),sy-(16*unitOne));
	cxa.closePath();
	cxa.fill();
	
	
	
	// STRINGS //
	cxa.lineWidth = (unitOne*0.2);
	cxa.strokeStyle = sky[2];
	
	
	harpOnCheck(0,10);
	cxa.beginPath();
	cxa.moveTo(sx-(6.6*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx-(6.6*unitOne),sy+(14.75*unitOne)); //b
	cxa.stroke();
	
	
	harpOnCheck(1,7);
	cxa.beginPath();
	cxa.moveTo(sx-(5.2*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx-(5.2*unitOne),sy+(13*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(2,7);
	cxa.beginPath();
	cxa.moveTo(sx-(3.8*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx-(3.8*unitOne),sy+(11.25*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(3,7);
	cxa.beginPath();
	cxa.moveTo(sx-(2.4*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx-(2.4*unitOne),sy+(9.5*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(4,7);
	cxa.beginPath();
	cxa.moveTo(sx-(1*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx-(1*unitOne),sy+(7.75*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(5,7);
	cxa.beginPath();
	cxa.moveTo(sx+(0.4*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx+(0.4*unitOne),sy+(6*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(6,7);
	cxa.beginPath();
	cxa.moveTo(sx+(1.8*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx+(1.8*unitOne),sy+(4.25*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(7,10);
	cxa.beginPath();
	cxa.moveTo(sx+(3.2*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx+(3.2*unitOne),sy+(2.5*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(8,7);
	cxa.beginPath();
	cxa.moveTo(sx+(4.6*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx+(4.6*unitOne),sy+(0.75*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(9,7);
	cxa.beginPath();
	cxa.moveTo(sx+(6*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx+(6*unitOne),sy-(1*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(10,7);
	cxa.beginPath();
	cxa.moveTo(sx+(7.4*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx+(7.4*unitOne),sy-(2.75*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(11,7);
	cxa.beginPath();
	cxa.moveTo(sx+(8.8*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx+(8.8*unitOne),sy-(4.5*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(12,7);
	cxa.beginPath();
	cxa.moveTo(sx+(10.2*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx+(10.2*unitOne),sy-(6.25*unitOne)); //b
	cxa.stroke();
	
	harpOnCheck(13,7);
	cxa.beginPath();
	cxa.moveTo(sx+(11.6*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx+(11.6*unitOne),sy-(8*unitOne)); //b
	cxa.stroke();
	
	
	harpOnCheck(14,10);
	cxa.beginPath();
	cxa.moveTo(sx+(13*unitOne),sy-(16.5*unitOne)); //t
	cxa.lineTo(sx+(13*unitOne),sy-(9.75*unitOne)); //b
	cxa.stroke();
	
	for (i=0;i<15;i++) {
		if (harpN==i) {
		    cxa.strokeStyle = sky[0];
		    rand = 3 + (Math.random()*5);
		    cxa.lineWidth = (unitOne*0.4);
			cxa.beginPath();
			cxa.moveTo(sx-(6.6*unitOne)+((1.4*i)*unitOne),sy+(14.75*unitOne)-((1.75*i)*unitOne)-(rand*unitOne)); //t
			cxa.lineTo(sx-(6.6*unitOne)+((1.4*i)*unitOne),sy+(14.75*unitOne)-((1.75*i)*unitOne)); //b
			cxa.stroke();
		}
		
	}
	
	
	
	
	// FRAME //
	cxa.fillStyle = col[9];
	cxa.beginPath();
	cxa.moveTo(sx-(8*unitOne),sy+(20*unitOne));
	cxa.lineTo(sx+(24*unitOne),sy-(20*unitOne));
	cxa.lineTo(sx-(8*unitOne),sy-(20*unitOne));
	
	cxa.lineTo(sx-(11.5*unitOne),sy-(16.5*unitOne));
	cxa.lineTo(sx+(16.8*unitOne),sy-(16.5*unitOne));//
	cxa.lineTo(sx-(8*unitOne),sy+(14.5*unitOne));//
	
	
	cxa.closePath();
	cxa.fill();
	
	
	
	
	
	cxa.lineWidth = (unitOne*0.2);
	cxa.strokeStyle = col[6];
	
	
	
	sx = dx;
	sy = harpY ;
	
	
	// CLOSE
	cxa.fillStyle = col[9];
	if (harpCloseOver==true) {cxa.fillStyle = sky[0];}
	
	drawHex(sx+(18.4*unitOne),sy,5*unitOne);
	
	//cross
	cxa.strokeStyle = col[10];
	
	cxa.beginPath();
	cxa.moveTo(dx+(17.9*unitOne),sy-(0.5*unitOne)); //b
	cxa.lineTo(dx+(18.9*unitOne),sy+(0.5*unitOne)); //t
	cxa.stroke();
	
	cxa.beginPath();
	cxa.moveTo(dx+(18.9*unitOne),sy-(0.5*unitOne)); //b
	cxa.lineTo(dx+(17.9*unitOne),sy+(0.5*unitOne)); //t
	cxa.stroke();
	
}


//-------------------------------------------------------------------------------------------
//  CONSOLE
//-------------------------------------------------------------------------------------------


function drawDisplay() {
	
	cxa.globalAlpha = 1;
	
	// CONSOLE OPEN//
	cxa.fillStyle = col[10];
	if (consoleOver==true) {
		cxa.fillStyle = sky[0];
	}
	
	cxa.beginPath();
	cxa.moveTo(dx-(8*unitOne),consoleY); //b
	cxa.lineTo(dx,consoleY-(5*unitOne)); //t
	cxa.lineTo(dx+(8*unitOne),consoleY); //tip 
	cxa.closePath();
	cxa.fill();
	
	// MARKINGS //
	cxa.fillStyle = col[2];
	cxa.lineWidth = (unitOne*0.2);
	cxa.strokeStyle = col[2];
	
	cxa.beginPath();
	cxa.moveTo(dx-(0.5*unitOne),consoleY-(3*unitOne)); //b
	cxa.lineTo(dx-(0.5*unitOne),consoleY-(2*unitOne)); //t
	cxa.stroke();
	
	cxa.beginPath();
	cxa.moveTo(dx-(0*unitOne),consoleY-(3*unitOne)); //b
	cxa.lineTo(dx-(0*unitOne),consoleY-(1.5*unitOne)); //t
	cxa.stroke();
	
	cxa.beginPath();
	cxa.moveTo(dx+(0.5*unitOne),consoleY-(3*unitOne)); //b
	cxa.lineTo(dx+(0.5*unitOne),consoleY-(2*unitOne)); //t
	cxa.stroke();
	
	cxa.beginPath();
	cxa.moveTo(dx-(0.5*unitOne),consoleY-(3.4*unitOne)); //b
	cxa.lineTo(dx-(0.5*unitOne),consoleY-(3.2*unitOne)); //t
	cxa.stroke();
	
	cxa.beginPath();
	cxa.moveTo(dx-(0*unitOne),consoleY-(3.4*unitOne)); //b
	cxa.lineTo(dx-(0*unitOne),consoleY-(3.2*unitOne)); //t
	cxa.stroke();
	
	cxa.beginPath();
	cxa.moveTo(dx+(0.5*unitOne),consoleY-(3.4*unitOne)); //b
	cxa.lineTo(dx+(0.5*unitOne),consoleY-(3.2*unitOne)); //t
	cxa.stroke();
	
	
	if (consoleY<(fullY-1)) {
		
		// COLS //
		dark = col[17];
		light = col[14];
		mid = col[10];
		highlight = sky[0];
		
		
		cxa.fillStyle = col[9]; // BG
		cxa.fillRect(0,consoleY,fullX,fullY);
		
		cxa.fillStyle = highlight; // BG
		cxa.fillRect(0,consoleY+(fullY-(6.5*unitOne)),fullX,6.5*unitOne);
		
		sy = consoleY+halfY-(3.25*unitOne);
		
	
		// CONSOLE CLOSE//
		cxa.fillStyle = col[12];
		
		// vine
		s = (swaySmooth * 1)*units;
		
		cxa.beginPath();
		cxa.moveTo(dx+(3.8*unitOne),consoleY); 
		cxa.lineTo(dx+(4*unitOne)+(s*1.2),consoleY+(14*unitOne)); 
		cxa.lineTo(dx+(4.2*unitOne),consoleY);
		
		cxa.lineTo(dx+(4.7*unitOne),consoleY);
		cxa.lineTo(dx+(4.9*unitOne)+s,consoleY+(8*unitOne));
		cxa.lineTo(dx+(5.1*unitOne),consoleY); 
		cxa.closePath();
		cxa.fill();
		
	
		
		cxa.fillStyle = dark;
		
		if (consoleQuitOver==true) {
			cxa.fillStyle = highlight;
		}
		
		cxa.beginPath();
		cxa.moveTo(dx-(8*unitOne),consoleY); //b
		cxa.lineTo(dx,consoleY+(5*unitOne)); //t
		cxa.lineTo(dx+(8*unitOne),consoleY); //tip 
		cxa.closePath();
		cxa.fill();
		
		//cross
		cxa.strokeStyle = mid;
		
		cxa.beginPath();
		cxa.moveTo(dx-(0.5*unitOne),consoleY+(2.5*unitOne)); //b
		cxa.lineTo(dx+(0.5*unitOne),consoleY+(1.5*unitOne)); //t
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(0.5*unitOne),consoleY+(2.5*unitOne)); //b
		cxa.lineTo(dx-(0.5*unitOne),consoleY+(1.5*unitOne)); //t
		cxa.stroke();
		
		
		//chevron
		cxa.strokeStyle = dark;
		xOff = 20;
		
		cxa.beginPath();
		cxa.moveTo(dx-(1.5*unitOne)-(xOff*unitOne),sy+(4*unitOne)); //b
		cxa.lineTo(dx-(1.5*unitOne)-(xOff*unitOne),sy+(6*unitOne)); //b
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx-(0.75*unitOne)-(xOff*unitOne),sy+(4*unitOne)); //b
		cxa.lineTo(dx-(0.75*unitOne)-(xOff*unitOne),sy+(6*unitOne)); //b
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(0*unitOne)-(xOff*unitOne),sy+(4*unitOne)); //b
		cxa.lineTo(dx+(0*unitOne)-(xOff*unitOne),sy+(6*unitOne)); //b
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(0.75*unitOne)-(xOff*unitOne),sy+(4*unitOne)); //b
		cxa.lineTo(dx+(0.75*unitOne)-(xOff*unitOne),sy+(6*unitOne)); //b
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(1.5*unitOne)-(xOff*unitOne),sy+(4*unitOne)); //b
		cxa.lineTo(dx+(1.5*unitOne)-(xOff*unitOne),sy+(6*unitOne)); //b
		cxa.stroke();
		
		
		
		// BTNS //
		cxa.beginPath();
		cxa.moveTo(dx+(21.8*unitOne),sy-(4.1*unitOne)); //b
		cxa.lineTo(dx+(28.0*unitOne),sy-(7.64*unitOne)); //b
		cxa.lineTo(dx+(28.0*unitOne),consoleY); //b
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(26.5*unitOne),sy+(4.1*unitOne)); //b
		cxa.lineTo(dx+(30.0*unitOne),sy+(2.1*unitOne)); //b
		cxa.lineTo(dx+(30.0*unitOne),consoleY); //b
		cxa.stroke();
		
		// PAN BTN
		cxa.fillStyle = dark;
		if (panBtnOver==true&&drumGainDragging==false) {cxa.fillStyle = highlight;}
		drawHex(dx+(17.5*unitOne),sy-(4.1*unitOne),5*unitOne);
		
		
		
		// HARP BTN
		cxa.fillStyle = dark;
		if (harpBtnOver==true&&drumGainDragging==false) {cxa.fillStyle = highlight;}
		drawHex(dx+(22.2*unitOne),sy+(4.1*unitOne),5*unitOne);
		
		// MARKINGS
		//cross
		cxa.strokeStyle = mid;
		
		//pan
		cxa.beginPath();
		cxa.moveTo(dx+(16.75*unitOne),sy-(4.85*unitOne)); //b
		cxa.lineTo(dx+(17.25*unitOne),sy-(4.85*unitOne)); //t
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(17.75*unitOne),sy-(4.85*unitOne)); //b
		cxa.lineTo(dx+(18.25*unitOne),sy-(4.85*unitOne)); //t
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(16.25*unitOne),sy-(4.1*unitOne)); //b
		cxa.lineTo(dx+(16.75*unitOne),sy-(4.1*unitOne)); //t
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(17.25*unitOne),sy-(4.1*unitOne)); //b
		cxa.lineTo(dx+(17.75*unitOne),sy-(4.1*unitOne)); //t
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(18.25*unitOne),sy-(4.1*unitOne)); //b
		cxa.lineTo(dx+(18.75*unitOne),sy-(4.1*unitOne)); //t
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(16.75*unitOne),sy-(3.35*unitOne)); //b
		cxa.lineTo(dx+(17.25*unitOne),sy-(3.35*unitOne)); //t
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(17.75*unitOne),sy-(3.35*unitOne)); //b
		cxa.lineTo(dx+(18.25*unitOne),sy-(3.35*unitOne)); //t
		cxa.stroke();
		
		//harp
		cxa.beginPath();
		cxa.moveTo(dx+(21.45*unitOne),sy+(3.1*unitOne)); //b
		cxa.lineTo(dx+(21.45*unitOne),sy+(5.6*unitOne)); //t
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(22.2*unitOne),sy+(3.1*unitOne)); //b
		cxa.lineTo(dx+(22.2*unitOne),sy+(4.85*unitOne)); //t
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx+(22.95*unitOne),sy+(3.1*unitOne)); //b
		cxa.lineTo(dx+(22.95*unitOne),sy+(4.1*unitOne)); //t
		cxa.stroke();
		
		//chevron
		cxa.strokeStyle = dark;
		
		cxa.beginPath();
		cxa.moveTo(dx-(2*unitOne),sy+(5*unitOne)); //b
		cxa.lineTo(dx-(1*unitOne),sy+(4*unitOne)); //b
		cxa.lineTo(dx+(0*unitOne),sy+(5*unitOne)); //t
		cxa.lineTo(dx+(1*unitOne),sy+(4*unitOne)); //t
		cxa.lineTo(dx+(2*unitOne),sy+(5*unitOne)); //t
		cxa.stroke();
		
		cxa.beginPath();
		cxa.moveTo(dx-(2*unitOne),sy+(6*unitOne)); //b
		cxa.lineTo(dx-(1*unitOne),sy+(5*unitOne)); //b
		cxa.lineTo(dx+(0*unitOne),sy+(6*unitOne)); //t
		cxa.lineTo(dx+(1*unitOne),sy+(5*unitOne)); //t
		cxa.lineTo(dx+(2*unitOne),sy+(6*unitOne)); //t
		cxa.stroke();
		
	
		// PLANTS //
		cxa.fillStyle = col[13];
		
		cxa.beginPath();
		cxa.moveTo(dx+(33*unitOne),consoleY);
		cxa.lineTo(dx+(33*unitOne)+(s*0.4),consoleY+(12*unitOne)); 
		cxa.lineTo(dx+(33.25*unitOne)+s,consoleY+(36*unitOne)); 
		cxa.lineTo(dx+(33.5*unitOne)+(s*0.4),consoleY+(12*unitOne)); 
		cxa.lineTo(dx+(33.5*unitOne),consoleY); 
		cxa.closePath();
		cxa.fill();
		
		cxa.beginPath();
		cxa.moveTo(dx+(32*unitOne),consoleY);
		cxa.lineTo(dx+(32*unitOne)+(s*0.5),consoleY+(4*unitOne)); 
		cxa.lineTo(dx+(32.25*unitOne)+(s*1.2),consoleY+(12*unitOne)); 
		cxa.lineTo(dx+(32.5*unitOne)+(s*0.5),consoleY+(4*unitOne)); 
		cxa.lineTo(dx+(32.5*unitOne),consoleY); 
		cxa.closePath();
		cxa.fill();
		
		cxa.beginPath();
		cxa.moveTo(dx+(25*unitOne),consoleY);
		cxa.lineTo(dx+(25*unitOne)+(s*0.4),consoleY+(6*unitOne)); 
		cxa.lineTo(dx+(25.25*unitOne)+(s*1),consoleY+(18*unitOne)); 
		cxa.lineTo(dx+(25.5*unitOne)+(s*0.4),consoleY+(6*unitOne)); 
		cxa.lineTo(dx+(25.5*unitOne),consoleY); 
		cxa.closePath();
		cxa.fill();
		
		
		cxa.fillStyle = col[11];
		
		cxa.beginPath();
		cxa.moveTo(dx+(3.8*unitOne),consoleY); 
		cxa.lineTo(dx+(3*unitOne)+(s*0.2),consoleY+(4*unitOne)); 
		cxa.lineTo(dx+(2*unitOne)+(s*0.8),consoleY+(7*unitOne)); //tip 
		cxa.lineTo(dx+(4.25*unitOne)+(s*0.2),consoleY+(3.5*unitOne));
		cxa.lineTo(dx+(4.5*unitOne),consoleY); 
		cxa.closePath();
		cxa.fill();
		
		cxa.beginPath();
		cxa.moveTo(dx+(5*unitOne),consoleY); 
		cxa.lineTo(dx+(6*unitOne)+(s*0.1),consoleY+(2*unitOne)); 
		cxa.lineTo(dx+(6.1*unitOne)+(s*0.3),consoleY+(6*unitOne)); //tip 
		cxa.lineTo(dx+(6.9*unitOne)+(s*0.1),consoleY+(1.5*unitOne));
		cxa.lineTo(dx+(6.1*unitOne),consoleY); 
		cxa.closePath();
		cxa.fill();
		
		
		cxa.beginPath();
		cxa.moveTo(dx+(27.3*unitOne),consoleY); 
		cxa.lineTo(dx+(26*unitOne)+(s*0.1),consoleY+(2.4*unitOne)); 
		cxa.lineTo(dx+(26.1*unitOne)+(s*0.4),consoleY+(7*unitOne)); //tip 
		cxa.lineTo(dx+(27*unitOne)+(s*0.1),consoleY+(3.5*unitOne));
		cxa.lineTo(dx+(28*unitOne),consoleY); 
		cxa.closePath();
		cxa.fill();
		
		cxa.beginPath();
		cxa.moveTo(dx+(28.6*unitOne),consoleY); 
		cxa.lineTo(dx+(28.8*unitOne)+(s*0.2),consoleY+(2.6*unitOne)); 
		cxa.lineTo(dx+(31*unitOne)+(s*1),consoleY+(6*unitOne)); //tip 
		cxa.lineTo(dx+(29.9*unitOne)+(s*0.2),consoleY+(1.5*unitOne));
		cxa.lineTo(dx+(29.5*unitOne),consoleY); 
		cxa.closePath();
		cxa.fill();
		
	
	
		// TITLE //
		if (fullY>300 && fullY>(halfX*0.9)) {
			cxa.textAlign = 'center';
			cxa.fillStyle = dark;
			
			cxa.font = "300 "+(headerType)+"px Dosis";
			cxa.fillText("FL0RA DRIFT", dx, sy + (unitOne*16));
			headerWidth = (cxa.measureText("FL0RA DRIFT").width)/2;
			
			
			cxa.lineWidth = 1;
			cxa.lineWidth = unitOne*0.2;
			cxa.strokeStyle = dark;
			if (wvOver==true) {
				cxa.strokeStyle = highlight;
			}
			
			
			cxa.fillStyle = highlight;
			cxa.font = "300 "+(dataType)+"px Cabin Condensed";
			cxa.fillText("whitevinyldesign.com", dx, sy+(18.8*unitOne));
			linkWidth = (cxa.measureText("whitevinyldesign.com").width)/2;
			
			cxa.beginPath();
			cxa.moveTo(dx-linkWidth-(1*unitOne),sy+(18.5*unitOne)); //b
			cxa.lineTo(dx-(headerWidth),sy+(18.5*unitOne)); //t
			cxa.stroke();
			cxa.beginPath();
			cxa.moveTo(dx+linkWidth+(1*unitOne),sy+(18.5*unitOne)); //b
			cxa.lineTo(dx+(headerWidth),sy+(18.5*unitOne)); //t
			cxa.stroke();
		}
		
		
	
		// DRUM GAIN //
		cxa.fillStyle = dark;
		gFill = 0.75 + (1.5*drumLevel);
		
		cxa.beginPath();
		cxa.arc(dx,sy,5*unitOne,Math.PI*gFill,Math.PI*2.25);
		cxa.arc(dx,sy,3*unitOne,Math.PI*2.25,Math.PI*gFill,true);
		cxa.closePath();
		cxa.fill();
		
		canvasA.style.cursor="default";
		cxa.fillStyle = light;
		if ((drumGainOver==true||drumGainDragging==true)&&bpmSetDragging==false) { // ROLLOVER
			cxa.fillStyle = highlight;
			sx = mouseX;
			sy = mouseY;
			
			
			cxa.beginPath();
			cxa.moveTo(sx-(0.5*unitOne),sy-(0.5*unitOne)); //b
			cxa.lineTo(sx-(0.5*unitOne),sy-(1*unitOne)); //b
			cxa.lineTo(sx-(1.5*unitOne),sy); //b
			cxa.lineTo(sx-(0.5*unitOne),sy+(1*unitOne)); //t
			cxa.lineTo(sx-(0.5*unitOne),sy+(0.5*unitOne)); //t
			
			cxa.lineTo(sx+(0.5*unitOne),sy+(0.5*unitOne)); //t
			cxa.lineTo(sx+(0.5*unitOne),sy+(1*unitOne)); //t
			cxa.lineTo(sx+(1.5*unitOne),sy); //b
			cxa.lineTo(sx+(0.5*unitOne),sy-(1*unitOne)); //b
			cxa.lineTo(sx+(0.5*unitOne),sy-(0.5*unitOne)); //b
			cxa.closePath();
			cxa.fill();
			
			canvasA.style.cursor="none";
		}
		sx = dx;
		sy = consoleY+halfY-(3.25*unitOne);
		
		cxa.beginPath();
		cxa.arc(dx,sy,5*unitOne,Math.PI*0.75,Math.PI*gFill);
		cxa.arc(dx,sy,3*unitOne,Math.PI*gFill,Math.PI*0.75,true);
		cxa.closePath();
		cxa.fill();
		
	
		// TEMPO POT //
		cxa.fillStyle = dark;
		gFill = 0.75 + ((bpm-80)/100)*1.5;
		xOff = 20;
		
		cxa.beginPath();
		cxa.arc(dx-(xOff*unitOne),sy,5*unitOne,Math.PI*gFill,Math.PI*2.25);
		cxa.arc(dx-(xOff*unitOne),sy,3*unitOne,Math.PI*2.25,Math.PI*gFill,true);
		cxa.closePath();
		cxa.fill();
		
		
		cxa.fillStyle = light;
		if ((bpmSetOver==true||bpmSetDragging==true)&&drumGainDragging==false) { // ROLLOVER
			cxa.fillStyle = highlight;
			sx = mouseX;
			sy = mouseY;
			
			
			cxa.beginPath();
			cxa.moveTo(sx-(0.5*unitOne),sy-(0.5*unitOne)); //b
			cxa.lineTo(sx-(0.5*unitOne),sy-(1*unitOne)); //b
			cxa.lineTo(sx-(1.5*unitOne),sy); //b
			cxa.lineTo(sx-(0.5*unitOne),sy+(1*unitOne)); //t
			cxa.lineTo(sx-(0.5*unitOne),sy+(0.5*unitOne)); //t
			
			cxa.lineTo(sx+(0.5*unitOne),sy+(0.5*unitOne)); //t
			cxa.lineTo(sx+(0.5*unitOne),sy+(1*unitOne)); //t
			cxa.lineTo(sx+(1.5*unitOne),sy); //b
			cxa.lineTo(sx+(0.5*unitOne),sy-(1*unitOne)); //b
			cxa.lineTo(sx+(0.5*unitOne),sy-(0.5*unitOne)); //b
			cxa.closePath();
			cxa.fill();
			canvasA.style.cursor="none";
		}
		sx = dx;
		sy = consoleY+halfY-(3.25*unitOne);
		
		
		cxa.beginPath();
		cxa.arc(dx-(xOff*unitOne),sy,5*unitOne,Math.PI*0.75,Math.PI*gFill);
		cxa.arc(dx-(xOff*unitOne),sy,3*unitOne,Math.PI*gFill,Math.PI*0.75,true);
		cxa.closePath();
		cxa.fill();
		
		
		
		// SHARE //
		sx = fullX - (unitOne*1.8);
		sy = consoleY + fullY - (unitOne*1.7);
		
		cxa.fillStyle = col[10];
		if (twitterOver==true) {cxa.fillStyle = col[9];}
		cxa.fillRect(sx,sy,-6*unitOne,-2.8*unitOne);
		
		cxa.fillStyle = col[10];
		if (fbOver==true) {cxa.fillStyle = col[9];}
		cxa.fillRect(sx-(7*unitOne),sy,-6*unitOne,-2.8*unitOne);
		
		cxa.font = "300 "+(dataType)+"px Cabin Condensed";
		cxa.fillStyle = highlight;
		
		if (fullX>900) {
			cxa.fillText("Facebook", fullX-(11.8*unitOne), consoleY+fullY-(2.7*unitOne));
			cxa.fillText("Twitter", fullX-(4.8*unitOne), consoleY+fullY-(2.7*unitOne));
		} else {
			cxa.fillText("F", fullX-(11.8*unitOne), consoleY+fullY-(2.7*unitOne));
			cxa.fillText("T", fullX-(4.8*unitOne), consoleY+fullY-(2.7*unitOne));

		}
		
		cxa.fillStyle = dark;
		cxa.fillText("Procedurally generated music & visuals. Requires Chrome.", dx, sy-(unitOne));
	
	
	}
	
	// PLAY PAUSE //
	cxa.fillStyle = col[10];
	if (consoleY<(fullY-(1.5*unitOne))) {
		cxa.fillStyle = col[12];
	}
	
	if (pauseOver==true) {
		cxa.fillStyle = sky[0];
		if (consoleY<(fullY-(1.5*unitOne))) {
			cxa.fillStyle = mid;
		}
		
	}
	
	sx = unitOne*3;
	sy = fullY - (unitOne*1.7);
	if (paused==false) {
		cxa.fillRect(sx-(1.2*unitOne),sy,0.8*unitOne,-2.8*unitOne);
		cxa.fillRect(sx+(0.3*unitOne),sy,0.8*unitOne,-2.8*unitOne);
	} else {
		cxa.beginPath();
		cxa.moveTo(sx-(1.2*unitOne),sy-(0.2*unitOne)); //b
		cxa.lineTo(sx-(1.2*unitOne),sy-(2.8*unitOne)); //t
		cxa.lineTo(sx+(1.3*unitOne),sy-(1.5*unitOne)); //tip 
		cxa.closePath();
		cxa.fill();
	}
	
	cxa.fillStyle = col[1];
}



//-------------------------------------------------------------------------------------------
//  TITLE SCREENS
//-------------------------------------------------------------------------------------------


function drawTitle() {
	
	if (titleY>(-halfY)) { // when visible
	
		cxa.fillStyle = col[9];
		cxa.globalAlpha = 1;
		cxa.beginPath();
		cxa.arc(dx,titleY+(unitOne),18*unitOne,0,Math.PI*20);
		cxa.closePath();
		cxa.fill();
		
		
		cxa.globalAlpha = textA;
		
		if (scene==1) {
			cxa.textAlign = 'center';
			cxa.fillStyle = white;
			
			cxa.font = "300 "+(headerType)+"px Dosis";
			cxa.fillText("FL0RA DRIFT", dx, titleY+(3*unitOne));
		} else  {
			
			cxa.textAlign = 'center';
			cxa.fillStyle = white;
			cxa.globalAlpha = textA*0.25;
			cxa.font = "400 "+(dataType)+"px Cabin Condensed";
			txt = "Flora Drift requires Chrome for the best experience, as it makes heavy use of the Web Audio API."
			if (fullX<780) {
				txt = "Flora Drift requires Chrome for the best experience."
			}
			wordWrap(cxa,txt,dx,titleY+(11*unitOne),dataType*1.2,24*unitOne);
			
			cxa.globalAlpha = textA;
			cxa.fillText("select", dx, titleY+(unitOne*1.5));
			
			cxa.font = "300 "+(midType)+"px Dosis";
			cxa.lineWidth = unitOne*0.2;
			cxa.strokeStyle = white;
			
			if (thisFineOver==true) {
				cxa.beginPath();
				cxa.moveTo(dx - (10*unitOne),titleY+(5.3*unitOne)); //b
				cxa.lineTo(dx - (8*unitOne),titleY+(5.3*unitOne)); //t
				cxa.stroke();
				cxa.beginPath();
				cxa.moveTo(dx + (10*unitOne),titleY+(5.3*unitOne)); //b
				cxa.lineTo(dx + (8*unitOne),titleY+(5.3*unitOne)); //t
				cxa.stroke();
				cxa.globalAlpha = textA*0.25;
			}
			cxa.fillText("FULL SCREEN", dx, titleY-(unitOne*2));
			cxa.globalAlpha = textA;
			
			if (fullScreenOver==true) {
				cxa.beginPath();
				cxa.moveTo(dx - (11.5*unitOne),titleY-(3.1*unitOne)); //b
				cxa.lineTo(dx - (9.5*unitOne),titleY-(3.1*unitOne)); //t
				cxa.stroke();
				cxa.beginPath();
				cxa.moveTo(dx + (11.5*unitOne),titleY-(3.1*unitOne)); //b
				cxa.lineTo(dx + (9.5*unitOne),titleY-(3.1*unitOne)); //t
				cxa.stroke();
				cxa.globalAlpha = textA*0.25;
			}
			cxa.fillText("THIS IS FINE", dx, titleY+(unitOne*6.5));
			cxa.globalAlpha = textA;
			
			cxa.strokeStyle = col[17];
			cxa.beginPath();
			cxa.moveTo(dx - (15*unitOne),titleY+(1*unitOne)); //b
			cxa.lineTo(dx - (3*unitOne),titleY+(1*unitOne)); //t
			cxa.stroke();
			cxa.beginPath();
			cxa.moveTo(dx + (15*unitOne),titleY+(1*unitOne)); //b
			cxa.lineTo(dx + (3*unitOne),titleY+(1*unitOne)); //t
			cxa.stroke();
			
		
		}
		
		if (scene<mainScene && introAlpha>0) {
			if (introAlpha>0) {
				introAlpha -= 2;
			}
			cxa.globalAlpha = introAlpha/100;
			cxa.fillStyle = col2[9];
			cxa.fillRect(0,0,fullX,fullY);
			
		}
		
		if (Math.round(introAlpha)==98 && scene==1) { // sound
			var now = acx.currentTime;
			noiseGain3.gain.setValueAtTime(0, now);
			noiseGain3.gain.linearRampToValueAtTime(masterGain*1.5, now+1);
			noiseGain3.gain.linearRampToValueAtTime(masterGain*1.5, now+1.1);
			noiseGain3.gain.linearRampToValueAtTime(masterGain*0.3, now+3);
			noiseGain3.gain.linearRampToValueAtTime(masterGain*0, now+6);
			
			noiseFilter3.frequency.setValueAtTime(500, now);
			noiseFilter3.frequency.linearRampToValueAtTime(2323, now+1);
			noiseFilter3.frequency.linearRampToValueAtTime(200, now+4);
			noiseFilter3.frequency.linearRampToValueAtTime(0, now+6);
			noiseFilter3.frequency.linearRampToValueAtTime(2323, now+7.1);
		}	
		
		if (Math.round(introAlpha)==2 && scene==1) { //fadeout
			textADest = 0;
		}
		if (textA<0.01 && scene==1) { //switch scene
			scene = 2;
			
		}
		if (textA<0.95 && scene==2) { // fade in
			textADest = 1
		}
	}
}



//-------------------------------------------------------------------------------------------
//  EFFECTS
//-------------------------------------------------------------------------------------------


function flickerSetup(n,xPos,yPos) {
	if (flickerCount==0) {
	  flickerX.length = 0;
	  flickerY.length = 0;
	  flickerH.length = 0;
	  
	  flickerX[0] = mouseX - 100 + (Math.random()*200);
	  flickerY[0] = mouseY - 100 + (Math.random()*200);
	  flickerH[0] = 30 + Math.round(Math.random()*80);
	  for (i=1;i<n;i++) {
		  flickerX[i] = xPos;
		  flickerY[i] = yPos;
		  flickerH[i] = Math.round(Math.random()*15);
	  }
	  flickerCount = 2;
	}
	
}

function flickers(x,y) {

    for (i=0;i<flickerH.length;i++) {
		if (flickerH[i]<1 && mouseHold==true && paused==false) {
			flickerX[i] = x - 100 + (Math.random()*200);
			flickerY[i] = y - 100 + (Math.random()*200);
			flickerH[i] = 30 + Math.round(Math.random()*80);
		}
		if (flickerH[i]>0) {
		   flickerH[i] -= 4;
		   flickerY[i] -= 2;
		   
		} else {
			flickerH[i] = 0;
		}
		
		// DRAW //
		cxa.fillStyle = sky[2];
		
		h = flickerH[i];
		sx = flickerX[i];
		sy = flickerY[i];
		w = 2.5;
		
		cxa.beginPath();
		cxa.moveTo(sx-(w*units),sy-((h*0.5)*units)); //l
		cxa.lineTo(sx,sy-(h*units)); //t
		cxa.lineTo(sx+(w*units),sy-((h*0.5)*units)); //r
		
		cxa.lineTo(sx+(w*units),sy+((h*0.5)*units)); //l
		cxa.lineTo(sx,sy+(h*units)); //t
		cxa.lineTo(sx-(w*units),sy+((h*0.5)*units)); //r
		
		cxa.closePath();
		cxa.fill();
		
	}
	
}

function flickerStart() {

    for (i=0;i<flickerH.length;i++) {
		if (flickerH[i]<1 && introAlpha>90) {
			flickerX[i] = Math.random()*fullX;
			flickerY[i] = Math.random()*fullY;
			flickerH[i] = 30 + Math.round(Math.random()*80);
		}
		if (flickerH[i]>0) {
		   flickerH[i] -= 2;
		   flickerY[i] -= 1;
		   
		} else {
			flickerH[i] = 0;
		}
		
		if (flickerH[i]>0) {
			// DRAW //
			cxa.globalAlpha = 1;
			cxa.fillStyle = col[6];
			cxa.fillStyle = sky[0];
			
			h = flickerH[i]*5;
			sx = flickerX[i];
			sy = flickerY[i];
			w = 2.5;
			
			cxa.beginPath();
			cxa.moveTo(sx-(w*units),sy-((h*0.5)*units)); //l
			cxa.lineTo(sx,sy-(h*units)); //t
			cxa.lineTo(sx+(w*units),sy-((h*0.5)*units)); //r
			
			cxa.lineTo(sx+(w*units),sy+((h*0.5)*units)); //l
			cxa.lineTo(sx,sy+(h*units)); //t
			cxa.lineTo(sx-(w*units),sy+((h*0.5)*units)); //r
			
			cxa.closePath();
			cxa.fill();
		}
		
	}
	
}






//-------------------------------------------------------------------------------------------
//  MEASUREMENT
//-------------------------------------------------------------------------------------------



function resize_canvas() {
	
	canvasDestW = window.innerWidth;
	canvasDestH = window.innerHeight;
	canvasA.width  = canvasDestW;
	canvasA.height = canvasDestH;
	
	
	// UNIT SIZES //
	halfX = Math.round(canvasA.width/2);
	halfY = Math.round(canvasDestH/2);
	fullX = canvasA.width;
	fullY = canvasDestH;
	
	unitOne = (canvasA.width/100); // USED ON GUI 
	if (unitOne<6) {
		unitOne = 6;
	}
	units = unitOne*zoomLevel; // USED ON STAGE - ZOOM/PAN AFFECTED
	
	
	stageW = fullX*0.86;
	columnW = stageW/3;
		
	
	// TEXT SIZES //
	headerType = Math.round(canvasA.width/19);
	midType = Math.round(canvasA.width/32);
	dataType = Math.round(canvasA.width/80);
	bodyType = Math.round(canvasA.width/70);
	subType = Math.round(canvasA.width/90);
	
	if (headerType<25) {
		headerType = 25;
	}
	if (midType<12) {
		midType = 12;
	}
	if (dataType<10) {
		dataType = 10;
	}
	if (bodyType<7) {
		bodyType = 7;
	}
	if (subType<6) {
		subType = 6;
	}
	
	
	
	dx = halfX;
	dy = halfY;	
	
	consoleY = fullY;
	consoleDest = fullY;
	
	units = (unitOne*0.06)*zoomLevel; // UPDATE SCALED UNITS
	
	if (titleDest>0) {
		titleY = titleDest = (halfY-unitOne);
	}
	if (panDest>0) {
		panY = panDest = halfY;
	}
	if (harpDest>0) {
		harpY = harpDest = halfY;
	}
	
}


//-------------------------------------------------------------------------------------------
//  INTERACTION
//-------------------------------------------------------------------------------------------


// CHECK CURSOR POSITION //
function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}




// DRAG //
function mouseMove(event) {
	
	
	if (touchTakeover==true) {
		var x = touch.pageX;
		var y = touch.pageY;
		
	} else {
		
		var pos = findPos(this);
        var x = event.pageX - pos.x;
        var y = event.pageY - pos.y;

	}

    mox = x;
	moy = y;
	
	mouseX = mox;
    mouseY = moy;
	
	//CHECK ROLLOVERS //
	rolloverCheck();
	
	holdFilter.frequency.value = 0 + ((4000/fullX)*mouseX);
	
	
	// POT DRAGGING //
	if (scene==mainScene) {
		
		
		if (drumGainDragging==true) {
			drumGainDrag = ((mox - drumGainX)/unitOne) + ((drumGainStart-0.5)*20);
			drumLevel = ((drumGainDrag/20)+0.5) ;
			
			if (drumLevel>1) {
				drumLevel = 1;
			}
			if (drumLevel<0) {
				drumLevel = 0;
			}
		}
		
		if (bpmSetDragging==true) {
			bpmSetDrag = (((mox - bpmSetX)/unitOne) + ((((bpmSetStart-80)*0.01)-0.5)*20));
			bpm = 80 + Math.round(((bpmSetDrag/20)+0.5)*100);
			
			if (bpm<80) {
				bpm = 80;
			}
			if (bpm>180) {
				bpm = 180;
			}
		}
		
		if (harpOver==true) {
			sx = dx-(12.3*unitOne);
			harpN = Math.floor(((mox-sx)/1.4)/unitOne);
			harpSetFreq(harpN);
			
			
			if (harpN!==harpNLast && harpHold==true) { // play note
				if (harpNLast==-10) {
					clearInterval(harpInterval);
					harpLoop();
					harpInterval = setInterval(harpLoop, ((60/bpm)*0.25)*1000);
				}
				harpVis(harpN);
			}
			
			harpNLast = harpN;
		} else {
			if (harpN!==-10) {
				harpN = -1;
				setTimeout(function() {
					if (harpOver==false) {
						harpN = -10;
						clearInterval(harpInterval);
					}
				},((60/bpm)*0.5)*1000);
				
			}
			harpNLast = harpN;
		}
	
	} // end main scene
}



function harpVis(n) {
	harpOn[n] = true;
	harpTimer[n] = setInterval(function() {
		if (n!==harpN||harpHold==false) {
			harpOn[n] = false;
			clearInterval(harpTimer[n]);
		}
		
	},((60/bpm)*1)*1000);
	
}



// RELEASE //
function mouseRelease(event) {
	keyInput.focus();
	
	mouseHold = false;
	harpHold = false;
	
	drumGainDragging = false;
	bpmSetDragging = false;
	clearInterval(harpInterval);
	
	//clearRollOvers for Touch //
	mouseX = mox = -1000;
	mouseY = moy = -1000;
	rolloverCheck();
	mouseIsDown = false;
	
	if (harpN!==-10) { // if leaving
		harpN = -1;
		setTimeout(function() {
			if (harpOver==false) {
				harpN = -10;
				clearInterval(harpInterval);
			}
		},((60/bpm)*0.5)*1000);
		
	}
	harpNLast = harpN;
}



// DETERMINE CLICK //
function clickOrTouch(event) {
	 if (touchTakeover==true) {
		
		var x = touch.pageX;
		var y = touch.pageY;
		
		
	} else {
		
		var pos = findPos(this);
        var x = event.pageX - pos.x;
        var y = event.pageY - pos.y;
	}
	
	mouseX = x;
	mouseY = y;
	
	mox = mouseX;
	moy = mouseY;
	
	if (mouseIsDown==false) {
		getPosition(event);
	}
	
}



// CLICK / TOUCH //
function getPosition(event) { 

    mouseIsDown = true;
	touchCounter += 1;
	
	//CHECK ROLLOVERS //
	rolloverCheck();
	
	if (scene==1) {
		scene += 1;
	} 
	
	else if (scene==2) {
		
		// SELECT SCREEN //
		if (fullScreenOver==true) { // full screen
		    silentNote();
			if (screenfull.enabled) {
				screenfull.request();
			} else {
				scene += 1;
				consoleY = fullY*2;
				consoleTo(fullY,30,20);
				titleTo(-fullY,20,0);
				// START PLAYING //
				setTimeout(function(){
					
					paused = false;
					beatCount = 15;
					count8 = 0;
					countBass = 0;
					countDrum = 0;
					
				},((60/bpm)*0.5)*1000);
			}
		}
		
		if (thisFineOver==true) { // regular
		    silentNote();
			scene += 1;
			consoleY = fullY*2;
			consoleTo(fullY,30,20);
			titleTo(-fullY,20,0);
			// START PLAYING //
			setTimeout(function(){
				
				paused = false;
				beatCount = 15;
				count8 = 0;
				countBass = 0;
				countDrum = 0;
				
			},((60/bpm)*0.5)*1000);
		}
	}
	
	
	
	else if (scene==mainScene) {
	
		if (paused==false && consoleY>(halfY) && pauseOver==false && consoleOver==false && panDest!==halfY && harpOpen==false) {
			
			holdFilter.frequency.value = 0 + ((4000/fullX)*mouseX);
			mouseHold = true;
			flickerSetup(5,-1000,-1000);
			
			if (harmTimer==0) {
				harmTimer = 7;
			}
		}
		
		
		////// SHARE SCREEN //////
		if (wvOver==true && fullY>300) {
			paused = true;
			clearInterval(harmonyInterval);
			swayTo(0,30*(bpm/120),1);
			window.open("http://whitevinyldesign.com","_blank");
			return;
		}
		if (fbOver==true) {
			paused = true;
			clearInterval(harmonyInterval);
			swayTo(0,30*(bpm/120),1);
			window.open("http://www.facebook.com/sharer.php?u=http://whitevinyldesign.com/floradrift/","_blank");
			return;
		}
		if (twitterOver==true) {
			paused = true;
			clearInterval(harmonyInterval);
			swayTo(0,30*(bpm/120),1);
			window.open("http://twitter.com/share?via=whitevinyluk&text=Flora Drift: Procedurally generated music & visuals...&url=http://whitevinyldesign.com/floradrift/","_blank");
			return;
		}
		
		if (pauseOver==true && canPress==true) {
			canPress = false;
			setTimeout(function(){
				canPress = true;
			},800);
			
			if (paused==false) {
				paused = true;
				clearInterval(harmonyInterval);
				swayTo(0,30*(bpm/120),1);
			} else {
				paused = false;
				beatCount = 15;
				count8 = 0;
				countBass = 0;
				countDrum = 0;
				
			}
		}
		
		
		if (consoleOver==true) {
			consoleTo(0,30,20);
			panTo(-fullY,30,5);
			harpTo(-fullY,30,5);
			
		}
		if (consoleQuitOver==true) {
			consoleTo(fullY,30,20);
			
			if (panOpen==true) {
				panTo(halfY,15,15,250);
			}
			if (harpOpen==true) {
				harpTo(halfY,15,15,250);
			}
		}
		
		if (panBtnOver==true) {
			consoleTo(fullY,30,20);
			panTo(halfY,15,15,250);
			panOpen = true;
			harpOpen = false;
		}
		if (panCloseOver==true) {
			panTo(-fullY,30,1);
			panOpen = false;
		}
		if (harpBtnOver==true) {
			consoleTo(fullY,30,20);
			harpTo(halfY,15,15,250);
			harpOpen = true;
			panOpen = false;
		}
		if (harpCloseOver==true) {
			harpTo(-fullY,30,1);
			harpOpen = false;
		}
		
		
		if (drumGainOver==true) {
			drumGainX = mox;
			drumGainDragging = true;
			drumGainStart = drumLevel;
		}
		
		if (bpmSetOver==true) {
			bpmSetX = mox;
			bpmSetDragging = true;
			bpmSetStart = bpm;
		}
		
		
		
		for (i=0;i<7;i++) {
			if (panOver[i]==true) {
				panOn[i] = true;
				panPlay(i);
			}
		}
		
		
		if (harpOver==true) {
			sx = dx-(12.3*unitOne); // X DIVIDED BY NOTE WIDTH
			harpN = Math.floor(((mox-sx)/1.4)/unitOne); // SET NOTE BASED ON X
			harpSetFreq(harpN); // UPDATE FREQUENCY
			
			
			if (harpN!==harpNLast && harpHold==true) { // play new note
				if (harpNLast==-10) {
					clearInterval(harpInterval);
					harpLoop();
					harpInterval = setInterval(harpLoop, ((60/bpm)*0.25)*1000);
				}
				harpVis(harpN);
			}
			
			harpNLast = harpN;
		} else {
			if (harpN!==-10) { // if leaving
				harpN = -1;
				setTimeout(function() {
					if (harpOver==false) {
						harpN = -10;
						clearInterval(harpInterval);
					}
				},((60/bpm)*0.5)*1000);
				
			}
			harpNLast = harpN;
		}
		
		if (harpOpen==true) {
			harpHold = true;
			
			
			harpVis(harpN);
			harpSetFreq(harpN);
			harpFreq = harpFreqDest;
			harpLoop();
			harpInterval = setInterval(harpLoop, ((60/bpm)*0.25)*1000);
			
		}
	
	}
	
	
	
	//rollTimer(200);
}


//-------------------------------------------------------------------------------------------
//  ROLLOVER CHECKS
//-------------------------------------------------------------------------------------------


function rolloverCheck() {
	
	// START SCREEN //
	if (scene==2) {
	   fullScreenOver = hudCheck(halfX-(unitOne*15),titleY-(9*unitOne),30*unitOne,10*unitOne);
	   thisFineOver = hudCheck(halfX-(unitOne*15),titleY+(1*unitOne),30*unitOne,9*unitOne);
	}
	// MAIN //
	else if (scene==mainScene) {
		
		// IN CONSOLE //
		wvOver = hudCheck(halfX-(unitOne*10),consoleY+halfY+(13.5*unitOne),20*unitOne,4*unitOne);
		twitterOver = hudCheck(fullX-(unitOne*7.8),consoleY+fullY-(4.5*unitOne),6*unitOne,2.8*unitOne);
		fbOver = hudCheck(fullX-(unitOne*14.8),consoleY+fullY-(4.5*unitOne),6*unitOne,2.8*unitOne);
		drumGainOver = hudCheck(dx-(unitOne*6),consoleY+halfY-(unitOne*9.25),12*unitOne,12*unitOne);
		bpmSetOver = hudCheck(dx-(unitOne*26),consoleY+halfY-(unitOne*9.25),12*unitOne,12*unitOne);
		panBtnOver = hexCheck(dx+(17.5*unitOne),consoleY+halfY-(7.35*unitOne),5*unitOne);
		harpBtnOver = hexCheck(dx+(22.2*unitOne),consoleY+halfY+(0.85*unitOne),5*unitOne);
		
		
		
		consoleQuitOver = hudCheck(dx-(unitOne*8),consoleY,16*unitOne,5*unitOne);
		pauseOver = hudCheck(0,fullY-(unitOne*5),5*unitOne,5*unitOne);
		consoleOver = hudCheck(dx-(unitOne*8),consoleY-(unitOne*5),16*unitOne,5*unitOne);
		
		
		panCloseOver = hexCheck(dx+(21.4*unitOne),panY,5*unitOne);
		harpCloseOver = hexCheck(dx+(18.4*unitOne),harpY,5*unitOne);
		
		panOver[0] = hexCheck(dx,panY,5*unitOne);
		panOver[1] = hexCheck(dx-(9.4*unitOne),panY,5*unitOne);
		panOver[2] = hexCheck(dx+(9.4*unitOne),panY,5*unitOne);
		
		panOver[3] = hexCheck(dx-(4.7*unitOne),panY-(8.1*unitOne),5*unitOne);
		panOver[4] = hexCheck(dx+(4.7*unitOne),panY-(8.1*unitOne),5*unitOne);
		
		panOver[5] = hexCheck(dx-(4.7*unitOne),panY+(8.1*unitOne),5*unitOne);
		panOver[6] = hexCheck(dx+(4.7*unitOne),panY+(8.1*unitOne),5*unitOne);
		
		harpOver = harpCheck();
		
	}
	
}

function squareCheck(x,y,w,h) { // IS CURSOR WITHIN GIVEN BOUNDARIES

    cx = dx + (x*units);
	cy = dy + (y*units);
	mx = mouseX;
	my = mouseY;
	
	if (mx>cx && mx<(cx+w) && my>cy && my<(cy+h)) {
		return true;
	} else {return false};
	
}

function hudCheck(x,y,w,h) { // IS CURSOR WITHIN GIVEN BOUNDARIES

	mx = mouseX;
	my = mouseY;
	
	if (mx>x && mx<(x+w) && my>y && my<(y+h)) {
		return true;
	} else {return false};
	
}

function hexCheck(x,y,rad) {
	
	mx = mouseX;
	my = mouseY;
	
	cxa.beginPath();
	cxa.moveTo(x,y-(1*rad)); //b
	cxa.lineTo(x-(0.87*rad),y-(0.5*rad)); //t
	cxa.lineTo(x-(0.87*rad),y+(0.5*rad)); 
	cxa.lineTo(x,y+(1*rad)); 
	cxa.lineTo(x+(0.87*rad),y+(0.5*rad)); 
	cxa.lineTo(x+(0.87*rad),y-(0.5*rad)); 
	cxa.closePath();
	
	if (cxa.isPointInPath(mx,my)) {
        return true;
    } else {
		return false;
	}
}

function harpCheck() {
	
	mx = mouseX;
	my = mouseY;
	
	sx = dx-(5*unitOne);
	sy = harpY;
	
	cxa.beginPath();
	cxa.moveTo(sx-(7.3*unitOne),sy+(14*unitOne));
	cxa.lineTo(sx+(13.7*unitOne),sy-(12.25*unitOne));
	cxa.lineTo(sx+(13.7*unitOne),sy-(16.5*unitOne));
	cxa.lineTo(sx-(7.3*unitOne),sy-(16.5*unitOne));
	cxa.closePath();
	
	if (cxa.isPointInPath(mx,my)) {
        return true;
    } else {
		return false;
	}
}



//-------------------------------------------------------------------------------------------
//  TESTING
//-------------------------------------------------------------------------------------------


function testing() {
	
    // TEXT
	cxa.globalAlpha = 1;
	cxa.textAlign = 'center';
	cxa.fillStyle = "#fff";
	cxa.font = "20px PT Sans";
	
	//cxa.fillText(canPress, halfX, 80);
	//cxa.fillText(touchCounter, halfX, 110);
	//cxa.fillText(dx+" | "+dy, halfX, 140);
	
	
	
}
