/* File: WASD_Obj.js
 *
 */

/*jslint node: true, vars: true */
/*global gEngine: false, GameObject: false, SpriteRenderable: false */
/* find out more about jslint: http://www.jslint.com/help.html */

'use strict'  // Operate in Strict mode such that variables must be declared before used!
var kWASDDelta = 0.3

function WASDObj() {
}
gEngine.Core.inheritPrototype(WASDObj, GameObject)

WASDObj.prototype.keyControl = function () {
    var xform = this.getXform()
    let rgidbody = this.getRigidBody()
    let Acc = 10
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.W)) {
        // xform.incYPosBy(kWASDDelta);
        rgidbody.setYAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.W)){
        rgidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.S)) {
        rgidbody.setYAcceleration(-Acc)
    } 
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.S)){
        rgidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.A)) {
        rgidbody.setXAcceleration(-Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.A)){
        rgidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.D)) {
        rgidbody.setXAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.D)){
        rgidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Z)) {
        xform.incRotationByDegree(1)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.X)) {
        xform.incRotationByDegree(-1)
    }
}