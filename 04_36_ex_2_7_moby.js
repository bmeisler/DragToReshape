/*global Main, DraggableItem, BasicDraw */

(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 700,
	height: 350,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.shapeButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AA/g+QAbAaAAAkQAAAlgbAbQgaAaglAAQgkAAgbgaQgagbAAglQAAgkAagaQAbgbAkAAQAlAAAaAbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCFF").s().p("Ag+A/QgbgaAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003399").s().p("Ag+A/QgbgaAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AhGBGQgcgdAAgpQAAgoAcgeQAegcAoAAQApAAAdAcQAeAegBAoQABApgeAdQgdAegpgBQgoABgegeg");
	this.shape_3.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("ABUhUQAkAkAAAwQAAAygkAiQgjAkgxAAQgwAAgkgkQgjgiAAgyQAAgwAjgkQAkgjAwAAQAxAAAjAjg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhTBUQgjgjAAgxQAAgwAjgjQAjgjAwAAQAxAAAjAjQAkAjgBAwQABAxgkAjQgjAkgxgBQgwABgjgkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-13,26,26);


(lib.rigthAngle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A397A6").ss(1,1,1).p("AhBA/IAAh9ICDAA");
	this.shape.setTransform(-5.9,-5.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.5,-13.3,15.3,14.8);


(lib.actorRound2shadow = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.329)").s().p("AhOBPQghghAAguQAAgtAgghIABgBQAhggAtAAQAuAAAhAhQAhAhAAAtQAAAughAgIgBABQggAhguAAIAAAAQgtAAghghgAhKhLIgBABQgfAfAAArQAAAsAfAfQAgAgArAAQAsAAAfgfIABgBQAfgfAAgsQAAgrggggQgfgfgsAAIAAAAQgrAAgfAfg");
	this.shape.setTransform(-0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.247)").s().p("AAAB1QgvAAgjgjQgigiAAgwQAAgvAigjIAAAAQAjgiAvAAQAwAAAiAiQAjAjAAAvQAAAwgiAiIgBABQgiAigwAAIAAAAgAhOhPIgBABQggAhAAAtQAAAuAhAhQAhAhAtAAQAuAAAgghIABgBQAhggAAguQAAgtghghQghghguAAQgtAAghAgg");
	this.shape_1.setTransform(-0.2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.161)").s().p("AhVBWQgkgkAAgyQAAgxAjgkIABgBQAkgjAxAAQAyAAAkAkQAkAkAAAxQAAAygjAkIgBABQgkAjgyAAIAAAAQgxAAgkgkgAhShSIAAAAQgiAjAAAvQAAAwAiAiQAjAjAvAAQAwAAAigiIABgBQAigiAAgwQAAgvgjgjQgigigwAAQgvAAgjAig");
	this.shape_2.setTransform(-0.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.078)").s().p("AhZBZQglgkAAg1QAAgzAkgmIABgBQAmgkAzAAQA1AAAkAlQAmAmAAAzQAAA0glAlIgBABQglAlg0AAIAAAAQgzAAgmgmgAhVhWIgBABQgjAkAAAxQAAAyAkAkQAkAkAxAAQAyAAAkgjIABgBQAjgkAAgyQAAgxgkgkQgkgkgyAAIAAAAQgxAAgkAjg");
	this.shape_3.setTransform(-0.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.914)").s().p("AAABNQgfAAgXgXQgWgWAAggQAAgfAWgXIAAAAQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAWIAAAAQgWAXggAAIAAAAgAgygyQgVAVAAAdQAAAeAVAVQAVAVAdAAQAeAAAVgVQAVgVAAgeQAAgdgVgVQgVgVgeAAQgdAAgVAVg");
	this.shape_4.setTransform(-0.3,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.831)").s().p("Ag5A6QgYgYAAgiQAAghAYgYIAAAAQAYgYAhAAQAiAAAYAYQAYAYAAAhQAAAigYAYIAAAAQgYAYgiAAQghAAgYgYgAg2g2IAAAAQgWAXAAAfQAAAgAWAWQAXAXAfAAQAgAAAWgXIAAAAQAXgWAAggQAAgfgXgXQgWgWggAAIAAAAQgfAAgXAWg");
	this.shape_5.setTransform(-0.2,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.749)").s().p("Ag9A9QgZgZAAgkQAAgjAZgaIAAAAQAagZAjAAQAkAAAZAZQAaAaAAAjQAAAkgaAZIAAAAQgZAagkAAIAAAAQgjAAgagagAg5g5IAAAAQgYAYAAAhQAAAiAYAYQAYAYAhAAQAiAAAYgYIAAAAQAYgYAAgiQAAghgYgYQgYgYgiAAIAAAAQghAAgYAYg");
	this.shape_6.setTransform(-0.2,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.663)").s().p("AhABBQgbgbAAgmQAAglAbgbIAAAAQAbgbAlAAQAmAAAbAbQAbAbAAAlQAAAmgbAaIgBABQgaAbgmAAIAAAAQglAAgbgbgAg9g9IAAAAQgZAaAAAjQAAAkAZAZQAaAaAjAAQAkAAAZgaIAAAAQAagZAAgkQAAgjgagaQgZgZgkAAQgjAAgaAZg");
	this.shape_7.setTransform(-0.2,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.58)").s().p("AhEBEQgcgcAAgoQAAgnAcgcIABgBQAcgcAnAAQAoAAAcAcQAdAdAAAnQAAAogcAcIgBABQgcAcgoAAIAAAAQgnAAgdgdgAhAhAIAAAAQgbAbAAAlQAAAmAbAbQAbAbAlAAQAmAAAagbIABgBQAbgaAAgmQAAglgbgbQgbgbgmAAIAAAAQglAAgbAbg");
	this.shape_8.setTransform(-0.2,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.498)").s().p("AhHBIQgegeAAgqQAAgpAdgeIABgBQAegdApAAQAqAAAeAeQAeAeAAApQAAAqgeAdIgBABQgdAegqAAIAAAAQgpAAgegegAhDhEIgBABQgcAcAAAnQAAAoAcAcQAdAdAnAAQAoAAAcgcIABgBQAcgcAAgoQAAgngdgdQgcgcgoAAQgnAAgcAcg");
	this.shape_9.setTransform(-0.2,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.412)").s().p("AhLBLQgfgfAAgsQAAgrAfgfIABgBQAfgfArAAQAsAAAfAfQAgAgAAArQAAAsgfAfIgBABQgfAfgsAAIAAAAQgrAAgggggAhHhIIgBABQgdAeAAApQAAAqAeAeQAeAeApAAQAqAAAdgeIABgBQAegdAAgqQAAgpgegeQgegegqAAQgpAAgeAdg");
	this.shape_10.setTransform(-0.2,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgyAzQgVgVAAgeQAAgdAVgVQAVgVAdAAQAeAAAVAVQAVAVAAAdQAAAegVAVQgVAVgeAAQgdAAgVgVg");
	this.shape_11.setTransform(-0.2,-0.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13,-13,25.5,25.5);


(lib.HitBG = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuBxQgqgqgDg2QgEgJAAgIQABhAAwguQAugxBAAAQBCAAAwAxQAtAuABBAIAAARQgHA2gnAqQgwAvhCAAQhAAAgugvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.DraggablePoint = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#669999").ss(1,1,1).p("AAAg7QAYAAASASQASARAAAYQAAAZgSARQgSASgYAAQgXAAgSgSQgSgRABgZQgBgYASgRQASgSAXAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6FFD6").s().p("AgpAqQgSgRABgZQgBgYASgRQASgSAXAAQAYAAASASQASARAAAYQAAAZgSARQgSASgYAAQgXAAgSgSg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-7,14,14);


(lib.MANIPULABLE_POINT_E = function() {
	this.initialize();

	// Layer 2
	this.point_mc = new lib.DraggablePoint();
	this.point_mc.setTransform(-0.5,-0.3);

	// Layer 1
	this.text = new cjs.Text("E", "bold 18px 'Trebuchet MS'", "#ED6CC4");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 10;
	this.text.setTransform(20.1,-10.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAZgYQAKALAAANQAAAOgKALQgBABgBAAQgKAJgNAAQgMAAgJgJQgBAAgBgBQgLgLABgOQgBgNALgLQAKgKANAAQAOAAALAKg");
	this.shape.setTransform(0,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgVAaIgCgCQgLgKABgOQgBgNALgKQAKgLANAAQAOAAALALQAKAKAAANQAAAOgKAKIgCACQgKAIgNAAQgMAAgJgIg");
	this.shape_1.setTransform(0,-0.1);

	this.addChild(this.shape_1,this.shape,this.text,this.point_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-10.2,36.2,24.9);


(lib.MANIPULABLE_POINT_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{disabled:0,enabled:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	};
	this.frame_1 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// label
	this.text = new cjs.Text("D", "bold 18px 'Trebuchet MS'", "#CD00CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 12;
	this.text.setTransform(9.8,-26.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Layer 2
	this.point_mc = new lib.DraggablePoint();

	this.timeline.addTween(cjs.Tween.get(this.point_mc).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#669999").ss(1,1,1).p("AAAg6QAYgBASASQASASAAAXQAAAYgSASQgSARgYABQgXgBgSgRQgSgSAAgYQAAgXASgSQASgSAXABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6FFD6").s().p("AgpAqQgSgSABgYQgBgXASgSQASgSAXAAQAYAAASASQASASAAAXQAAAYgSASQgSARgYABQgXgBgSgRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// shadow
	this.instance = new lib.actorRound2shadow("synched",0);
	this.instance.setTransform(1.1,1.9,0.68,0.68);
	this.instance.alpha = 0.398;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.HitBG();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-26.1,35.6,42.1);


(lib.MANIPULABLE_POINT_C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"disabled":0,"enabled":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	};
	this.frame_1 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.point_mc = new lib.DraggablePoint();
	this.point_mc.setTransform(-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.point_mc).wait(2));

	// label
	this.text = new cjs.Text("C", "bold 18px 'Trebuchet MS'", "#FF3333");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 11;
	this.text.setTransform(9.5,3.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#669999").ss(1,1,1).p("AAAg6QAYgBASASQASASAAAXQAAAYgSASQgSARgYABQgXgBgSgRQgSgSAAgYQAAgXASgSQASgSAXABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6FFD6").s().p("AgpAqQgSgSABgYQgBgXASgSQASgSAXAAQAYAAASASQASASAAAXQAAAYgSASQgSARgYABQgXgBgSgRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// shadow
	this.instance = new lib.actorRound2shadow("synched",0);
	this.instance.setTransform(1.1,1.9,0.68,0.68);
	this.instance.alpha = 0.398;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.HitBG();
	this.instance_1.setTransform(6,9.5,1,1,0,0,0,13,18);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-24.5,42,53.4);


(lib.MANIPULABLE_POINT_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"disabled":0,"enabled":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	};
	this.frame_1 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// label
	this.text = new cjs.Text("B", "bold 18px 'Trebuchet MS'", "#326EFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 11;
	this.text.setTransform(-10.6,3.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Layer 2
	this.point_mc = new lib.DraggablePoint();
	this.point_mc.setTransform(-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.point_mc).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#669999").ss(1,1,1).p("AAAg6QAYgBASASQASASAAAXQAAAYgSASQgSARgYABQgXgBgSgRQgSgSAAgYQAAgXASgSQASgSAXABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6FFD6").s().p("AgpAqQgSgSABgYQgBgXASgSQASgSAXAAQAYAAASASQASASAAAXQAAAYgSASQgSARgYABQgXgBgSgRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// shadow
	this.instance = new lib.actorRound2shadow("synched",0);
	this.instance.setTransform(1.1,1.9,0.68,0.68);
	this.instance.alpha = 0.398;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.HitBG();
	this.instance_1.setTransform(-4,9.5,1,1,0,0,0,13,18);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-24.5,39.1,53.4);


(lib.MANIPULABLE_POINT_A_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"disabled":0,"enabled":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	};
	this.frame_1 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// label
	this.text = new cjs.Text("A", "bold 18px 'Trebuchet MS'", "#339966");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 11;
	this.text.setTransform(-10.3,-26.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Layer 2
	this.point_mc = new lib.DraggablePoint();

	this.timeline.addTween(cjs.Tween.get(this.point_mc).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#669999").ss(1,1,1).p("AAAg6QAYgBASASQASASAAAXQAAAYgSASQgSARgYABQgXgBgSgRQgSgSAAgYQAAgXASgSQASgSAXABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6FFD6").s().p("AgpAqQgSgSABgYQgBgXASgSQASgSAXAAQAYAAASASQASASAAAXQAAAYgSASQgSARgYABQgXgBgSgRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// shadow
	this.instance = new lib.actorRound2shadow("synched",0);
	this.instance.setTransform(1.1,1.9,0.68,0.68);
	this.instance.alpha = 0.398;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.HitBG();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-26.1,32,42.1);


(lib.canvas = function() {
	this.initialize();

	// pointA_mc
	this.rightAngle_mc = new lib.rigthAngle();
	this.rightAngle_mc.setTransform(196.5,157.5);

	this.pointE_mc = new lib.MANIPULABLE_POINT_E();
	this.pointE_mc.setTransform(207.5,160.2,1,1,0,0,0,8.8,1.8);

	this.pointC_mc = new lib.MANIPULABLE_POINT_C();
	this.pointC_mc.setTransform(278,223.3,1,1,0,0,0,-0.1,-3.2);

	this.pointD_mc = new lib.MANIPULABLE_POINT_D();
	this.pointD_mc.setTransform(357.9,92.3,1,1,0,0,0,-0.1,-3.2);

	this.pointB_mc = new lib.MANIPULABLE_POINT_B();
	this.pointB_mc.setTransform(45.1,223.3,1,1,0,0,0,-0.1,-3.2);

	this.pointA_mc = new lib.MANIPULABLE_POINT_A_();
	this.pointA_mc.setTransform(124.2,91);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(204,0,0,0)").ss(1,1,1).p("AdhvnMg7BAAAQhvAAAABCIAAdLQAABCBvAAMA7BAAAQBvAAAAhCIAA9LQAAhChvAAg");
	this.shape.setTransform(227,160);

	this.addChild(this.shape,this.pointA_mc,this.pointB_mc,this.pointD_mc,this.pointC_mc,this.pointE_mc,this.rightAngle_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.1,59,415.9,202);


(lib.Panel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{pg2:0,pg2b:1});

	// radioBtns_mc
	this.text = new cjs.Text("Make square", "bold 18px 'Trebuchet MS'");
	this.text.lineHeight = 20;
	this.text.setTransform(33.6,91.3);

	this.text_1 = new cjs.Text("Make rhombus", "bold 18px 'Trebuchet MS'");
	this.text_1.lineHeight = 20;
	this.text_1.setTransform(33.6,53.3);

	this.text_2 = new cjs.Text("Make rectangle", "bold 18px 'Trebuchet MS'");
	this.text_2.lineHeight = 20;
	this.text_2.setTransform(32.5,14.1);

	this.square_btn = new lib.shapeButton();
	this.square_btn.setTransform(16.8,101.2);

	this.rhombus_btn = new lib.shapeButton();
	this.rhombus_btn.setTransform(16.8,62.7);

	this.rectangle_btn = new lib.shapeButton();
	this.rectangle_btn.setTransform(16.7,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rectangle_btn},{t:this.rhombus_btn},{t:this.square_btn},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(2));

	// Layer 2
	this.canvas_mc = new lib.canvas();
	this.canvas_mc.setTransform(321.2,98.5,1,1,0,0,0,162.5,138);

	this.timeline.addTween(cjs.Tween.get(this.canvas_mc).wait(2));

	// lenAC_txt
	this.text_3 = new cjs.Text("=", "bold 18px 'Trebuchet MS'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 20;
	this.text_3.setTransform(449.7,284.9);

	this.text_4 = new cjs.Text("D", "bold 18px 'Trebuchet MS'", "#CD00CC");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 12;
	this.text_4.setTransform(431.4,285.8);

	this.text_5 = new cjs.Text("E", "bold 18px 'Trebuchet MS'", "#ED6CC4");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 10;
	this.text_5.setTransform(344.2,285.8);

	this.text_6 = new cjs.Text("=", "bold 18px 'Trebuchet MS'");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 20;
	this.text_6.setTransform(361.5,284.9);

	this.text_7 = new cjs.Text("=", "bold 18px 'Trebuchet MS'");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 20;
	this.text_7.setTransform(276.1,284.9);

	this.text_8 = new cjs.Text("D", "bold 18px 'Trebuchet MS'", "#CD00CC");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 20;
	this.text_8.lineWidth = 12;
	this.text_8.setTransform(258.6,285.8);

	this.text_9 = new cjs.Text("=", "bold 18px 'Trebuchet MS'");
	this.text_9.textAlign = "right";
	this.text_9.lineHeight = 20;
	this.text_9.setTransform(275.7,259);

	this.text_10 = new cjs.Text("=", "bold 18px 'Trebuchet MS'");
	this.text_10.textAlign = "right";
	this.text_10.lineHeight = 20;
	this.text_10.setTransform(449.5,259);

	this.text_11 = new cjs.Text("C", "bold 18px 'Trebuchet MS'", "#FF3333");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 20;
	this.text_11.lineWidth = 11;
	this.text_11.setTransform(431.2,259.9);

	this.text_12 = new cjs.Text("E", "bold 18px 'Trebuchet MS'", "#ED6CC4");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 20;
	this.text_12.lineWidth = 10;
	this.text_12.setTransform(344.2,259.9);

	this.text_13 = new cjs.Text("C", "bold 18px 'Trebuchet MS'", "#FF3333");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 20;
	this.text_13.lineWidth = 11;
	this.text_13.setTransform(257.9,259.9);

	this.text_14 = new cjs.Text("=", "bold 18px 'Trebuchet MS'");
	this.text_14.textAlign = "right";
	this.text_14.lineHeight = 20;
	this.text_14.setTransform(361.5,259);

	this.text_15 = new cjs.Text("E", "bold 18px 'Trebuchet MS'", "#FF66D8");
	this.text_15.lineHeight = 20;
	this.text_15.setTransform(412.5,285.8,1,0.998);

	this.text_16 = new cjs.Text("E", "bold 18px 'Trebuchet MS'", "#FF66D8");
	this.text_16.lineHeight = 20;
	this.text_16.setTransform(412.5,259.9,1.001,0.998);

	this.text_17 = new cjs.Text("B", "bold 18px 'Trebuchet MS'", "#326EFF");
	this.text_17.lineHeight = 20;
	this.text_17.setTransform(238.3,285.8,1,0.998);

	this.text_18 = new cjs.Text("B", "bold 18px 'Trebuchet MS'", "#326EFF");
	this.text_18.lineHeight = 20;
	this.text_18.setTransform(326.2,285.8,1,0.998);

	this.text_19 = new cjs.Text("A", "bold 18px 'Trebuchet MS'", "#339966");
	this.text_19.lineHeight = 20;
	this.text_19.setTransform(326.3,259.9,1.001,0.998);

	this.text_20 = new cjs.Text("A", "bold 18px 'Trebuchet MS'", "#339966");
	this.text_20.textAlign = "right";
	this.text_20.lineHeight = 20;
	this.text_20.setTransform(249.9,259.9,1,0.998);

	this.lenED_txt = new cjs.Text("999", "18px 'Trebuchet MS'");
	this.lenED_txt.name = "lenED_txt";
	this.lenED_txt.lineHeight = 20;
	this.lenED_txt.lineWidth = 36;
	this.lenED_txt.setTransform(451.5,285.8);

	this.lenBE_txt = new cjs.Text("999", "18px 'Trebuchet MS'");
	this.lenBE_txt.name = "lenBE_txt";
	this.lenBE_txt.lineHeight = 20;
	this.lenBE_txt.lineWidth = 36;
	this.lenBE_txt.setTransform(363.6,285.8);

	this.lenEC_txt = new cjs.Text("999", "18px 'Trebuchet MS'");
	this.lenEC_txt.name = "lenEC_txt";
	this.lenEC_txt.lineHeight = 20;
	this.lenEC_txt.lineWidth = 36;
	this.lenEC_txt.setTransform(451.5,259.9);

	this.lenAE_txt = new cjs.Text("999", "18px 'Trebuchet MS'");
	this.lenAE_txt.name = "lenAE_txt";
	this.lenAE_txt.lineHeight = 20;
	this.lenAE_txt.lineWidth = 36;
	this.lenAE_txt.setTransform(363.6,259.9);

	this.lenBD_txt = new cjs.Text("999", "18px 'Trebuchet MS'");
	this.lenBD_txt.name = "lenBD_txt";
	this.lenBD_txt.lineHeight = 20;
	this.lenBD_txt.lineWidth = 36;
	this.lenBD_txt.setTransform(279.4,285.8);

	this.lenAC_txt = new cjs.Text("999", "18px 'Trebuchet MS'");
	this.lenAC_txt.name = "lenAC_txt";
	this.lenAC_txt.lineHeight = 20;
	this.lenAC_txt.lineWidth = 36;
	this.lenAC_txt.setTransform(279.3,259.9,1.001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lenAC_txt},{t:this.lenBD_txt},{t:this.lenAE_txt},{t:this.lenEC_txt},{t:this.lenBE_txt},{t:this.lenED_txt},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3}]}).wait(2));


	var root = this;

    //var stage= viz.cjsStage;
    var btn_mcs = [root.rectangle_btn, root.rhombus_btn, root.square_btn];
    var states = ["rectangle", "rhombus", "square"];
    var currentState="para";
    var main;

    
    function downHandler(e){
        console.log(e.target);
        
        //viz.player.stopWaiting("task0");
        
        //showCap("panel1_start");
        
        var i;
        for (i=0; i<btn_mcs.length; i++){
            btn_mcs[i].gotoAndStop(0);
        }
        
        console.log("this.state " + this.state);
            this.gotoAndStop(2);
            this.selected = true;
            root.currentState = this.state;
            main.setShapes();
    } 

    function rolloverHandler(e){
       document.body.style.cursor = 'pointer';
    }
    function rolloutHandler(e){
        document.body.style.cursor = 'default';
    }
    function makeButton(mc){
        mc.mouseEnabled= true;
        mc.mouseChildren = false;
        mc.gotoAndStop(0);
        
        mc.on("mousedown", downHandler);
        mc.on("rollover", rolloverHandler);
        mc.on("rollout", rolloutHandler);
    }

    
    function reset(){
        //root.table_mc.gotoAndStop(currentState);
        root.currentState = "para";
        
        var i;
        for (i=0; i<btn_mcs.length; i++){
            btn_mcs[i].selected =false;
            btn_mcs[i].gotoAndStop(0);
        }
        //btn_mcs[0].selected = true;
        //btn_mcs[0].gotoAndStop(2);
        main.reset();
        //capShowing  = null;
        stage.update();
    }
    function initViz(){
        root.currentState = currentState;
        var toBeDragged = [root.canvas_mc.pointA_mc, root.canvas_mc.pointD_mc, root.canvas_mc.pointC_mc, root.canvas_mc.pointB_mc ];
        main = new Main(lib, root, toBeDragged, root.canvas_mc);
        main.setShapes();
        
        //put the E on top
        root.canvas_mc.pointE_mc.parent.setChildIndex(root.canvas_mc.pointE_mc, root.canvas_mc.pointE_mc.parent.getNumChildren()-1);
        
        var i;
        for (i=0; i<btn_mcs.length; i++){
            makeButton(btn_mcs[i]);
            btn_mcs[i].state = states[i];
        }
        
        
        reset();
       
    }

    initViz();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.2,12.4,582,302.2);


// stage content:
(lib._04_36_ex_2_7_moby = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;