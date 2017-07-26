'use strict'
/*global gEngine*/ 
function StartGame(){
    //this.kMinionSprite = 'assets/minion_sprite.png'
    //this.kPlatformTexture = 'assets/platform.png'
    //this.kWallTexture = 'assets/wall.png'
    this.kPlayer1Texture = 'assets/target.png'
    this.kPlayer2Texture = 'assets/favicon.png'

    this.mCamera = null
    this.mGamePlayers = null
    this.mCollisionInfos = []

    this.mPlayer1 = null
    this.mPlayer2 = null

    this.mBoundline = null

    this.mResult = null

}

gEngine.Core.inheritPrototype(StartGame, Scene)

StartGame.prototype.loadScene = function () {
    gEngine.Textures.loadTexture(this.kPlayer1Texture)
    gEngine.Textures.loadTexture(this.kPlayer2Texture)
  
}

StartGame.prototype.unloadScene = function () {
    gEngine.Textures.unloadTexture(this.kPlayer1Texture)
    gEngine.Textures.unloadTexture(this.kPlayer2Texture)
    let next = new EndScene(this.mResult)
    gEngine.Core.startScene(next)
   
}

StartGame.prototype.initialize = function(){
    this.mCamera = new Camera(
        vec2.fromValues(0, 0), // position of the camera
        100,                     // width of camera
        [0, 0, 800, 600]         // viewport (orgX, orgY, width, height)
    )

    this.mCamera.setBackgroundColor([0, 0.5, 0.5, 1])
    this.mPlayer1 = new Player1(this.kPlayer1Texture)
    this.mPlayer2 = new Player2(this.kPlayer2Texture)
    this.mGamePlayers = new GameObjectSet()
    this.mGamePlayers.addToSet(this.mPlayer1)
    this.mGamePlayers.addToSet(this.mPlayer2)

    this.mGameArea = new Renderable()
    this.mGameArea.setColor([0,1,1,1])
    let xf = this.mGameArea.getXform()
    xf.setPosition(0,0)
    xf.setSize(70,70)
}

StartGame.prototype.draw = function(){
    gEngine.Core.clearCanvas([1, 1, 1, 1.0]) // clear to light gray
   
    this.mCamera.setupViewProjection()
    this.mGameArea.draw(this.mCamera)
    this.mGamePlayers.draw(this.mCamera)
   
}

StartGame.prototype.update = function(){
    this.mPlayer1.keyControl()
    this.mPlayer2.keyControl()
    this.mGamePlayers.update(this.mCamera)
    gEngine.Physics.processCollision(this.mGamePlayers, this.mCollisionInfos)
    let pos1 = this.mPlayer1.getXform().getPosition()
    let pos2 = this.mPlayer2.getXform().getPosition()
    if(pos1[0]>35 || pos1[0]<-35){
        this.mResult = 'player2 wins'
      
    }else if(pos2[0]>35 || pos2[0]<-35){
        this.mResult = 'player1 wins'
       
       
    } else if(pos1[1]>35 || pos1[1]<-35){
        this.mResult = 'player2 wins'
        
    } else if(pos2[1]>35 || pos2[1]<-35){
        this.mResult = 'player1 winds'
    }

    if(this.mResult !== null)
        gEngine.GameLoop.stop()
}
