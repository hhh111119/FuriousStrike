
'use strict'  // Operate in Strict mode such that variables must be declared before used!




function EndScene(result) {

    
    this.mCamera = null
    this.mMsg = null
    this.mResult = result

    
}
gEngine.Core.inheritPrototype(EndScene, Scene)

EndScene.prototype.initialize = function () {
    // gEngine.DefaultResources.setGlobalAmbientColor([1, 1, 1, 1])
    // gEngine.ResourceMap.store('Save', [0,0,0,0])
    // Step A: set up the cameras
    this.mCamera = new Camera(
        vec2.fromValues(50, 50), // position of the camera
        100,                        // width of camera
        [0, 0, 1000, 500],         // viewport (orgX, orgY, width, height)
        2
    )
    this.mCamera.setBackgroundColor([0.9, 0.9, 0.9, 1])

    this.mMsg = new FontRenderable(this.mResult)

    this.mMsg.getXform().setPosition(26, 68)
    this.mMsg.setTextHeight(5)
    this.mMsg.draw(this.mCamera)
    
    
  
    
    
}

EndScene.prototype.draw = function () {
    // Step A: clear the canvas
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1.0]) // clear to light gray
    
    this.mCamera.setupViewProjection()
    
    
    
  
    this.mMsg.draw(this.mCamera)
    
    
    
    
   
    
    
    
    
    

  
  
   
}
EndScene.prototype.update = function () {
    
    // select which character to work with
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Space))
        gEngine.GameLoop.stop()
    
    
    
    
}

EndScene.prototype.loadScene = function () {
   
}

EndScene.prototype.unloadScene = function() {
    
    
   
    let next = new StartScene()
    gEngine.Core.startScene(next)
}