/* File: WASD_Obj.js
 *
 */

/*jslint node: true, vars: true */
/*global gEngine: false, GameObject: false, SpriteRenderable: false */
/* find out more about jslint: http://www.jslint.com/help.html */

'use strict'  // Operate in Strict mode such that variables must be declared before used!


function WASDObj() {
}
gEngine.Core.inheritPrototype(WASDObj, GameObject)

WASDObj.prototype.keyControl = function () {
    var xform = this.getXform()
    let rigidbody = this.getRigidBody()
    let Acc = this.mAcc
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.W)) {
        // xform.incYPosBy(kWASDDelta);
        rigidbody.setYAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.W)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.S)) {
        rigidbody.setYAcceleration(-Acc)
    } 
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.S)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.A)) {
        rigidbody.setXAcceleration(-Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.A)){
        rigidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.D)) {
        rigidbody.setXAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.D)){
        rigidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Z)) {
        xform.incRotationByDegree(1)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.X)) {
        xform.incRotationByDegree(-1)
    }
    rigidbody.mAngularVelocity = rigidbody.mAngularVelocity * this.mRotFric
    //rigidbody.mVelocity = rigidbody.mVelocity * 0.1
    //vec2.scale(rigidbody.mVelocity,0.999,0.999)
    rigidbody.mVelocity[0] = rigidbody.mVelocity[0] * this.mMoveFric
    rigidbody.mVelocity[1] = rigidbody.mVelocity[1] * this.mMoveFric

}

WASDObj.prototype.inverseKeyControl = function () {
    var xform = this.getXform()
    let rigidbody = this.getRigidBody()
    let Acc = -this.mAcc
    
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.W)) {
        // xform.incYPosBy(kWASDDelta);
        rigidbody.setYAcceleration(Acc)
        //alert(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.W)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.S)) {
        rigidbody.setYAcceleration(-Acc)
    } 
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.S)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.A)) {
        rigidbody.setXAcceleration(-Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.A)){
        rigidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.D)) {
        rigidbody.setXAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.D)){
        rigidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Z)) {
        xform.incRotationByDegree(1)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.X)) {
        xform.incRotationByDegree(-1)
    }
    rigidbody.mAngularVelocity = rigidbody.mAngularVelocity * this.mRotFric
    //rigidbody.mVelocity = rigidbody.mVelocity * 0.1
    //vec2.scale(rigidbody.mVelocity,0.999,0.999)
    rigidbody.mVelocity[0] = rigidbody.mVelocity[0] * this.mMoveFric
    rigidbody.mVelocity[1] = rigidbody.mVelocity[1] * this.mMoveFric

}