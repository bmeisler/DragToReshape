/*global Main, DraggableItem, BasicDraw */
var AM = AM||{};
AM.customVizSetup = AM.customVizSetup || {};
(function(){


function Panel1(viz){
    var root = viz.exportRoot;

    var stage= viz.cjsStage;
    var btn_mcs = [root.rectangle_btn, root.rhombus_btn, root.square_btn];
    var states = ["rectangle", "rhombus", "square"];
    var currentState="para";
    var main;

    
    function downHandler(e){
        console.log(e.target);
        
        viz.player.stopWaiting("task0");
        
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
        main = new Main(viz.lib, root, viz, toBeDragged, root.canvas_mc);
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


  var frameActions = {};

  viz.onPlay = function(){
    viz.defaultOnPlay();
    viz.getPlayer().beginWaiting("waiting...", "task0");

  };

  viz.onReset = function(){
    viz.defaultOnReset();
    reset();
  };
  initViz();

  return frameActions;
}


  function setupSymbolActions(){
    var frameActions = {};

    return frameActions;
  }

  function panelWrapper(func, libName){
    return function(viz){
      var symbolActions = setupSymbolActions();
      var symbolName;
      for(symbolName in symbolActions){if(symbolActions.hasOwnProperty(symbolName)){
        viz.lib[symbolName].prototype.frameActions = symbolActions[symbolName];
      }}
      viz.lib[libName].prototype.frameActions = func(viz);
    };
  }

    AM.customVizSetup['B3F4D5E0-8526-791C-71EA-4288C2C6BF99'] = panelWrapper(Panel1, 'Panel1');


}());
