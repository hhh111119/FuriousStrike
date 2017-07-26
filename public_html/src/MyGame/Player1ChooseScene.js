'use strict'  // Operate in Strict mode such that variables must be declared before used!

const GameCharacter = {
    'BigMan' : 3,
    'FlexMan' : 4,
    'NormalMan' : 5
}



function Player1ChooseScene() {

    
    this.mCamera = null
    this.mPlayer1GameCharacter = GameCharacter.BigMan

    this.mCharacter1 = null

    
    
}
gEngine.Core.inheritPrototype(Player1ChooseScene, Scene)

Player1ChooseScene.prototype.initialize = function () {
    
    this.mCamera = new Camera(
        vec2.fromValues(50, 50), // position of the camera
        100,                        // width of camera
        [0, 0, 1000, 500],         // viewport (orgX, orgY, width, height)
        2
    )
    this.mCamera.setBackgroundColor([1, 1, 1, 1])
    this.mCharacter1 = new  CharacterInfo()
    this.mCharacter1.setName('Big Man',3,[5,70])
    this.mCharacter1.setColor([1,0,0,1],[3,3],[6,65])
    this.mCharacter1.setWeight('100kg',3,[5,60])
    this.mCharacter1.setSkill('dd',3,[5,55])
    this.mCharacter1.setFeature('power',3,[5,50])
  
     
   
  
    
    
}

Player1ChooseScene.prototype.draw = function () {
    // Step A: clear the canvas
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1.0]) // clear to light gray
    
    this.mCamera.setupViewProjection()
    
    
    
  
    this.mCharacter1.draw(this.mCamera)
    
    
    
   
    
}
Player1ChooseScene.prototype.update = function () {
    
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Space))
        gEngine.GameLoop.stop()
    
    
}

Player1ChooseScene.prototype.loadScene = function () {
   
}

Player1ChooseScene.prototype.unloadScene = function() {
    
    
   
    let next = new StartScene()
    gEngine.Core.startScene(next)
}