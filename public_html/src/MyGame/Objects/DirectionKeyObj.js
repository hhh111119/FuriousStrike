'use strict'  // Operate in Strict mode such that variables must be declared before used!


function DirectionKeyObj() {

}
gEngine.Core.inheritPrototype(DirectionKeyObj, GameObject)

DirectionKeyObj.prototype.keyControl = function () {
    var xform = this.getXform()
    let rigidbody = this.getRigidBody()
    let Acc = this.mAcc
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Up)) {
        // xform.incYPosBy(kWASDDelta);
        rigidbody.setYAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.Up)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Down)) {
        rigidbody.setYAcceleration(-Acc)
    } 
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.Down)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Left)) {
        rigidbody.setXAcceleration(-Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.Left)){
        rigidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Right)) {
        rigidbody.setXAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.Right)){
        rigidbody.setXAcceleration(0)
    }
    
    rigidbody.mAngularVelocity = rigidbody.mAngularVelocity * this.mRotFric
    rigidbody.mVelocity[0] = rigidbody.mVelocity[0] * this.mMoveFric
    rigidbody.mVelocity[1] = rigidbody.mVelocity[1] * this.mMoveFric
     //vec2.scale(rigidbody.mVelocity,0.1,0.1)
}