// JavaScript Document



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

