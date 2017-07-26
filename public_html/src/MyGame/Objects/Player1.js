function Player1(spriteTexture){
    this.mPlayer = new SpriteRenderable(spriteTexture)
    this.mPlayer.setColor([1, 1, 1, 0])
    this.mPlayer.getXform().setPosition(-30, -20)
    this.mPlayer.getXform().setSize(10, 10)
    GameObject.call(this, this.mPlayer)

    var r = new RigidRectangle(this.getXform(), 10, 10)
    this.setRigidBody(r)
    this.toggleDrawRenderable()
}

gEngine.Core.inheritPrototype(Player1,DirectionKeyObj)

Player1.prototype.update = function () {
    GameObject.prototype.update.call(this)
}