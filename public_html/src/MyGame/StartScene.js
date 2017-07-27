


'use strict'  // Operate in Strict mode such that variables must be declared before used!
const SceneState = {
    'StartGame' : 1,
    'AboutUs'   : 2
}



function StartScene() {

    
    this.mCamera = null
    this.mMsg = null
    //this.mMsg1 = null
    this.mSceneState = SceneState.StartGame
    
    this.mMsg1 = null
    this.mMsg2 = null

    
}
gEngine.Core.inheritPrototype(StartScene, Scene)

StartScene.prototype.initialize = function () {
    // gEngine.DefaultResources.setGlobalAmbientColor([1, 1, 1, 1])
    // gEngine.ResourceMap.store('Save', [0,0,0,0])
    // Step A: set up the cameras
    this.mCamera = new Camera(
        vec2.fromValues(50, 50), // position of the camera
        100,                        // width of camera
        [0, 0, 1000, 500],         // viewport (orgX, orgY, width, height)
        2
    )
    this.mCamera.setBackgroundColor([1, 1, 1, 1])

    this.mMsg = new FontRenderable('FURIOUS   STRIKE ')
    this.mMsg.getXform().setPosition(26, 48)
    this.mMsg.setTextHeight(5)
     
    this.mMsg1 = new FontRenderable('Start Game ')
    this.mMsg1.getXform().setPosition(26, 40)
    this.mMsg1.setTextHeight(4)

    this.mMsg2 = new FontRenderable('About us ')
    this.mMsg2.getXform().setPosition(26, 30)
    this.mMsg2.setTextHeight(2)

  
    
    
}

StartScene.prototype.draw = function () {
    // Step A: clear the canvas
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1.0]) // clear to light gray
    
    this.mCamera.setupViewProjection()
    
    
    
  
    this.mMsg.draw(this.mCamera)
    
    /* this.mMsg1 = new FontRenderable('Press <Space Bar> to begin')
    this.mMsg1.getXform().setPosition(14, 30)
    this.mMsg1.setTextHeight(5) */

    this.mMsg1.draw(this.mCamera)
    this.mMsg2.draw(this.mCamera)
    
   
    
    
    
    
    

  
  
   
}
StartScene.prototype.update = function () {
    
    // select which character to work with
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Space))
        gEngine.GameLoop.stop()
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Up)){
        if(this.mSceneState === SceneState.StartGame){
            //this.mMsg1.getXform().setPosition(26, 40)
            this.mMsg1.setTextHeight(2)
            //this.mMsg2.getXform().setPosition(26, 30)
            this.mMsg2.setTextHeight(4)
            this.mSceneState = SceneState.AboutUs
        }else if(this.mSceneState === SceneState.AboutUs){
             
            this.mMsg1.setTextHeight(4)
            
            this.mMsg2.setTextHeight(2)
            this.mSceneState = SceneState.StartGame
        }
    }
    

    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Down)){
        if(this.mSceneState === SceneState.StartGame){
            //this.mMsg1.getXform().setPosition(26, 40)
            this.mMsg1.setTextHeight(2)
            //this.mMsg2.getXform().setPosition(26, 30)
            this.mMsg2.setTextHeight(4)
            this.mSceneState = SceneState.AboutUs
        }else if(this.mSceneState === SceneState.AboutUs){
             
            this.mMsg1.setTextHeight(4)
            
            this.mMsg2.setTextHeight(2)
            this.mSceneState = SceneState.StartGame
        }
    }
    
    
    
}

StartScene.prototype.loadScene = function () {
   
}

StartScene.prototype.unloadScene = function() {
    
    let next = null
    if(this.mSceneState === SceneState.StartGame)
        next = new RuleScene()
    else
        next = new AboutScene()
    gEngine.Core.startScene(next)
}