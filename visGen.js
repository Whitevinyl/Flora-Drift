// JavaScript Document

//-------------------------------------------------------------------------------------------
//  INITIALISE SCENE
//-------------------------------------------------------------------------------------------

function generateScene() {
	
	palette = Math.floor(Math.random()*4);
	
	if (palette==0) {
		col = col1;
		sky = sky1;
	} else if (palette==1) {
		col = col2;
		sky = sky2;
	} else if (palette==2) {
		col = col3;
		sky = sky3;
	} else if (palette==3) {
		col = col4;
		sky = sky4;
	}
	skyCol = sky[Math.round(Math.random()*sky.length)];
	
	groundSetup();
	bgSetup();
	foliageSetup();
	canopySetup();
	
}


//-------------------------------------------------------------------------------------------
//  GROUND
//-------------------------------------------------------------------------------------------


function groundSetup() {
	
    gNo = Math.ceil((fullX*1.1)/(80*units));
	slope = fullY/(20*units);
	
	gWalk =  (slope) + (Math.random()*(slope*5)) ;
	for (i=0;i<gNo;i++) {
		
		gWalk += -(slope) + (Math.random()*(slope*2));
		if (gWalk < (slope)) {
			gWalk = (slope) + (Math.random()*(slope));
		}
		if (gWalk > (slope*7)) {
			gWalk = (slope*7) - (Math.random()*(slope));
		}
		
		ground1[i] = gWalk;
	}
	
	gWalk =  ((-slope)) - (Math.random()*(slope*5)) ;
	for (i=0;i<gNo;i++) {
		
		gWalk += -(slope) + (Math.random()*(slope*2));
		if (gWalk < (-(slope*6))) {
			gWalk = (-(slope*6)) + (Math.random()*(slope));
		}
		if (gWalk > ((-slope))) {
			gWalk = ((-slope)) - (Math.random()*(slope));
		}
		
		ground2[i] = gWalk;
	}
	
}

//-------------------------------------------------------------------------------------------
//  BACKGROUND
//-------------------------------------------------------------------------------------------


function bgSetup() {
	
	// TREES //
	for (i=0;i<10;i++) {
		tx = -((fullX/units)*0.6) + Math.random()*((fullX/units)*1.2);
		tw = 40 + Math.random()*30;
		tree1[i] = new Vector(tx,tw);
	}
	
	for (i=0;i<4;i++) {
		tx = -((fullX/units)*0.6) + Math.random()*((fullX/units)*1.2);
		tw = 60 + Math.random()*80;
		tree2[i] = new Vector(tx,tw);
	}
	
	// BG DIAMOND //
	for (i=0;i<6;i++) {
		tx = -(halfX/units) + (Math.random()*(fullX/units));
		ty = -((halfY/units)*0.75) + (Math.random()*(halfY/units));
		bgDiamond[i] = new Diamond(new Vector(tx,ty));
	}
	for (i=0;i<30;i++) {
		tx = -(halfX/units) + (Math.random()*(fullX/units));
		ty = -((halfY/units)*0.5) + (Math.random()*(halfY/units));
		bgDiamond2[i] = new Diamond(new Vector(tx,ty));
	}
	
	for (i=0;i<3;i++) {
		tx = -((fullX*0.3)/units) + (Math.random()*((fullX*0.6)/units));
		ty = - (Math.random()*60);
		bgSky[i] = new Vector(tx,ty);
	}
	
	
	// BG PLANT //
	for (i=0;i<15;i++) {
		position = new Vector(  ((-fullX*0.4) + (Math.random()*(fullX*0.8)))/units ,((-halfY*0.25) + (Math.random()*(halfY*0.5)))/units );
	
		cluster = position;
	
		bgPlant[i] = new Plant(position,new Vector(-50 + Math.random()*30,40 + Math.random()*40),new Vector(-10 + Math.random()*20,60 + Math.random()*50),new Vector(20 + Math.random()*30,40 + Math.random()*40), 0.1 + Math.random()*0.8 );
		
	}
	
	// ANIMALS //
	animal.length = 0;
	animalYes = Math.floor(Math.random()*10);
	if (animalYes==0) {
		//alert("animal");
		tx = -((fullX*0.4)/units) + Math.random()*((fullX*0.8)/units);
		tw = ((halfY*1.1)/units) + Math.random()*((halfY*0.2)/units);
		animal[0] = new Vine(tx,tw,1.5 + Math.random()*1.5);
	}
}


//-------------------------------------------------------------------------------------------
//  FOLIAGE
//-------------------------------------------------------------------------------------------


function foliageSetup() {
	
	// VINE //
	for (i=0;i<18;i++) {
		tx = -((fullX/units)*0.6) + Math.random()*((fullX/units)*1.2);
		tw = ((halfY*0.5)/units) + Math.random()*(halfY/units);
		vine1[i] = new Vine(tx,tw,1.5 + Math.random()*0.5);
	}
	
	// VINE OVERLAY//
	vine3.length = 0;
	vineYes = Math.round(Math.random()*4);
	greenVineNo = 12 + Math.round(Math.random()*6);
	if (vineYes==1) {
		for (i=0;i<greenVineNo;i++) {
			tx = -(halfX/units) + Math.random()*(fullX/units);
			tw = ((halfY*0.6)/units) + Math.random()*((halfY*1.1)/units);
			vine3[i] = new Vine(tx,tw,1.5 + Math.random()*0.5);
		}
	}
	// DARK VINES //
	vine4.length = 0;
	vineYes2 = Math.round(Math.random()*6);
	if (vineYes2==1) {
		for (i=0;i<40;i++) {
			tx = -((halfX*0.6)/units) + Math.random()*((fullX*1.2)/units);
			tw = ((halfY*1.5)/units) + Math.random()*((halfY*0.5)/units);
			vine4[i] = new Vine(tx,tw,1.5 + Math.random()*0.5);
		}
	}
	
	
	// PALM //
	palm.length = 0;
	palmYes = Math.floor(Math.random()*2);
	if (palmYes==0) {
		for (i=0;i<3;i++) {
			position = new Vector(  ((-fullX*0.6) + (Math.random()*(fullX*1.2)))/units , -150-(Math.random()*120) );
			cluster = position;
		
			palm[i] = new Palm(position,
			new Vector(-260 + Math.random()*100,150 + Math.random()*100),
			new Vector(-120 + Math.random()*100,250 + Math.random()*150),
			new Vector(20 + Math.random()*100,  250 + Math.random()*150),
			new Vector(160 + Math.random()*100, 150 + Math.random()*100), 
			0.5 + Math.random()*0.8 );
			
		}
	}
	
	// DANGLE //
	dangle.length = 0;
	dangleYes = Math.floor(Math.random()*4);
	if (dangleYes==0) {
		dangleCol = Math.floor(Math.random()*2);
		dangleNo = 1 + Math.floor(Math.random()*2);
		for (i=0;i<dangleNo;i++) {
			
			tx = -(halfX/units) + Math.random()*(fullX/units);
			tw = ((halfY*0.2)/units) + Math.random()*((halfY*0.8)/units);
			dangle[i] = new Vine(tx,tw, Math.round(3 + Math.random()*3) );
			
		}
	}
	
	
	
	// FOREGROUND STYLE //
	foreGroundCheck = Math.floor(Math.random()*9);
	if (foreGroundCheck<3) {
		foreGroundStyle = 1;
	} else if (foreGroundCheck>2 && foreGroundCheck<6) {
		foreGroundStyle = 2;
	} else {
		foreGroundStyle = 3;
	}
	
	palm2.length = 0;
	
	// PALM DIRECTIONAL//
	if (foreGroundStyle==1) {
		
	var palmWalk = ((-fullX*0.6) + (Math.random()*(fullX*0.3)))/units;
		for (i=0;i<12;i++) {
			position = new Vector(  palmWalk , (Math.random()*200) );
			cluster = position;
			palmDir = Math.floor(Math.random()*2);
			
			if (palmDir==0) {
				p1 = new Vector(     -140 + Math.random()*180,     -100 - Math.random()*200);
				p2 = new Vector(p1.x + 30 + Math.random()*20,p1.y - 40 - Math.random()*20);
				p3 = new Vector(p2.x + 30 + Math.random()*20,p2.y - 40 - Math.random()*20);
				p4 = new Vector(p3.x + 30 + Math.random()*20,p3.y - 40 - Math.random()*20);
			} else {
				p1 = new Vector(     -140 + Math.random()*180,     -230 - Math.random()*200);
				p2 = new Vector(p1.x + 30 + Math.random()*20,p1.y + 40 + Math.random()*20);
				p3 = new Vector(p2.x + 30 + Math.random()*20,p2.y + 40 + Math.random()*20);
				p4 = new Vector(p3.x + 30 + Math.random()*20,p3.y + 40 + Math.random()*20);
			}
			
		
			palm2[i] = new Palm(position,p1,p2,p3,p4,0.5 + Math.random()*0.8 );
			
			
			palmJump = Math.round(Math.random()*4);
			if (palmJump==0) {
				palmWalk += 300 + (Math.random()*200);
			} else {
				palmWalk += 100 + (Math.random()*50);
			}
			
		}
	}
	// GRASS TUFTS//
	else if (foreGroundStyle==2) {
		var palmWalkCount = 0;
	    var palmWalk = ((-fullX*0.6) + (Math.random()*(fullX*0.3)))/units;
		tuftNo = 20 + Math.round(Math.random(10));
		for (i=0;i<tuftNo;i++) {
			position = new Vector(  palmWalk , (Math.random()*100) );
			cluster = position;
			
			p1 = new Vector(     -140 + Math.random()*180,     -110 - Math.random()*150);
			p2 = new Vector(p1.x + 20 + Math.random()*40,p1.y - Math.random()*200);
			p3 = new Vector(p2.x + 20 + Math.random()*40,p1.y - Math.random()*200);
			p4 = new Vector(p3.x + 20 + Math.random()*40,p1.y + 40 - Math.random()*80);
			
			
		
			palm2[i] = new Palm(position,p1,p2,p3,p4,0.5 + Math.random()*0.8 );
			
			
			palmJump = Math.floor(Math.random()*2);
			if (palmWalkCount>5 && palmJump==0) {
				palmWalk += 250 + (Math.random()*100);
				palmWalkCount = 0;
			} else {
				palmWalk += (50) + (Math.random()*(10));
				palmWalkCount += 1;
			}
			
		}
	}
	else if (foreGroundStyle==3) {
		var palmWalkCount = 0;
	    var palmWalk = ((-fullX*0.6) + (Math.random()*(fullX*0.3)))/units;
		tuftNo = 20;
		for (i=0;i<tuftNo;i++) {
			position = new Vector(  palmWalk , (Math.random()*100) );
			cluster = position;
			
			p1 = new Vector(     -140 + Math.random()*180,     -110 - Math.random()*150);
			p2 = new Vector(p1.x + 20 + Math.random()*40,p1.y - Math.random()*200);
			p3 = new Vector(p2.x + 20 + Math.random()*40,p1.y - Math.random()*200);
			p4 = new Vector(p3.x + 20 + Math.random()*40,p1.y + 40 - Math.random()*80);
			
			palm2[i] = new Palm(position,p1,p2,p3,p4,0.5 + Math.random()*0.8 );
			
			palmJump = Math.floor(Math.random()*2);
			if (palmWalkCount==1) {
				palmWalk += 200 + (Math.random()*200);
				palmWalkCount = 0;
			} else {
				//palmWalk += (1200/tuftNo) + (Math.random()*(500/tuftNo));
				palmWalk += (100) + (Math.random()*(10));
				palmWalkCount += 1;
			}
			
		}
		
		// FOREGROUND BROAD LEAVES//
		for (h=0;h<3;h++) {
		var bno = Math.floor(Math.random()*ground2.length);
		
			for (i=0;i<3;i++) {
				position = new Vector( (bno*80) - 120 + (Math.random()*240) , Math.random()*130 );
				bpos = - 20 + (Math.random()*40);
				
				p1 = new Vector(bpos - 20,  -40 - Math.random()*10); // l
				p2 = new Vector(bpos + 20,  -40 - Math.random()*10); // r
				p3 = new Vector(bpos  -15 + Math.random()*30,  -80 - Math.random()*40); // m
				p4 = new Vector(p3.x + bpos,  -140 - Math.random()*40); // t
				
				broad2[i+(3*h)] = new Palm(position,p1,p2,p3,p4,0.5 + Math.random()*1.8 );
				
			}
		}
		
	}
	
	
	
	// BROAD LEAVES//
	broad1.length = 0;
	broadNo = 2 + Math.floor(Math.random()*4);
	for (h=0;h<broadNo;h++) {
	var bno = Math.floor(Math.random()*ground2.length);
	
		for (i=0;i<3;i++) {
			position = new Vector( (bno*80) - 80 + (Math.random()*160) , ground2[bno] + 40 );
			bpos = - 20 + (Math.random()*40);
			
			p1 = new Vector(bpos - 20,  -40 - Math.random()*10); // l
			p2 = new Vector(bpos + 20,  -40 - Math.random()*10); // r
			p3 = new Vector(bpos  -15 + Math.random()*30,  -80 - Math.random()*40); // m
			p4 = new Vector(p3.x + bpos,  -140 - Math.random()*40); // t
			
			broad1[i+(3*h)] = new Palm(position,p1,p2,p3,p4,0.5 + Math.random()*1.5 );
			
		}
	}
	
}


//-------------------------------------------------------------------------------------------
//  CANOPY
//-------------------------------------------------------------------------------------------


function canopySetup() {
	
	canopyStyle = 1 + Math.floor(Math.random()*6);
	canopyCol = 1 + Math.floor(Math.random()*2);
	
	vine2.length = 0;
    vineDest = Math.floor(Math.random()*9);
	cWalk = new Vector(-(halfX/units) + (Math.random()*400), (Math.random()*((fullY*0.3)/units)));
	
	for (h=0;h<6;h++) {
		
		clusters[h] = new Vector(cWalk.x,cWalk.y);
		cluster = cWalk;
		clusterPos(cluster.x,cluster.y);
		
		// FLOWER //
		flower1[h] = new Flower(position,0.5 + Math.random()*0.5,0.5 + Math.random()*0.5);
		
		// DIAMOND LG//
		for (i=0;i<5;i++) {
			
			clusterPos(cluster.x,cluster.y);
			if (i!==1) {
			    diamond1[i+(5*h)] = new Diamond(position);
			} else {
				diamond1[i+(5*h)] = new Diamond(new Vector(cluster.x,cluster.y));
			}
			
		}
		
		// DIAMOND SM//
		for (i=0;i<15;i++) {
			
			clusterPos(cluster.x,cluster.y);
			diamond2[i+(12*h)] = new Diamond(position);
			
		}
		
		// LEAVES 1 //
		for (i=0;i<5;i++) {
			
			clusterPos(cluster.x,cluster.y);
			if (canopyStyle==1) {
				plant1[i+(5*h)] = new Plant(position,new Vector(-25 + Math.random()*24,50 + Math.random()*250),new Vector(-10 + Math.random()*20,60 + Math.random()*50),new Vector(1 + Math.random()*24,50 + Math.random()*250), 0.1 + Math.random()*0.8 );
			} else {
			    plant1[i+(5*h)] = new Plant(position,new Vector(-50 + Math.random()*30,40 + Math.random()*40),new Vector(-10 + Math.random()*20,60 + Math.random()*50),new Vector(20 + Math.random()*30,40 + Math.random()*40), 0.1 + Math.random()*0.8 );
			}
			
		}
		
		// LEAVES 2 //
		for (i=0;i<3;i++) {
			
			clusterPos(cluster.x,cluster.y);
			if (canopyStyle==1) {
				plant2[i+(3*h)] = new Plant(position,new Vector(-25 + Math.random()*24,60 + Math.random()*250),new Vector(-10 + Math.random()*20,70 + Math.random()*100),new Vector(1 + Math.random()*24,60 + Math.random()*250), 0.6 + Math.random()*0.6 );
			} else {
			    plant2[i+(3*h)] = new Plant(position,new Vector(-60 + Math.random()*30,50 + Math.random()*50),new Vector(-10 + Math.random()*20,70 + Math.random()*100),new Vector(30 + Math.random()*30,50 + Math.random()*50), 0.6 + Math.random()*0.6 );
			}
		}
		
		// VINES//
		if (vineDest==h) {
			
			for (i=0;i<5;i++) {
				tx = cluster.x - 100 + (Math.random()*200);
				ty = cluster.y;
				tw = ((halfY*0.8)/units) + Math.random()*(halfY/units);
				vine2[i] = new Vine(tx,tw,1 + Math.random()*0.5,ty);
			}
			
		}
		
		
		
		// WALK CLUSTERS//
	    lastX = cWalk.x;
		cWalk.x += 100 + Math.random()*400;
		
		if ((cWalk.x-lastX)<300) { // IF CLOSE TO LAST, SHIFT UP OR DOWN
			
			if (cWalk.y>((fullY*0.2)/units)) {
			    cWalk.y += -200 - Math.random()*50;
			} else {
				cWalk.y += 200 + Math.random()*50;
			}
		
		} else {
		    cWalk.y += -200 + Math.random()*400;
		}
		
		// BOUNDARIES
		if (cWalk.y>((fullY*0.4)/units)) { 
			cWalk.y = ((fullY*0.4)/units) - Math.random()*100;
		}
		
		if (cWalk.y< -10) {
			cWalk.y = -10 + Math.random()*100;
		}
	}
}