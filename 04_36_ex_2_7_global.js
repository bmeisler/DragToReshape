/*global Main, DraggableItem, BasicDraw */


//var viz;
//var stage;
/** I use the Main class to not only control the various instances of the DNDItems, but also to hold
the "magic number" info, etc, that would keep DNDItem from being modular/reusable. DNDItem should have NO knowledge of
what the drops do, how they effect other mcs, etc.
@_toBeDragged: an array of items we will make draggable
@_dropTargets: potential landing spots for the draggable items
@_correctTargets: should be optional - a list of draggable items to line up with the drop/landing spots
*/
function BasicDraw(_mc){
    this.mc = _mc;
    this.mc.visible = true;
}
BasicDraw.prototype.init = function() {
    this.drawingCanvas = new createjs.Shape();
    this.mc.addChild(this.drawingCanvas);
};
//_pointA and _pointB can be EITHER movie clips OR points, as both have x and y properties.
BasicDraw.prototype.drawLine = function(_pointA, _pointB, _lineAttrs) {
    //console.log("drawLine with: " + _pointA + ", " + _pointB);
    this.drawingCanvas.graphics.setStrokeStyle(_lineAttrs.stroke, 'round', 'round').beginStroke(_lineAttrs.color).moveTo(_pointA.x, _pointA.y).lineTo(_pointB.x, _pointB.y);
    
};
BasicDraw.prototype.setVisible = function(_b) {
    this.mc.visible = _b; 
};
BasicDraw.prototype.clear = function(_b) {
    this.drawingCanvas.graphics.clear(); 
};

BasicDraw.prototype.dashedLineTo = function (_pointA, _pointB, _lineAttributes, dashLen) {
    
    this.drawingCanvas.graphics.setStrokeStyle(_lineAttributes.stroke, 'round', 'round').beginStroke(_lineAttributes.color);
    
    this.drawingCanvas.graphics.moveTo(_pointA.x, _pointA.y);

    var dX = _pointB.x - _pointA.x;
    var dY = _pointB.y - _pointA.y;
    var dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / dashLen);
    var dashX = dX / dashes;
    var dashY = dY / dashes;
    
    var newX = 0;
    var newY = 0;
    var q = 0;
    while (q++ < dashes) {
        newX += dashX;
        newY += dashY;
        this.drawingCanvas.graphics[q % 2 === 0 ? 'moveTo' : 'lineTo'](_pointA.x + newX, _pointA.y + newY);
    }
    this.drawingCanvas.graphics[q % 2 === 0 ? 'moveTo' : 'lineTo'](_pointB.x, _pointB.y);
};
//function drawDashedRect(graphics: createjs.Graphics, x1: number, y1: number, w: number, h: number, dashLen: number) {
//    graphics.moveTo(x1, y1);
//    var x2 = x1 + w;
//    var y2 = y1 + h;
//    dashedLineTo(graphics, x1, y1, x2, y1, dashLen); // The top line 
//    dashedLineTo(graphics, x2, y1, x2, y2, dashLen); // The right line
//    dashedLineTo(graphics, x2, y2, x1, y2, dashLen); // The bottom line
//    dashedLineTo(graphics, x1, y2, x1, y1, dashLen); // The left line 
//}

//THIS IS WHERE I PUT ALL MY ONE-OFF STUFF, AND VIOLATE EVERY OOP RULE/BEST PRACTICE KNOWN TO MAN...
	function Main(_lib, _root, _toBeDragged, _canvas_mc){
    console.log("create a new Main");
		this.lib = _lib;
		this.root= _root;
		//this.viz = _viz;
//stage= _viz.cjsStage;
this.canvas = _canvas_mc;
this.nextDraggable = null;
this.nextOffset = null;

this.init = false;

this.lineAttributes = {};
this.lineAttributes.stroke =2;
this.lineAttributes.color = "#6480BB";

this.rectLineAttributes = {};
this.rectLineAttributes.stroke =8;
this.rectLineAttributes.color = "#66ccff";

this.newLines = new BasicDraw(this.canvas);
this.newLines.init();

this.diagonalLineAttributes = {};
this.diagonalLineAttributes.stroke =1;
this.diagonalLineAttributes.color = "#333333";


this.diagonalLines = new BasicDraw(this.canvas);
this.diagonalLines.init();


this.correctLinesAttributes = {};
this.correctLinesAttributes.stroke = 8;
this.correctLinesAttributes.color = "#FFCC00";

this.correctLines = new BasicDraw(this.canvas);
this.correctLines.init();

//this.bounds = this.canvas.getBounds();
this.bounds = {};
this.bounds.x = 0;
this.bounds.y = 0;
this.bounds.width = 275;
this.bounds.height = 175;
//console.log("this.bounds: " + this.bounds);
		this.toBeDragged = _toBeDragged;
		
		this.draggables = [];
this.pointNames = ["a", "d", "c", "b"];
		
		var i, draggable;
		for (i=0; i < this.toBeDragged.length; i++){
    draggable = new DraggableItem(this, this.toBeDragged[i], i);
    this.draggables.push(draggable);
		}

this.a=this.root.canvas_mc.pointA_mc;
this.b=this.root.canvas_mc.pointB_mc;
this.c=this.root.canvas_mc.pointC_mc;
this.d=this.root.canvas_mc.pointD_mc;
this.e=this.root.canvas_mc.pointE_mc;

//console.log("this.a: " + this.a);

this.reset.x=this.root.canvas_mc.pointA_mc.x;
this.reset.y=this.root.canvas_mc.pointA_mc.y;
this.resetB_x=this.root.canvas_mc.pointB_mc.x;
this.resetB_y=this.root.canvas_mc.pointB_mc.y;
this.resetC_x=this.root.canvas_mc.pointC_mc.x;
this.resetC_y=this.root.canvas_mc.pointC_mc.y;
this.resetD_x=this.root.canvas_mc.pointD_mc.x;
this.resetD_y=this.root.canvas_mc.pointD_mc.y;

this.resetE_x = this.e.x;
this.resetE_y = this.e.y;

//console.log("this.reset.x: " + this.reset.x);


this.delta_x = null;
this.delta_y =null;
this.dragEnabled = false;
this.doPara = true;
this.doSquare = false;
this.doRect = false;
this.doRhombus = false;
this.isPara = false;
this.isSquare = false;
this.isRect = false;
this.isRhombus = false;

//console.log("this.delta_x.x: "+ this.delta_x.x);


	}
	Main.prototype.reset = function(_whichBag){
		console.log("main.reset");
		var i;
this.newLines.clear();
		this.currentDNDItem = null;
		for (i=0; i < this.draggables.length; i++){
		    this.draggables[i].resetToStartPosition();
		}
this.setShapes();
//stage.update();
	};

 Main.prototype.drawQuad = function(_lineAttributes){

    this.newLines.drawLine(this.a, this.b, _lineAttributes);
    this.newLines.drawLine(this.b, this.c, _lineAttributes);
    this.newLines.drawLine(this.c, this.d, _lineAttributes);
    this.newLines.drawLine(this.d, this.a, _lineAttributes);
    var i;
  for (i = 0; i < this.draggables.length; i++){
   // put the lines behind the point mc
  this.draggables[i].DND_mc.parent.setChildIndex(this.draggables[i].DND_mc, this.draggables[i].DND_mc.parent.getNumChildren()-1);
}
};
Main.prototype.drawSpecialQuad = function(_lineAttributes1, _lineAttributes2){

    this.newLines.drawLine(this.a, this.b, _lineAttributes1);
    this.newLines.drawLine(this.b, this.c, _lineAttributes2);
    this.newLines.drawLine(this.c, this.d, _lineAttributes1);
    this.newLines.drawLine(this.d, this.a, _lineAttributes2);
    var i;
  for (i = 0; i < this.draggables.length; i++){
   // put the lines behind the point mc
  this.draggables[i].DND_mc.parent.setChildIndex(this.draggables[i].DND_mc, this.draggables[i].DND_mc.parent.getNumChildren()-1);
}
};

Main.prototype.drawDiagonals = function(_lineAttributes){
    var xmidpoint = (this.c.x +this.a.x)/2;
    var ymidpoint = (this.c.y + this.a.y)/2;

    this.e.x = xmidpoint + 10;//pointE is not centered on the point!
    this.e.y = ymidpoint + 2;  

    this.diagonalLines.dashedLineTo(this.a, this.c, this.diagonalLineAttributes, 5);
    this.diagonalLines.dashedLineTo(this.b, this.d, this.diagonalLineAttributes, 5);
};
//rotate the movingPoint around the centerPoint, based on "magic number" n and the distance between the
//movingPoint and the center point E (r).
Main.prototype.rotatePoint = function (movingPoint, n, radius) {

    //base the new location upon the non-moving center point, E
    movingPoint.x = (radius * Math.cos(n)) + this.resetE_x;
    movingPoint.y = (radius * Math.sin(n)) + this.resetE_y; 
 };
 
 Main.prototype.rotateRhombusPoint = function (point1, point2, point3, n) {

     var bx = point2.x;
     var by = point2.y;
     var ex = this.resetE_x;
     var ey = this.resetE_y;
     var dx = bx - ex;
     var dy = by - ey;
     var r = Math.sqrt(dx*dx + dy*dy);
     point1.x = (r * Math.cos(n)) + ex;
     point1.y = (r * Math.sin(n)) + ey; 

  };

// move point E to proper place
 Main.prototype.movePointE = function (point1,point2,point3,point4,point5) {
  
  var m1 = (point1.y - point3.y)/(point1.x - point3.x);
  var m2 = (point2.y - point4.y)/(point2.x - point4.x);
  var x1 = point1.x;
  var y1 = point1.y;
  var x2 = point2.x;
  var y2 = point2.y;
  var newx = ((-m2 * x2) + y2 + (m1 * x1) - y1)/(m1 - m2);
  var newy = (m1 * (newx - x1)) + y1;
  point5.x = newx;//new location for center Point E
  point5.y = newy;
 };
 
 /* figures out lengths of various segments, populates respective text fields */
 Main.prototype.updateData = function(){
     var dx = Math.abs(this.a.x - this.c.x);
     var dy = Math.abs(this.a.y - this.c.y);
     var ACLen = Math.floor(Math.sqrt(dx*dx + dy*dy)/ 4);
     dx = Math.abs(this.b.x - this.d.x);
     dy = Math.abs(this.b.y - this.d.y);
     var BDLen = Math.sqrt(dx*dx + dy*dy)/ 4;
     
     //console.log("BDLen: " + BDLen);
     
    // var BDLen2 = Math.floor(BDLen);
     //console.log("BDLen2: " + BDLen2);
     
     var aeLen = Math.floor(ACLen / 2);
     var ecLen = aeLen;
     var beLen = Math.floor(BDLen / 2);
     var edLen = beLen;
     
   //  // calculate lengths
     dx = Math.abs(this.a.x - this.b.x);
     dy = Math.abs(this.a.y - this.b.y);
    // var ABLen = Math.floor(Math.sqrt(dx*dx + dy*dy)/ 4);
     dx = Math.abs(this.b.x - this.c.x);
     dy = Math.abs(this.b.y - this.c.y);
    // var BCLen = Math.floor(Math.sqrt(dx*dx + dy*dy)/ 4);
     dx = Math.abs(this.c.x - this.d.x);
     dy = Math.abs(this.c.y - this.d.y);
    // var DCLen = Math.floor(Math.sqrt(dx*dx + dy*dy)/ 4);
     dx = Math.abs(this.d.x - this.a.x);
     dy = Math.abs(this.d.y - this.a.y);
     //var ADLen = Math.floor(Math.sqrt(dx*dx + dy*dy)/ 4);
     //DCLen = ABLen;
     //BCLen = ADLen;
     
//     console.log("ABLen: " + ABLen);
//     console.log("BCLen: " + BCLen);
//     console.log("DCLen: " + DCLen);
//     console.log("ADLen: " + ADLen);
     
//     if (BDLen % 2 !==0){
//         BDLen++;
//     }
     
   //update text fields
     this.root.lenAC_txt.text = aeLen + ecLen;//more accurate than ACLen
     this.root.lenBD_txt.text = beLen + edLen;//more accurate then BDLen
     this.root.lenAE_txt.text = aeLen;
     this.root.lenEC_txt.text = ecLen;
     this.root.lenBE_txt.text = beLen;
     this.root.lenED_txt.text = edLen;
 };
 Main.prototype.moveParallelogram = function(point){
    
     var dx, dy, a, r, anglemakerrighter;
     
     
     dx = point.x - this.resetE_x;
     dy = point.y - this.resetE_y;
     r = Math.sqrt(dx*dx + dy*dy);//what's the distance between the point being dragged and E, the center point? (E never moves)
     a = Math.atan2(dy, dx);
     
     if (point === this.draggables[0].DND_mc){//pointA
           if (this.doRect) {
             this.b.x = this.a.x;
             this.d.y = this.a.y;
             this.movePointE(this.a,this.b,this.c,this.d,this.e);
           } else if (this.doSquare) {
             this.rotatePoint(this.b, a - 1.57079633, r );
             this.rotatePoint(this.c, a - (2*1.57079633), r);
             this.rotatePoint(this.d, a + 1.57079633, r);
           } else if (this.doRhombus) {
             this.rotateRhombusPoint(this.b,this.b,this.e,a - 1.57079633 );
             this.rotateRhombusPoint(this.c,this.a,this.e, a - (2*1.57079633));
             this.rotateRhombusPoint(this.d,this.b,this.e,a + 1.57079633);
             
           }
           anglemakerrighter = 0;
     }else if (point === this.draggables[3].DND_mc){//dragging b

           if (this.doRect) {
             this.a.x = this.b.x;
             this.c.y = this.b.y;
            this. movePointE(this.a,this.b,this.c,this.d,this.e);
           } else if (this.doSquare) {
             this.rotatePoint(this.c, a - 1.57079633, r );
             this.rotatePoint(this.d, a - (2*1.57079633), r);
             this.rotatePoint(this.a, a + 1.57079633, r); 
           } else if (this.doRhombus) {
             this.rotateRhombusPoint(this.c,this.c,this.e,a - 1.57079633 );
             this.rotateRhombusPoint(this.d,this.b,this.e,a - (2*1.57079633));
             this.rotateRhombusPoint(this.a,this.c,this.e,a + 1.57079633);
           }
           anglemakerrighter = 270;
     }else if (point === this.draggables[2].DND_mc){//point C
           

           if (this.doRect) {
             this.d.x = this.c.x;
             this.b.y = this.c.y;
             this.movePointE(this.a,this.b,this.c,this.d,this.e);
           } else if (this.doSquare) {
             this.rotatePoint(this.d, a - 1.57079633, r );
             this.rotatePoint(this.a, a - (2*1.57079633), r);
             this.rotatePoint(this.b, a + 1.57079633, r);
           } else if (this.doRhombus) {
             this.rotateRhombusPoint(this.d,this.b,this.e,a - 1.57079633 );
             this.rotateRhombusPoint(this.a,this.c,this.e,a - (2*1.57079633));
             this.rotateRhombusPoint(this.b,this.b,this.e,a + 1.57079633);
           }
           anglemakerrighter = 180;
     }else if (point === this.draggables[1].DND_mc){//point D

           if (this.doRect) {
             this.c.x = this.d.x;
             this.a.y = this.d.y;
             this.movePointE(this.a,this.b,this.c,this.d,this.e);
           } else if (this.doSquare) {
             this.rotatePoint(this.a, a - 1.57079633, r );
             this.rotatePoint(this.b, a - (2*1.57079633), r);
             this.rotatePoint(this.c, a + 1.57079633, r);
           } else if (this.doRhombus) {
             this.rotateRhombusPoint(this.a,this.a,this.e,a - 1.57079633 );
             this.rotateRhombusPoint(this.b,this.d,this.e,a - (2*1.57079633));
             this.rotateRhombusPoint(this.c,this.a,this.e,a + 1.57079633);
           }
           anglemakerrighter = 90;
       }


     this.newLines.clear();
     this.correctLines.clear();
     this.diagonalLines.clear();
     if(!this.doRect){//use normal lines, and show the angle symbol
         this.drawQuad(this.correctLinesAttributes);
         this.root.canvas_mc.rightAngle_mc.rotation = a * (180 / 3.14159) - anglemakerrighter ;
         
         this.root.canvas_mc.rightAngle_mc.x = this.resetE_x;
         this.root.canvas_mc.rightAngle_mc.y = this.resetE_y;
     }else{
         this.drawSpecialQuad(this.correctLinesAttributes, this.rectLineAttributes);//use alternating lines, and don't show the angle symbol
     }
     
     this.drawQuad(this.lineAttributes);
     
     this.drawDiagonals();

     this.updateData();
 };

/* called when we press a button, to do original set up for the four shapes */
Main.prototype.setShapes = function(){

    this.newLines.clear();
    this.correctLines.clear();
    this.diagonalLines.clear();
    this.root.canvas_mc.rightAngle_mc.visible = true;
   
    
    
    this.root.canvas_mc.rightAngle_mc.x = this.e.x +5;
    this.root.canvas_mc.rightAngle_mc.y = this.e.y - 15;
    
    console.log("this.e.x: " + this.e.x);
    console.log("this.resetE_x: " + this.resetE_x);

        if ( this.root.currentState === "square"){
            this.doPara = false;
            this.doSquare = true;
            this.doRect = false;
            this.doRhombus = false;
            this.a.x=this.reset.x -20;
            this.a.y=this.reset.y;
            this.b.x=this.resetB_x + 60;
            this.b.y=this.resetB_y + 30;
            this.c.x=this.resetC_x;
            this.c.y=this.resetC_y + 30;
            this.d.x=this.resetD_x - 80;
            this.d.y=this.resetD_y;
            
            this.root.canvas_mc.rightAngle_mc.rotation = 225;

            this.drawQuad(this.correctLinesAttributes);
            this.drawQuad(this.lineAttributes);
            //this.moveParallelogram(this.a);
            
            //this.root.canvas_mc.rightAngle_mc.rotation = a * (180 / 3.14159) + 90;
            this.root.canvas_mc.rightAngle_mc.x =192;
            this.root.canvas_mc.rightAngle_mc.y =172;
            
            
            
            
        }else if (this.root.currentState === "rhombus"){
            this.doPara = false;
            this.doSquare = false;
            this.doRect = false;
            this.doRhombus = true;
//            this.a.x=this.reset.x + 60;
//            this.a.y=this.reset.y - 30;
//            this.b.x=this.reset.x - 10;
//            this.b.y=this.reset.y + 80;
//            this.c.x=this.reset.x + 120;
//            this.c.y=this.reset.y + 80;
//            this.d.x=this.reset.x + 190;
//            this.d.y=this.reset.y - 30;
            
            this.a.x=this.reset.x + 60;
            this.a.y=this.reset.y;
            this.b.x=this.resetB_x;
            this.b.y=this.resetB_y - 10;
            this.c.x=this.resetC_x - 48;
            this.c.y=this.resetC_y - 10;
            this.d.x=this.resetD_x + 12;
            this.d.y=this.resetD_y;
            
            this.root.canvas_mc.rightAngle_mc.rotation = 250;
            
            this.root.canvas_mc.rightAngle_mc.x =208;
            this.root.canvas_mc.rightAngle_mc.y = 152;
            
            console.log(this.root.canvas_mc.rightAngle_mc.x + ", " + this.root.canvas_mc.rightAngle_mc.y);

            this.drawQuad(this.correctLinesAttributes);
            this.drawQuad(this.lineAttributes);

        }else if (this.root.currentState === "rectangle"){
            this.doPara = false;
            this.doSquare = false;
            this.doRect = true;
            this.doRhombus = false;
//            this.a.x=this.reset.x;
//            this.a.y=this.reset.y - 30;
//            this.b.x=this.reset.x;
//            this.b.y=this.reset.y + 80;
//            this.c.x=this.reset.x + 150;
//            this.c.y=this.reset.y + 80;
//            this.d.x=this.reset.x + 150;
//            this.d.y=this.reset.y - 30;
            
            this.a.x=this.reset.x -70;
            this.a.y=this.reset.y;
            this.b.x=this.resetB_x + 10;
            this.b.y=this.resetB_y;
            this.c.x=this.resetC_x + 10;
            this.c.y=this.resetC_y;
            this.d.x=this.resetD_x -70;
            this.d.y=this.resetD_y;
            
            
            this.drawQuad(this.correctLinesAttributes);
            this.drawSpecialQuad(this.correctLinesAttributes, this.rectLineAttributes);
            this.drawQuad(this.lineAttributes);
            this.root.canvas_mc.rightAngle_mc.visible = false;
            
            
        }else if (this.root.currentState === "para"){
                this.doPara = true;
                this.doSquare = false;
                this.doRect = false;
                this.doRhombus = false;
                this.a.x=this.reset.x;
                this.a.y=this.reset.y;
                this.b.x=this.resetB_x;
                this.b.y=this.resetB_y;
                this.c.x=this.resetC_x;
                this.c.y=this.resetC_y;
                this.d.x=this.resetD_x;
                this.d.y=this.resetD_y;
                this.drawQuad(this.lineAttributes);
                this.root.canvas_mc.rightAngle_mc.visible = false;
        }
        
        this.drawDiagonals();
        
        this.updateData();
        
       
      
	};
		
	///////////////////////////////////////////////////////////////////////////////////////
	//// CONSTRUCTOR
	/* main - the parent class where we do stuff particular to this dnd item, eg custom stuff
 _mc - the movie clip we're dropping
 _dropSpots - an array of potential landing areas */
	function DraggableItem(_main, _mc, _idNum) {
    	//console.log("created a new DNDItem with mc: " + _mc);
		this.main = _main;
		this.DND_mc = _mc;
this.idNum = _idNum;
this.point = {x: this.DND_mc.x, y: this.DND_mc.y};//keep x and y in a point for convenience
this.pointOffset = this.DND_mc.point_mc.localToLocal(0,0, this.DND_mc);//optional - perhaps we need the location of something INSIDE the draggable item?

//console.log("pointOffset: " + this.pointOffset);

this.setStartPosition(this.DND_mc.x, this.DND_mc.y);
		this.init();
	}
	DraggableItem.prototype.setStartPosition = function(px, py){ 
//		this.START.x = px;
		//this.START.y = py;
//console.log("this.STAR.x: " + this.STAR.x);
		
	};
	DraggableItem.prototype.resetToStartPosition = function(){
    //console.log("resetStartPosition, this.STAR.x: " + this.STAR.x);
		//this.DND_mc.x = this.START.x;
		//this.DND_mc.y = this.START.y;
	};
	//// METHODS
	// public
	 DraggableItem.prototype.enable=function(b) {
		this.DND_mc.enabled = b;
	};
	
	DraggableItem.prototype.init=function() {
		//console.log("DraggableItem.init");
		var t = this;
		this.DND_mc.useHandCursor=true;
		this.DND_mc.mouseEnabled=true;
		this.DND_mc.mouseChildren=false;
		
		this.rolloverListener = this.DND_mc.on("rollover", function(evt){
			this.cursor = 'pointer';
		});
		this.rolloutListener = this.DND_mc.on("rollout", function(evt){
			this.cursor = 'default';
		});

		this.mousedownListener = this.DND_mc.on("mousedown", function(evt) {
//figure out the offset between the point and the mouse position
				this.offset = {x:this.x-evt.stageX, y:this.y-evt.stageY};

console.log("this point: " + t.main.pointNames[t.idNum]);

//now get the offest for the partner dot - do it here so it's only done once per click, not on every frame update!
if (t.idNum < t.main.draggables.length-1){
    t.main.nextDraggable = t.main.draggables[t.idNum+1];
}else{
    t.main.nextDraggable = t.main.draggables[0];
}

if (t.idNum > 0){
    t.main.previousDraggable = t.main.draggables[t.idNum-1];
}else{
    t.main.previousDraggable = t.main.draggables[t.main.draggables.length-1];
}
console.log("nextDraggable: " + t.main.pointNames[t.main.nextDraggable.idNum]);
t.main.nextOffset = {x:t.main.nextDraggable.DND_mc.x-evt.stageX, y:t.main.nextDraggable.DND_mc.y-evt.stageY};

t.main.previousOffset = {x:t.main.previousDraggable.DND_mc.x-evt.stageX, y:t.main.previousDraggable.DND_mc.y-evt.stageY};
//console.log("mousedownListener::nextOffset: " + t.main.nextOffset.x + ", " + t.main.nextOffset.y);


				//t.main.viz.getPlayer().stopWaiting("task0");
t.rightLimit = t.main.bounds.x + t.main.bounds.width + 100;
t.bottomLimit = t.main.bounds.y + t.main.bounds.height + 80;

			});

		// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
		this.pressMoveListener = this.DND_mc.on("pressmove", function(evt) {
  
  var MAX_X=350;
  var MIN_X=34;
  var MAX_Y=240;
  var MIN_Y=54;
    
    var newX = evt.stageX+ this.offset.x;
    var newY =  evt.stageY+ this.offset.y;
    
    var nextNewX = evt.stageX+ t.main.nextOffset.x;
    var nextNewY = evt.stageY+ t.main.nextOffset.y;
    
//    var previousNewX = evt.stageX+ t.main.previousOffset.x;
//    var previousNewY = evt.stageY+ t.main.previousOffset.y;
    
    console.log("newX, newY: " + newX + ", " + newY);
    
    console.log("nextNewX, nextNewY: " + nextNewX + ", " + nextNewY);
    
    //console.log("previousNewX, previousNewY: " + previousNewX + ", " + previousNewY);
    
    if (!t.main.doPara){//can't drag or resize parallelogram
       
        //Set dragggin point x and y separately, so it doesn't get "stuck" in both directions if one boundary is met
        if ((newX > MIN_X && newX < MAX_X) && (nextNewX > MIN_X && nextNewX < MAX_X)){//make sure dragging point is inside boundaries
            console.log("x is ok");
            this.x = newX;
            t.main.moveParallelogram(this);
        }
        if ((newY > MIN_Y && newY < MAX_Y) &&  (nextNewY > MIN_Y && nextNewY < MAX_Y)){//make sure dragging point is inside boundaries
            console.log("Y is ok");
            console.log("nextNewY: " + nextNewY);
            this.y = newY;
            t.main.moveParallelogram(this);
        }

    }
    

		});

		this.DND_mc.onPress = function() {
			console.log("pressed DNDItem");
			t.startDrag();
		};

		
		
		this.DND_mc.onMouseUp = function() {
			console.log("DNDItem mouse up");
			t.stopDrag();


		};
		
	};

	
	DraggableItem.prototype.reset = function() {
		this.resetStartPosition();
		this.DND_mc.gotoAndStop('start');
		//this.DND_mc.removeAllEventListeners("tick");
	};

	

	DraggableItem.prototype.startDrag = function(e){
		console.log("startDrag");
		//this.main.doSomething();
		};
	DraggableItem.prototype.disable = function(){
		console.log("disable DNDItem");
	if (this.DND_mc){
	    this.DND_mc.removeAllEventListeners();
	}

};

DraggableItem.prototype.stopDrag = function(e){
	console.log("stopDrag");
};
	DraggableItem.prototype.drawLines=function() {
		
	};



	
