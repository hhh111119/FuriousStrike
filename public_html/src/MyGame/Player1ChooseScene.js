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
    this.mCharacter2 = null
    this.mCharacter3 = null

    this.mMsg = null
    this.mMsg1 = null
    
    
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
    //character1
    this.mCharacter1 = new  CharacterInfo()
    this.mCharacter1.setName('Hulk',3,[5,70])
    this.mCharacter1.setColor([1,0,0,1],[4,4],[6,65])
    this.mCharacter1.setWeight('150kg',2,[5,60])
    this.mCharacter1.setSkill('BACK OFF',2,[5,55])
    this.mCharacter1.setSkillDetail('(rotate)',2,[5,53])
    this.mCharacter1.setFeature('power',2,[5,48])
    //character2
    this.mCharacter2 = new  CharacterInfo()
    this.mCharacter2.setName('Flash',2,[35,70])
    this.mCharacter2.setColor([0,0,0,1],[3,3],[36,65])
    this.mCharacter2.setWeight('70kg',2,[35,60])
    this.mCharacter2.setSkill('EVEN FASTER',2,[35,55])
    this.mCharacter2.setSkillDetail('(fastest speed)',2,[35,53])
    this.mCharacter2.setFeature('quick',2,[35,48])
    //character3 
    this.mCharacter3 = new  CharacterInfo()
    this.mCharacter3.setName('CaptainAmerica',2,[65,70])
    this.mCharacter3.setColor([0,0,0,1],[3,3],[66,65])
    this.mCharacter3.setWeight('85kg',2,[65,60])
    this.mCharacter3.setSkill('PUZZLE',2,[65,55])
    this.mCharacter3.setSkillDetail('(reverse other control)',2,[65,53])
    this.mCharacter3.setFeature('balance',2,[65,48])
    
    this.mMsg = new FontRenderable('Player1: Choosing')
    this.mMsg.getXform().setPosition(6, 40)
    this.mMsg.setTextHeight(5)
   
    this.mMsg1 = new FontRenderable('Player2: Waiting')
    this.mMsg1.getXform().setPosition(6, 30)
    this.mMsg1.setTextHeight(5)
    
    
}

Player1ChooseScene.prototype.draw = function () {
    // Step A: clear the canvas
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1.0]) // clear to light gray
    
    this.mCamera.setupViewProjection()
    
    
    
  
    this.mCharacter1.draw(this.mCamera)
    this.mCharacter2.draw(this.mCamera)
    this.mCharacter3.draw(this.mCamera)
    this.mMsg.draw(this.mCamera)
    this.mMsg1.draw(this.mCamera)
   
    
}
Player1ChooseScene.prototype.update = function () {
    
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Space))
        gEngine.GameLoop.stop()
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Right)){
        if(this.mPlayer1GameCharacter === GameCharacter.BigMan){
            this.mPlayer1GameCharacter = GameCharacter.FlexMan
            this.mCharacter1.setNameSize(2)
            this.mCharacter1.setColor([0,0,0,1],[3,3],[6,65])
            this.mCharacter2.setNameSize(3)
            this.mCharacter2.setColor([1,1,0,1],[4,4],[36,65])
        }else if(this.mPlayer1GameCharacter === GameCharacter.FlexMan){
            this.mPlayer1GameCharacter = GameCharacter.NormalMan
            this.mCharacter2.setNameSize(2)
            this.mCharacter2.setColor([0,0,0,1],[3,3],[36,65])
            this.mCharacter3.setNameSize(3)
            this.mCharacter3.setColor([1,0,1,1],[4,4],[66,65])
        }else if(this.mPlayer1GameCharacter === GameCharacter.NormalMan){
            this.mPlayer1GameCharacter = GameCharacter.BigMan
            this.mCharacter3.setNameSize(2)
            this.mCharacter3.setColor([0,0,0,1],[3,3],[66,65])
            this.mCharacter1.setNameSize(3)
            this.mCharacter1.setColor([1,0,0,1],[4,4],[6,65])
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Left)){
        if(this.mPlayer1GameCharacter === GameCharacter.BigMan){
            //this.mPlayer1GameCharacter = GameCharacter.FlexMan
            this.mPlayer1GameCharacter = GameCharacter.NormalMan
            this.mCharacter1.setNameSize(2)
            this.mCharacter1.setColor([0,0,0,1],[3,3],[6,65])
            // this.mCharacter2.setNameSize(3)
            // this.mCharacter2.setColor([1,1,0,1],[4,4],[36,65])
            this.mCharacter3.setNameSize(3)
            this.mCharacter3.setColor([1,0,1,1],[4,4],[66,65])
        }else if(this.mPlayer1GameCharacter === GameCharacter.FlexMan){
            // this.mPlayer1GameCharacter = GameCharacter.NormalMan
            this.mPlayer1GameCharacter = GameCharacter.BigMan
            this.mCharacter2.setNameSize(2)
            this.mCharacter2.setColor([0,0,0,1],[3,3],[36,65])
            this.mCharacter1.setNameSize(3)
            this.mCharacter1.setColor([1,0,0,1],[4,4],[6,65])
            // this.mCharacter3.setNameSize(3)
            //  this.mCharacter3.setColor([1,0,1,1],[4,4],[71,65])
        }else if(this.mPlayer1GameCharacter === GameCharacter.NormalMan){
            this.mPlayer1GameCharacter = GameCharacter.FlexMan
            this.mCharacter3.setNameSize(2)
            this.mCharacter3.setColor([0,0,0,1],[3,3],[66,65])
            // this.mCharacter1.setNameSize(3)
            //this.mCharacter1.setColor([1,0,0,1],[4,4],[6,65])
            this.mCharacter2.setNameSize(3)
            this.mCharacter2.setColor([1,1,0,1],[4,4],[36,65])
        }
    }
    
    
}

Player1ChooseScene.prototype.loadScene = function () {
   
}

Player1ChooseScene.prototype.unloadScene = function() {
    
    
    
    let next = new Player2ChooseScene(this.mPlayer1GameCharacter)
    gEngine.Core.startScene(next)
}