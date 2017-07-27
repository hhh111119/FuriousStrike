/*const GameCharacter = {
    'BigMan' : 3,
    'FlexMan' : 4,
    'NormalMan' : 5
}*/
function Player1(spriteTexture,character){
    this.mPlayer = new SpriteRenderable(spriteTexture)
    this.mPlayer.setColor([1, 1, 1, 0])
    this.mPlayer.getXform().setPosition(-30, -15)
    //this.mPlayer.getXform().setSize(8, 8)
    GameObject.call(this, this.mPlayer)
    this.mMoveFric = null
    this.mRotFric = null 
    this.mAcc = null

    var r = null
    // new RigidRectangle(this.getXform(), 8, 8)
   
    //this.toggleDrawRenderable()
  //  alert(character)
    if(character === GameCharacter.BigMan){
        this.mPlayer.getXform().setSize(10, 10)
        r =  new RigidRectangle(this.getXform(), 10, 10)
        r.setMass(3)
        this.mAcc = 18 
        this.mMoveFric = 0.999
        this.mRotFric = 0.97
    }else if(character === GameCharacter.FlexMan){
        this.mPlayer.getXform().setSize(5, 5)
        r =  new RigidRectangle(this.getXform(), 5, 5)
        r.setMass(0.5)
        this.mAcc = 75
        this.mMoveFric = 0.982
        this.mRotFric = 0.98
        r.setMass(1)
        this.mAcc = 35 
        this.mMoveFric = 0.991
        this.mRotFric = 0.991
    }else{
        this.mPlayer.getXform().setSize(8, 8)
        r =  new RigidRectangle(this.getXform(), 8, 8)
        r.setMass(1)
        this.mAcc = 35 
        this.mMoveFric = 0.991
        this.mRotFric = 0.991
    }
    this.setRigidBody(r)
    this.mGameCharacter = character
}

gEngine.Core.inheritPrototype(Player1,DirectionKeyObj)

Player1.prototype.update = function () {
    GameObject.prototype.update.call(this)
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Enter)){
        if(this.mGameCharacter === GameCharacter.BigMan){
            alert('big man skill')
        }else if(this.mGameCharacter === GameCharacter.FlexMan){
            alert('speed man skill')
        }else{
            alert('balance man skill')
        }
    }
}