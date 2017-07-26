'use strict'  // Operate in Strict mode such that variables must be declared before used!




function AboutScene() {

    
    this.mCamera = null
    this.mMsg = null
   
    
}
gEngine.Core.inheritPrototype(AboutScene, Scene)

AboutScene.prototype.initialize = function () {
    
    this.mCamera = new Camera(
        vec2.fromValues(50, 50), // position of the camera
        100,                        // width of camera
        [0, 0, 1000, 500],         // viewport (orgX, orgY, width, height)
        2
    )
    this.mCamera.setBackgroundColor([1, 1, 1, 1])

    this.mMsg = new FontRenderable('To Do ..... ')
    this.mMsg.getXform().setPosition(26, 48)
    this.mMsg.setTextHeight(5)
     
   
  
    
    
}

AboutScene.prototype.draw = function () {
    // Step A: clear the canvas
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1.0]) // clear to light gray
    
    this.mCamera.setupViewProjection()
    
    
    
  
    this.mMsg.draw(this.mCamera)
    
    
    
   
    
}
AboutScene.prototype.update = function () {
    
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Space))
        gEngine.GameLoop.stop()
    
    
}

AboutScene.prototype.loadScene = function () {
   
}

AboutScene.prototype.unloadScene = function() {
    
    
   
    let next = new StartScene()
    gEngine.Core.startScene(next)
}