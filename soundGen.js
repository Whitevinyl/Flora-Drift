// JavaScript Document

//-------------------------------------------------------------------------------------------
//  INITIALISE SOUND
//-------------------------------------------------------------------------------------------


function soundSetup() {
	
	try {
	  window.AudioContext = window.AudioContext||window.webkitAudioContext;
	  acx = new AudioContext();
	}
	catch(e) {
	  alert('Web Audio API is not supported in this browser');
	}
	
	
	
	masterGain = 0.26;
	drumLevel = 0.01;
	bpm = 110;
	
	
	// COMPRESSION / EQ //
	brickWall = acx.createDynamicsCompressor();
	brickWall.connect(acx.destination);
	brickWall.threshold.value = -10;
	brickWall.attack = 0.001;
	brickWall.ratio = 12;
	
	
	compressor = acx.createDynamicsCompressor();
	compressor.connect(brickWall);
	compressor.threshold.value = -32;
	compressor.ratio = 20;
	
	lows = acx.createBiquadFilter();
	lows.type = 3;
	lows.frequency.value = 400;
	lows.gain.value = -7.5;
	lows.connect(compressor);
	
	mainDest = lows;
	
	drumMaster = acx.createGain();
	drumMaster.connect(mainDest);
	drumMaster.gain.value = drumLevel;
	
	
	// CREATE NOISE //
	var buffer = acx.createBuffer(1, 8192, 22050);
	var data = buffer.getChannelData(0);
	for (i = 0; i < data.length; i++) {
		data[i] = (Math.random() - 0.5) * 2; // Noise
	}
	
	
	noiseDest = drumMaster;
	noiseF = 2700;
	noiseQ = 2;
	
	// NOISE 1 //
	noise = acx.createBufferSource();
	noiseGain = acx.createGain();
	noiseTone = acx.createBiquadFilter();
	noiseFilter = acx.createBiquadFilter();
	
	noise.loop = true;
	noise.buffer = buffer;
	
	noise.connect(noiseTone);
	noiseTone.connect(noiseGain);
	noiseGain.connect(noiseFilter);
	noiseFilter.connect(noiseDest);
	noiseTone.frequency.value = noiseF;
	noiseTone.Q.value = noiseQ;
	noiseGain.gain.value = 0;
	noise.start(0);
	
	// NOISE 2 //
	noise2 = acx.createBufferSource();
	noiseGain2 = acx.createGain();
	noiseTone2 = acx.createBiquadFilter();
	noiseFilter2 = acx.createBiquadFilter();
	
	noise2.loop = true;
	noise2.buffer = buffer; 
	
	noise2.connect(noiseTone2);
	noiseTone2.connect(noiseGain2);
	noiseGain2.connect(noiseFilter2);
	noiseFilter2.connect(noiseDest);
	noiseTone2.frequency.value = noiseF;
	noiseTone2.Q.value = noiseQ;
	noiseGain2.gain.value = 0;
	noise2.start(0);
	
	
	// NOISE 3 //
	noise3 = acx.createBufferSource();
	noiseGain3 = acx.createGain();
	noiseTone3 = acx.createBiquadFilter();
	noiseFilter3 = acx.createBiquadFilter();
	
	noise3.loop = true;
	noise3.buffer = buffer;
	
	noise3.connect(noiseTone3);
	noiseTone3.connect(noiseGain3);
	noiseGain3.connect(noiseFilter3);
	noiseFilter3.connect(noiseDest);
	noiseTone3.frequency.value = noiseF;
	noiseTone3.Q.value = noiseQ;
	noiseGain3.gain.value = 0;
	noise3.start(0);
	
	noiseFilter2.frequency.value = 1269;
	noiseFilter3.frequency.value = 2323;
	
	
	// LEAD //
	leadFilter = acx.createBiquadFilter();
	leadMod = acx.createGain();
	leadEchoFilter  = acx.createBiquadFilter();
	leadPanL = acx.createPanner();
	leadPanR = acx.createPanner();
	leadEchoL = acx.createDelay();
	leadEchoR = acx.createDelay();
	leadGainL = acx.createGain();
	leadGainR = acx.createGain();
	
	leadFilter.frequency.value = 1100 + (drumLevel*1000);
	leadEchoFilter.frequency.value = 800 + (drumLevel*1000);
	leadEchoL.delayTime.value = ((60/bpm)*0.5);
	leadEchoR.delayTime.value = ((60/bpm)*1);
	leadPanL.setPosition(-1,0,0);
	leadPanR.setPosition(1,0,0);
	leadGainL.gain.value = delayLevel*0.8;
	leadGainR.gain.value = delayLevel*0.5;
	
	leadFilter.connect(leadMod);
	leadMod.connect(mainDest);
	
	leadEchoFilter.connect(mainDest);
	leadGainL.connect(leadEchoFilter);
	leadGainR.connect(leadEchoFilter);
	leadPanL.connect(leadGainL);
	leadPanR.connect(leadGainR);
	leadEchoL.connect(leadPanL);
	leadEchoR.connect(leadPanR);
	
	
	// DRUMS //
	drumFilter = acx.createBiquadFilter();
	drumFilter.type = 5;
	drumFilter.gain.value = 20;
	drumFilter.frequency.value = 60;

	drumFilter2 = acx.createBiquadFilter();
	drumFilter2.type = 5;
	drumFilter2.gain.value = 28;
	drumFilter2.frequency.value = 4900;
	
	drumFilter.connect(drumFilter2);	
	drumFilter2.connect(drumMaster);
	
	
	// PERC //
	percHiss = acx.createBiquadFilter();
	percHiss.type = 5;
	percHiss.gain.value = 10;
	percHiss.frequency.value = 4500;
	percHiss.connect(drumMaster);
	
	
	// BASS //
	bassFilter = acx.createBiquadFilter();
	bassFilter2 = acx.createBiquadFilter();
	
	bassFilter.frequency.value = 1000 + (drumLevel*1000);
	bassFilter.connect(bassFilter2);
	
	bassFilter2.connect(mainDest);
	bassFilter2.type = 5;
	bassFilter2.gain.value = (drumLevel*10);
	bassFilter2.frequency.value = 400;
	
	
	// PAN //
	panFilter = acx.createBiquadFilter();
	panFilter.connect(mainDest);
	panFilter.Q.value = 5;
	panFilter.frequency.value = 900 + (drumLevel*1000);
	
	panL = acx.createPanner();
	panR = acx.createPanner();
	panL.connect(panFilter);
	panR.connect(panFilter);
	panL.setPosition(-0.01,0,0);
	panR.setPosition(0.01,0,0);
	
	// HARP //
	harpFilter = acx.createBiquadFilter();
	harpFilter.connect(mainDest);
	harpFilter.frequency.value = 1500 + (drumLevel*1000);
	
	harpL = acx.createPanner();
	harpL.connect(harpFilter);
	harpL.setPosition(-0.01,0,0);
	harpR = acx.createPanner();
	harpR.connect(harpFilter);
	harpR.setPosition(0.01,0,0);
	
	
	
	for (i=0;i<6;i++) {
		
		harpD[i] = acx.createOscillator();
		harpG[i] = acx.createGain();
		harpD[i].connect(harpG[i]);
		if (i%2==0) {
			harpG[i].connect(harpL);
		} else {
			harpG[i].connect(harpR);
		}
		harpD[i].type = 3;
		harpG[i].gain.value = 0;
		harpD[i].start(0);
	}
	
	
	// HARMONY //
	harmFilter = acx.createBiquadFilter();
	harmFilter.frequency.value = ((800/10)*harmFreq) + (drumLevel*500);
	
	holdFilter = acx.createBiquadFilter();
	holdFilter.type = 5;
	holdFilter.gain.value = 5 + harmFreq; // 15
	
	shelfFilter = acx.createBiquadFilter();
	shelfFilter.type = 3;
	shelfFilter.frequency.value = (700/10)*harmFreq;
	shelfFilter.gain.value = -(10+harmFreq);
	
	harmBreak = acx.createBiquadFilter();
	harmBreak.frequency.value = 1;
	
	harmFilter.connect(holdFilter);
	holdFilter.connect(shelfFilter);
	shelfFilter.connect(mainDest);
	harmBreak.connect(mainDest);
	
	// PADS //
	pad = acx.createOscillator();
	pad2 = acx.createOscillator();
	padPanner = acx.createPanner();
	padPanner2 = acx.createPanner();
	padGain = acx.createGain();
	padFilter = acx.createBiquadFilter();
	
	pad.connect(padPanner);
	pad2.connect(padPanner2);
	padPanner.connect(padGain);
	padPanner2.connect(padGain);
	
	padPanner.setPosition(-0.5,0,0);
	padPanner2.setPosition(1,0,0);
	
	padGain.connect(padFilter);
	padFilter.connect(leadMod);
	
	padGain.gain.value = 0;
	padFilter.frequency.value = 600;
	pad.type = 1;
	pad2.type = 1;
	pad.start(0);
	pad2.start(0);
	
	// MODULATE //
	setInterval(function() {
		
		var now = acx.currentTime;
		leadMod.gain.cancelScheduledValues( now );
		leadMod.gain.setValueAtTime(masterGain*2, now);
		
		leadMod.gain.linearRampToValueAtTime(masterGain*1, now+0.09);
		leadMod.gain.linearRampToValueAtTime(masterGain*2, now+0.18);
		
		
	}, 200);
	
	playPad(padGain,pad,pad2);
	soundLoop();

}

//-------------------------------------------------------------------------------------------
//  SEQUENCING LOOP
//-------------------------------------------------------------------------------------------

function soundLoop() {
	
	if (scene==mainScene) {
		
		if (paused==false) {
			playBass();
			playLead8();
			playPerc();
			playDrum();
			playHarm();
			
			if (beatCount==4||beatCount==12) {
				swayDir = 2;
				swayTo(1 + (drumLevel*4) + (Math.random()*2),30*(bpm/120),1);
				
			} 
			if (beatCount==0||beatCount==8) {
				swayDir = 1;
				swayTo(-1 - (drumLevel*4) - (Math.random()*2),30*(bpm/120),1);
			}
			
			beatCount += 1;
			if (beatCount==16) {
				if (firstTime==false) {
				    generateScene();
					if (startCounter<100) {
					    startCounter+= 1;
					}
				}
				beatCount = 0;
			}
			firstTime = false;
		}
	}
	
	setTimeout(soundLoop,((60/bpm)*0.5)*1000);
				
}

//-------------------------------------------------------------------------------------------
//  ENVELOPE SCHEDULERS
//-------------------------------------------------------------------------------------------


function startTone(mode,length1,o,g,d) {
	
	d = d || false;
	f = o.frequency.value;
	
    var now = acx.currentTime;
    g.gain.cancelScheduledValues( now );
	o.frequency.cancelScheduledValues( now );
    g.gain.setValueAtTime(masterGain*0.0, now);
	o.frequency.setValueAtTime(f, now);
    
	// TINE
	if (mode==1) {
		g.gain.linearRampToValueAtTime(masterGain*1.1, now + 0.01);
		g.gain.linearRampToValueAtTime(masterGain*0.6, now + 0.2);
		g.gain.linearRampToValueAtTime(masterGain*0.1, now + ((60/bpm)*3));
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*4.5));
		
		length = ((60/bpm)*4.6)*1000;
	}
	// PERC
	else if (mode==2) {
		g.gain.linearRampToValueAtTime(masterGain*0.6, now + 0.05);
		g.gain.linearRampToValueAtTime(masterGain*0.5, now + ((60/bpm)*0.25));
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*0.3));
		
		length = ((60/bpm)*3)*1000;
	}
	// BASS
	else if (mode==3) {
		g.gain.linearRampToValueAtTime(masterGain*1.1, now + 0.03);
		g.gain.linearRampToValueAtTime(masterGain*0.5, now + ((60/bpm)*2));
		
		if (length1<4) {
			g.gain.cancelScheduledValues( now + ((60/bpm)*(length1*1)) );
			g.gain.linearRampToValueAtTime(masterGain*0.35, now + ((60/bpm)*(length1*1.08)));
		} else {
			g.gain.linearRampToValueAtTime(masterGain*0.1, now + ((60/bpm)*(length1*1.08)));
		}
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*(length1*1.1)));
		
		length = ((60/bpm)*(length1*1.2))*1000;
	}
	// HARMONY
	else if (mode==4) {
		g.gain.linearRampToValueAtTime(masterGain*0.2, now + 0.5);
		g.gain.linearRampToValueAtTime(masterGain*0.01, now + ((60/bpm)*5));
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*5.5));
		
		length = ((60/bpm)*5.6)*1000;
	}	
	// DRUM
	else if (mode==5) {
		g.gain.linearRampToValueAtTime(masterGain*1.0, now + 0.03);
		g.gain.linearRampToValueAtTime(masterGain*0.5, now + 0.2);
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*2));
		o.frequency.linearRampToValueAtTime(f-50,now + ((60/bpm)*2));
		
		length = ((60/bpm)*2.1)*1000;
	}
	// DRUM2
	else if (mode==6) {
		g.gain.linearRampToValueAtTime(masterGain*1.0, now + 0.03);
		g.gain.linearRampToValueAtTime(masterGain*0.2, now + 0.2);
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*1));
		o.frequency.linearRampToValueAtTime(f-25,now + ((60/bpm)*1));
		
		length = ((60/bpm)*1.1)*1000;
	}
	// PERC HISS
	else if (mode==7) {
		g.gain.linearRampToValueAtTime(masterGain*1.0, now + 0.03);
		g.gain.linearRampToValueAtTime(masterGain*0.9, now + ((60/bpm)*0.20));
		g.gain.linearRampToValueAtTime(masterGain*0.2, now + ((60/bpm)*0.25));
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*2));
		o.frequency.linearRampToValueAtTime(f - 8,now + ((60/bpm)*0.25));
		o.frequency.linearRampToValueAtTime(f,now + ((60/bpm)*2));
		
		length = ((60/bpm)*2.1)*1000;
	}
	// DRUM3
	else if (mode==8) {
		g.gain.linearRampToValueAtTime(masterGain*0.08, now + 0.03);
		g.gain.linearRampToValueAtTime(masterGain*0.02, now + 0.1);
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*1));
		
		length = ((60/bpm)*1.1)*1000;
	}
	// PAN
	else if (mode==9) {
		g.gain.linearRampToValueAtTime(masterGain*1.1, now + 0.05);
		g.gain.linearRampToValueAtTime(masterGain*0.7, now + ((60/bpm)*0.3));
		g.gain.linearRampToValueAtTime(masterGain*0.08, now + ((60/bpm)*2.1));
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*3));
		
		length = ((60/bpm)*3.1)*1000;
	}
	// PAN
	else if (mode==10) {
		g.gain.linearRampToValueAtTime(masterGain*0.5, now + 0.05);
		g.gain.linearRampToValueAtTime(masterGain*0.3, now + ((60/bpm)*0.3));
		g.gain.linearRampToValueAtTime(masterGain*0.05, now + ((60/bpm)*2.1));
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*3));
		
		length = ((60/bpm)*3.1)*1000;
	}
	// BASS HARMONY
	else if (mode==11) {
		g.gain.linearRampToValueAtTime(masterGain*(bassHarmVol-(drumLevel*0.25)), now + ((60/bpm)*2.5));
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*5));
		
		length = ((60/bpm)*5.05)*1000;
	}
	
	
	setTimeout(function(){
		
        o.disconnect(); // Disconnect oscillator so it can be picked up by browser's garbage collecter
		if (d==true) {
		    g.disconnect();
		}
	},length);
}


function startNoiseGain(mode,g,d,o) {
	
	d = d || false;
	
    var now = acx.currentTime;
    g.gain.cancelScheduledValues( now );
    g.gain.setValueAtTime(g.gain.value, now);
	
	// PERC
	if (mode==1) {
		g.gain.linearRampToValueAtTime(masterGain*1.0, now + 0.03);
		g.gain.linearRampToValueAtTime(masterGain*0.9, now + ((60/bpm)*0.25));
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*0.29));
	}
	// DRUM
	else if (mode==2) {
		g.gain.linearRampToValueAtTime(masterGain*0.8, now + 0.03);
		g.gain.linearRampToValueAtTime(masterGain*0.3, now + 0.2);
		g.gain.linearRampToValueAtTime(masterGain*0.1, now + ((60/bpm)*2));
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*3));
	}
}

function startHarp(g,o,f) {
    var now = acx.currentTime;
    g.gain.cancelScheduledValues( now );
    g.gain.setValueAtTime(g.gain.value, now);
	
	
	g.gain.linearRampToValueAtTime(masterGain*0.01, now + 0.03);
	g.gain.linearRampToValueAtTime(masterGain*0.6, now + ((60/bpm)*2));
	g.gain.linearRampToValueAtTime(masterGain*0.0, now + ((60/bpm)*4));
}



//-------------------------------------------------------------------------------------------
//  SETUP NOTES TO BE SENT TO ENVELOPES
//-------------------------------------------------------------------------------------------


// ECHO LEAD //
function leadNote(f) {
	
	oscillator = acx.createOscillator();
	gainNode = acx.createGain();
	leadL = acx.createOscillator();
	lGain = acx.createGain();
	leadR = acx.createOscillator();
	rGain = acx.createGain();
	
	
	oscillator.connect(gainNode);
	leadL.connect(lGain);
	leadR.connect(rGain);
	
	gainNode.connect(leadFilter);
	lGain.connect(leadEchoL);
	rGain.connect(leadEchoR);
	
	gainNode.gain.value = 0;
	lGain.gain.value = 0;
	rGain.gain.value = 0;
	
	oscillator.frequency.value = f;
	leadL.frequency.value = f;
	leadR.frequency.value = f;
	oscillator.type = 3; // triangle wave
	leadL.type = 3; // triangle wave
	leadR.type = 3; // triangle wave
	
	leadGainL.gain.value = delayLevel*0.9;
	leadGainR.gain.value = delayLevel*0.6;
	
	oscillator.start(0);
	leadL.start(0);
	leadR.start(0);
	
	startTone(1,3500,oscillator,gainNode,true);
	startTone(1,3500,leadL,lGain,true);
	startTone(1,3500,leadR,rGain,true);
}

// BASS //
function bassNote(f,f2,f3,f4,bl) {
	currentBassLength = bl;
	
	bass = acx.createOscillator();
	subBass = acx.createOscillator();
	bassHarm =  acx.createOscillator();
	bassHarm2 =  acx.createOscillator();
	gainNode = acx.createGain();
	bassHarmGain = acx.createGain();
	bassPre = acx.createGain();
	
	bass.connect(bassPre);
	
	bassPre.connect(gainNode);
	subBass.connect(gainNode);
	bassHarm.connect(bassHarmGain);
	bassHarm2.connect(bassHarmGain);
	gainNode.connect(bassFilter);
	bassHarmGain.connect(bassFilter);
	gainNode.gain.value = 0;
	bassPre.gain.value = 0.3;
	bassHarmGain.gain.value = 0;
	
	bass.frequency.value = f;
	bass.type = 1; // triangle wave
	
	subBass.frequency.value = f2;
	subBass.type = 3; // triangle wave
	
	bassHarm.frequency.value = f3;
	bassHarm.type = 0; // triangle wave
	
	bassHarm2.frequency.value = f4;
	bassHarm2.type = 0; // triangle wave
	
	bass.start(0);
	subBass.start(0);
	bassHarm.start(0);
	bassHarm2.start(0);
	
	startTone(3,bl,bass,gainNode);
	startTone(3,bl,subBass,gainNode,true);
	startTone(11,bl,bassHarm,bassHarmGain);
	startTone(11,bl,bassHarm2,bassHarmGain,true);
	monoBass = gainNode;
}

// NOISE PERCUSSION //
function percNote(f,n) {
	
	if (drumLevel<0.8) {
		percOsc = acx.createOscillator();
		percG = acx.createGain();
		
		percOsc.connect(percG);
		percG.connect(mainDest);
		percG.gain.value = 0;
		
		percOsc.frequency.value = f;
		percOsc.type = 3; // square wave
	
	    percOsc.start(0);
	    startTone(2,1500,percOsc,percG,true);
	}
	
	noiseFilter.frequency.value = n*2;
	startNoiseGain(1,noiseGain);
	
}

// DRUMS //
function drumNote(f) {
	
	drum = acx.createOscillator();
	drumGain = acx.createGain();
	
	drum.connect(drumGain);
	drumGain.connect(drumFilter);
	drumGain.gain.value = 0;
	drum.frequency.value = f;
	drum.type = 3; // square wave
	drum.start(0);
	
	if (countDrum==4||countDrum==12) {
		startNoiseGain(2,noiseGain3);
	} else {
		startNoiseGain(2,noiseGain2);
	}

	startTone(5,3500,drum,drumGain,true);
	
}

// DRAG HARMONY //
function harmNote(f) {
	harm = acx.createOscillator();
	harm2 = acx.createOscillator();
	harmGain = acx.createGain();
	harmPan = acx.createPanner();
	
	harm.connect(harmGain);
	harm2.connect(harmPan);
	harmPan.connect(harmGain);
	harmGain.connect(harmFilter);
	harmGain.gain.value = 0;
	
	harmPan.setPosition(-1,0,0);
	harm.frequency.value = f;
	harm2.frequency.value = f;
	harm.type = 1; // triangle wave
	harm2.type = 2; // triangle wave
	
	harm.start(0);
	harm2.start(0);
	harmPlaying = true;
	startTone(4,3500,harm,harmGain);
	startTone(4,3500,harm2,harmGain,true);
}

// PAN SYNTH //
function panNote(f,n,p) {
	
	panOsc = acx.createOscillator();
	panG[p] = acx.createGain();
	panOsc.connect(panG[p]);
	panG[p].connect(panFilter);
	panG[p].gain.value = 0;
	
	panOsc.frequency.value = f;
	panOsc.type = 3; // square wave
	
	panOsc2 = acx.createOscillator(); // harmonic
	panG2 = acx.createGain();
	panOsc2.connect(panG2);
	panG2.connect(panR);
	panG2.gain.value = 0;
	
	panOsc2.frequency.value = n-3;
	panOsc2.type = 0; // square wave
	
	panOsc3 = acx.createOscillator();
	panEcho = acx.createDelay();
	panG3 = acx.createGain();
	panOsc3.connect(panG3);
	panG3.connect(panEcho);
	panEcho.connect(panFilter);
	panG3.gain.value = 0;
	
	panOsc3.frequency.value = f+2;
	panOsc3.type = 3; // square wave
	
	panEcho.delayTime.value = ((60/bpm)*0.25);
	
	panOsc.start(0);
	startTone(9,1500,panOsc,panG[p],true);
	
	panOsc2.start(0);
	startTone(10,1500,panOsc2,panG2,true);
	
	panOsc3.start(0);
	startTone(9,1500,panOsc3,panG3,true);
}



function harpLoop() {
	if (harpN!==-10) {
		harpD[harpCount].frequency.value = harpFreq+(harpCount*2);
		startHarp(harpG[harpCount],harpD[harpCount],harpFreq);
		harpCount += 1;
		if (harpCount==6) {
			harpCount = 0;
		}
	}
}


//-------------------------------------------------------------------------------------------
//  PROCEDURAL ALGORHYTHMS
//-------------------------------------------------------------------------------------------


function playLead8() {
	
	if (lead8[count8]==1) {
		
		// SWITCH MODE
		if (leadStepCount==leadStep) { //end of segment
		
		    if (leadMode==1) {
				leadStep = 1 + Math.floor(Math.random()*5);
			} else {
				leadStep = 1 + Math.floor(Math.random()*2);
			}
			
			leadDir = -leadDir;
			modeSelect = Math.floor(Math.random()*15); // DICEROLL
			
			if (modeSelect<6) {
				leadMode = 3; // JUMP
			}
			if (modeSelect>5 && modeSelect<8) {
				leadMode = 2; // TRI
				if (leadLastOctave==0) {
					leadLastNote = 5 + Math.floor(Math.random()*3);
					leadDir = 1;
				}
			}
			if (modeSelect>7) {
				leadMode = 1; // STEP
				if (leadLastOctave==0) {
					leadLastNote = 5 + Math.floor(Math.random()*3);
					leadDir = 1;
				}
			}

			leadStepCount = 0;
		}
		leadStepCount += 1;
		
		
		// NOTE FROM MODE
		if (leadMode==1) { // STEP
		
		    thisScale = note3;
		    thisOctave = leadLastOctave;  
			
			if (leadDir==1) { // UP
				thisRand = leadLastNote += 1;
			} else { // DOWN
				thisRand = leadLastNote -= 1;
			}
			
			// RANGE
			if (thisRand>1 && thisOctave==36) {
				thisRand = 7;
				thisOctave -= 12;
				leadDir = -leadDir;
				leadStepCount = 0;
			}
			
			if (thisRand<0) {
				if (thisOctave>0) { // SHIFT OCTAVE
					thisRand = 6;
					thisOctave -= 12;
				} else { // CHANGE DIR
					thisRand = 1;
					leadDir = -leadDir;
					leadStepCount = 0;
				}
			}
			if (thisRand>7) {
				if (thisOctave<36) { // SHIFT OCTAVE
					thisRand = 1;
					thisOctave += 12;
				} else { // CHANGE DIR
					thisRand = 6;
					leadDir = -leadDir;
					leadStepCount = 0;
				}
			}
			
			
		} else if (leadMode==2) { // TRI
		
		    thisScale = note;
		    thisOctave = leadLastOctave;
			
			if (leadDir==1) { // UP
				thisRand = leadLastNote += 2;
			} else { // DOWN
				thisRand = leadLastNote -= 2;
			}
			
			// RANGE
			if (thisRand<0) {
				if (thisOctave>0) { // SHIFT OCTAVE
					thisRand = 6;
					thisOctave -= 12;
				} else { // CHANGE DIR
					thisRand = 1;
					leadDir = -leadDir;
					leadStepCount = 0;
				}
			}
			if (thisRand>7) {
				if (thisOctave<24) { // SHIFT OCTAVE
					thisRand = 0;
					thisOctave += 12;
				} else { // CHANGE DIR
					thisRand = 6;
					leadDir = -leadDir;
					leadStepCount = 0;
				}
			}
			
		} else if (leadMode==3) { // JUMP
		
		    thisScale = note;
		    thisOctave = (Math.round(Math.random()*2))*12;
		    thisRand = Math.floor(Math.random()*8);
			
		}
		leadLastNote = thisRand;
		leadLastOctave = thisOctave;
		
		// DO NOTE
	    thisKey = midC -13;
		if (starting==true||leadBreak==true) {
			thisRand = 5;
			starting = false;
		}
	    thisInt = thisKey + thisOctave + thisScale[thisRand];
		freq = Math.pow(2,(thisInt/12))*440;
		leadNote(freq);
	}
	
	// END BAR RESET
	count8 += 1;
	if (count8==8) {
		count8 = 0;
		
		leadBreakEnd = Math.floor(Math.random()*1); // potentially end break section
		if (leadBreakEnd==0) {
		    leadBreak = false;
		}
		
		
		for (i=0;i<7;i+=2) {
			lead8[i] = 1; // reset bar
			lead8[i+1] = 0;
			
			restRoll = Math.floor(Math.random()*4); // rests
			if (restRoll==0) {
				lead8[i] = 0;
			}
			if (leadMode==1) {
				sixteenRoll = Math.floor(Math.random()*4); // 16th beats
			} else {
				sixteenRoll = Math.floor(Math.random()*5); // 16th beats
			}
			
			if (sixteenRoll==0) {
				lead8[i+1] = 1;
			}
			
		}
		
		
		if (leadBreak==true) { // each break bar
		
		    for (i=0;i<8;i++) {
		        lead8[i] = 0;
			}
	    }
		
		leadBreakRoll = Math.floor(Math.random()*8); // lead break start
		if (leadBreakRoll==0) {
			leadBreak = true;
			
			for (i=0;i<8;i++) {
		        lead8[i] = 0;
			}
			lead8[0] = 1;
		}
		
		
	}
}

function playBass() {
	
	if (bass8[countBass]==1) {
	
	    // CHOOSE & PLAY NOTE //
	    thisKey = midC -25;
		thisOctave = 0;
		bassSelect = Math.floor(Math.random()*8);
		
		if (bassSelect==bassSelectLast && bassSelect!==1) {
			bassSelectCount += 1;
			if (bassSelectCount==1) { // have another go on repeat
				bassSelect = Math.floor(Math.random()*8);
			} else {
				while (bassSelect==bassSelectLast) { // force different note after 2 repeats
					bassSelect = Math.floor(Math.random()*8);
				}
				bassSelectCount = 0;
			}
		} else {
			bassSelectCount = 0;
		}
		
		if (starting==true||breaking==true) {
			bassSelect = 1;
			//starting = false;
		}
		harmPicker = Math.floor(Math.random()*2);
		if (harmPicker==0) {
			thisInt2  = thisKey + (thisOctave) + fifth[bassSelect];
		} else if (harmPicker==1) {
			thisInt2  = thisKey + (thisOctave) + harmony[bassSelect];
		} else {
			thisInt2  = thisKey + (thisOctave) + note2[bassSelect];
		}
		
	    thisInt = thisKey + thisOctave + note2[bassSelect];
		thisInt2  = thisKey + (thisOctave) + harmony[bassSelect];
		thisInt3  = thisKey + (thisOctave) + fifth[bassSelect];
		freq = Math.pow(2,(thisInt/12))*440;
		freq2 = Math.pow(2,((thisInt+12)/12))*440;
		freq3 = Math.pow(2,((thisInt2+24)/12))*440;
		freq4 = Math.pow(2,((thisInt3+24)/12))*440;
		bassNote(freq,freq2,freq3,freq4,bassLength[countBass]);
		bassSelectLast = bassSelect;
	}
	
	countBass += 1;
	if (countBass==16) { // END OF BAR RESET
		countBass = 0;
		
		breakEnd = Math.floor(Math.random()*2); // potentially end break section
		if (breakEnd==0) {
		    breaking = false;
			harmFreqDest = 10;
		}
		
		// RHYTHM //
		
		if (breaking==false) {
			for (i=0;i<16;i++) {
				bass8[i] = bassReset[i]; // EVERY 4 BEATS
			}
			
			for (i=0;i<7;i+=8) {
				
				restRoll = Math.floor(Math.random()*20); // rests
				if (restRoll==0) {
					bass8[i] = 0;
				}
				
				sixteenRoll = Math.floor(Math.random()*2); // 16th beats
				if (sixteenRoll==0) {
					
					delayRoll  = Math.floor(Math.random()*8);
					if (delayRoll==0) {
						bass8[i+6] = 1;
					} else {
						bass8[i+4] = 1;
					}
					
				}
			}
			
			// TIMING FINISHED, SET NOTE LENGTH
			
			for (i=0;i<16;i++) {
				if (i==0||i==8) {
					bassLength[i] = 4;
					if (bass8[i+4]==1) { // if 4 beats long
						bassLength[i] = 2;
					}
					if (bass8[i+6]==1) { // if 6 beats long
						bassLength[i] = 3;
					}
				}
				if (i==4||i==12) {
					bassLength[i] = 2;
					if (bass8[i+4]==0) {
						bassLength[i] = 4; // can extend to 8 beats long
					}
				}
				if (i==6) {
					bassLength[i] = 1;
					if (bass8[i+2]==0) {
						bassLength[i] = 3; // can extend to 6 beats long
					}
				}
				if (i==14) {
					bassLength[i] = 3;
				}
				
			}
		}
		
		if (breaking==true) { // each break bar
		
		    for (i=0;i<16;i++) {
		        bass8[i] = 0;
			}
	    }
		
		if (startCounter>10) { // from bar 12
			breakRoll = Math.floor(Math.random()*16); // bass break start 
			if (breakRoll==0) {
				breaking = true;
				harmFreqDest = 6;
				for (i=0;i<16;i++) {
					bass8[i] = 0;
				}
				bass8[0] = 1;
			}
		}
		
		harmVolRoll = Math.floor(Math.random()*3); // harmony volume
		if (harmVolRoll==0) {
			bassHarmVolDest = 0.05 + Math.random()*0.3;
		}
		
	}
}

function playHarm() {
	if (beatCount==3||beatCount==7||beatCount==11||beatCount==15||harmTimer==7) {
		if ((mouseHold==true||harmTimer==7) && paused==false) {
			harmTimer = 6;
			thisKey = midC -1;
			thisOctave = 0;
			thisInt = thisKey + thisOctave + harmony[bassSelect];
			freq = Math.pow(2,(thisInt/12))*440;
			harmNote(freq);
		}
		if (flickerCount>0) {
			flickerCount -= 1;
		}
	}
	if (harmTimer<7 && harmTimer>0) {
		harmTimer -= 1;
	}
}



function playPad(g,o,o2) {
	
	if (paused==false) {
		thisKey = midC -1;
		thisOctave = (Math.round(Math.random()*1))*12;
		intRand = Math.floor(Math.random()*7)
		thisInt = thisKey + thisOctave + note[intRand];
		thisInt2 = thisKey + thisOctave + note[intRand+1];
		o.frequency.value = Math.pow(2,(thisInt/12))*440;
		o2.frequency.value = Math.pow(2,(thisInt2/12))*440;
		
		var now = acx.currentTime;
		g.gain.setValueAtTime(masterGain*0.0, now + 0.2);
		g.gain.linearRampToValueAtTime(masterGain*0.9, now + ((60/bpm)*4));
		g.gain.linearRampToValueAtTime(masterGain*0.0, now + 0.1 + ((60/bpm)*8));
	}
	
	setTimeout(function(){
		
        playPad(padGain,pad,pad2);
	},8000 + Math.round(Math.random()*2000));
	
}

function playPerc() {
	thisKey = midC -25;
	thisOctave = (-1 + Math.round(Math.random()*1))*12;
	thisInt2 = thisKey + (thisOctave+24) + note[Math.floor(Math.random()*8)];
	thisInt = thisKey + thisOctave + note[Math.floor(Math.random()*8)];
	freq = Math.pow(2,(thisInt/12))*440;
	noiseFreq = Math.pow(2,(thisInt2/12))*440;
	percNote(freq,noiseFreq);
}

function playDrum() {
	if (drum8[countDrum]==1) {
		
		if (countDrum==4||countDrum==12) {
			thisNo = 7;
		}
		else {
			thisNo = 1;
		}
		
		thisKey = midC -25;
		thisOctave = 0;
		thisInt = thisKey + thisOctave + note[thisNo];
		freq = Math.pow(2,(thisInt/12))*440;
		drumNote(freq);
	}
	
	countDrum += 1;
	if (countDrum==16) {
		countDrum = 0;
	}
}

function panPlay(p) {
	
	clearTimeout(panTimer[p]);
	
	thisKey = midC + 11;
	thisInt = thisKey + panScale[p];
	thisInt2 = thisKey - 12 + panHarm[p];
	freq = Math.pow(2,(thisInt/12))*440;
	freq2 = Math.pow(2,(thisInt2/12))*440;
	panNote(freq,freq2,p);
	
	
	panTimer[p] = setTimeout(function(){
        panOn[p] = false;
	},((60/bpm)*2.6)*1000);
}


function harpSetFreq(p) {
	thisKey = midC + 11;
	thisInt = thisKey + harpScale[p];
	thisInt2 = thisKey - 12 + harpScale[p];
	freq = Math.pow(2,(thisInt/12))*440;
	freq2 = Math.pow(2,(thisInt2/12))*440;
	harpFreqDest = freq;
	harpFreq = freq;
	harpD[harpCount].frequency.value = harpFreq;
}

//-------------------------------------------------------------------------------------------
//  SILENT START NOTE FOR DEVICES
//-------------------------------------------------------------------------------------------


function silentNote() {
	silence = acx.createOscillator();
	silenceGain = acx.createGain();
	silence.connect(silenceGain);
	silenceGain.connect(mainDest);
	silenceGain.gain.value = 0;
	silence.start(0);
	
	setTimeout(function(){
		
        silence.disconnect(); // Disconnect oscillator so it can be picked up by browser's garbage collecter
		silenceGain.disconnect();
	
	},1000);
}