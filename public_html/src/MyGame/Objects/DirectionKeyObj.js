'use strict'  // Operate in Strict mode such that variables must be declared before used!


function DirectionKeyObj() {

}
gEngine.Core.inheritPrototype(DirectionKeyObj, GameObject)

DirectionKeyObj.prototype.keyControl = function () {
    var xform = this.getXform()
    let rigidbody = this.getRigidBody()
    let Acc = this.mAcc
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.I)) {
        // xform.incYPosBy(kWASDDelta);
        rigidbody.setYAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.I)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.K)) {
        rigidbody.setYAcceleration(-Acc)
    } 
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.K)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.J)) {
        rigidbody.setXAcceleration(-Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.J)){
        rigidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.L)) {
        rigidbody.setXAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.L)){
        rigidbody.setXAcceleration(0)
    }
    
    rigidbody.mAngularVelocity = rigidbody.mAngularVelocity * this.mRotFric
    rigidbody.mVelocity[0] = rigidbody.mVelocity[0] * this.mMoveFric
    rigidbody.mVelocity[1] = rigidbody.mVelocity[1] * this.mMoveFric
    //vec2.scale(rigidbody.mVelocity,0.1,0.1)
}

DirectionKeyObj.prototype.inverseKeyControl = function () {
    var xform = this.getXform()
    let rigidbody = this.getRigidBody()
    let Acc = -this.mAcc
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.I)) {
        // xform.incYPosBy(kWASDDelta);
        rigidbody.setYAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.I)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.K)) {
        rigidbody.setYAcceleration(-Acc)
    } 
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.K)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.J)) {
        rigidbody.setXAcceleration(-Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.J)){
        rigidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.L)) {
        rigidbody.setXAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.L)){
        rigidbody.setXAcceleration(0)
    }
    
    rigidbody.mAngularVelocity = rigidbody.mAngularVelocity * this.mRotFric
    rigidbody.mVelocity[0] = rigidbody.mVelocity[0] * this.mMoveFric
    rigidbody.mVelocity[1] = rigidbody.mVelocity[1] * this.mMoveFric
    //vec2.scale(rigidbody.mVelocity,0.1,0.1)
}