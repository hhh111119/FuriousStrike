'use strict'  // Operate in Strict mode such that variables must be declared before used!


function DirectionKeyObj() {

}
gEngine.Core.inheritPrototype(DirectionKeyObj, GameObject)

DirectionKeyObj.prototype.keyControl = function () {
    var xform = this.getXform()
    let rgidbody = this.getRigidBody()
    let Acc = 35
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Up)) {
        // xform.incYPosBy(kWASDDelta);
        rgidbody.setYAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.Up)){
        rgidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Down)) {
        rgidbody.setYAcceleration(-Acc)
    } 
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.Down)){
        rgidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Left)) {
        rgidbody.setXAcceleration(-Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.Left)){
        rgidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Right)) {
        rgidbody.setXAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.Right)){
        rgidbody.setXAcceleration(0)
    }
 
}