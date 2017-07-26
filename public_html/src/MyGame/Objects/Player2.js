function Player2(spriteTexture){
    this.mPlayer = new SpriteRenderable(spriteTexture)
    this.mPlayer.setColor([1, 0, 1, 0])
    this.mPlayer.getXform().setPosition(30, 20)
    this.mPlayer.getXform().setSize(8, 8)
    GameObject.call(this, this.mPlayer)

    var r = new RigidRectangle(this.getXform(), 8, 8)
    this.setRigidBody(r)
    this.toggleDrawRenderable()
}

gEngine.Core.inheritPrototype(Player2,WASDObj)

Player2.prototype.update = function () {
    GameObject.prototype.update.call(this)
}