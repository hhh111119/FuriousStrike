'use strict'
function Obstacle(pos,size,velocity ){
    this.mBound = new Renderable()
    this.mBound.setColor([1,1,1,1])
    this.mBound.getXform().setPosition(pos[0],pos[1])
    this.mBound.getXform().setSize(size[0],size[1])

    GameObject.call(this, this.mBound)
    let r =  new RigidRectangle(this.getXform(), size[0], size[1])
    r.autoSetMass()
    r.setVelocity(velocity[0],velocity[1])
    this.setRigidBody(r)
}
gEngine.Core.inheritPrototype(Obstacle,GameObject)