/*const GameCharacter = {
    'BigMan' : 3,
    'FlexMan' : 4,
    'NormalMan' : 5
}*/
function Player1(spriteTexture,character){
    this.mPlayer = new SpriteRenderable(spriteTexture)
    this.mPlayer.setColor([1, 1, 1, 0])
    this.mPlayer.getXform().setPosition(-30, -20)
    //this.mPlayer.getXform().setSize(8, 8)
    GameObject.call(this, this.mPlayer)

    var r = null
    // new RigidRectangle(this.getXform(), 8, 8)
   
    //this.toggleDrawRenderable()
  //  alert(character)
    if(character === GameCharacter.BigMan){
        this.mPlayer.getXform().setSize(10, 10)
        r =  new RigidRectangle(this.getXform(), 10, 10)
        r.setMass(3)
    }else if(character === GameCharacter.FlexMan){
        this.mPlayer.getXform().setSize(5, 5)
        r =  new RigidRectangle(this.getXform(), 5, 5)
        r.setMass(0.5)
    }else{
        this.mPlayer.getXform().setSize(8, 8)
        r =  new RigidRectangle(this.getXform(), 8, 8)
        r.setMass(1)
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