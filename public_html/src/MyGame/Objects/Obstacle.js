'use strict'
function Obstacle(pos,size,velocity ){
    this.mBound = new Renderable()
    this.mBound.setColor([1,1,1,1])
    this.mBound.getXform().setPosition(pos[0],pos[1])
    this.mBound.getXform().setSize(size[0],size[1])

    GameObject.call(this, this.mBound)
    let random = (min, max) => {
        return Math.random() * (max - min) + min
    }
    let r =  new RigidRectangle(this.getXform(), size[0], size[1])
    r.autoSetMass()
    r.setVelocity(velocity[0],velocity[1])
    r.setAngularVelocity(random(1,3))
    r.setRestitution(0.6)
    this.setRigidBody(r)
    this.mRigidBody = r
}
gEngine.Core.inheritPrototype(Obstacle,GameObject)

Obstacle.prototype.obstacleUpdate = function(){
    let r = this.mRigidBody
    r.mAngularVelocity = r.mAngularVelocity * 0.98
}

Obstacle.prototype.update = function(){
    this.obstacleUpdate()
    this.mRigidBody.update()
    
}