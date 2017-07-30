//    Copyright 2017 XieJinChi ChenYiXiu
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
'use strict'
var gSkinAssets = {
    's1' : 'assets/target.png',
    's2' : 'assets/target.png',
    's3' : 'assets/target.png',
    's4' : 'assets/target.png',
    's5' : 'assets/target.png',
    's6' : 'assets/target.png',
    's7' : 'assets/target.png',
    's8' : 'assets/target.png',
    's9' : 'assets/target.png',
    's10' : 'assets/target.png',
    's11' : 'assets/target.png',
    's12' : 'assets/target.png',
    's13' : 'assets/target.png',
    's14' : 'assets/target.png',
    's15' : 'assets/target.png',
    's16' : 'assets/target.png',
    's17' : 'assets/target.png',
    's18' : 'assets/target.png',
    's19' : 'assets/target.png',
    's20' : 'assets/target.png',
    's21' : 'assets/target.png',
    's22' : 'assets/target.png',
    's23' : 'assets/target.png',
    's24' : 'assets/target.png',
    's25' : 'assets/target.png',
    's26' : 'assets/target.png',
    's27' : 'assets/target.png',
    's28' : 'assets/target.png',
    's29' : 'assets/target.png',
    's30' : 'assets/target.png'
}

/*for(var i in gSkinAssets){
    console.log(gSkinAssets[i])
}*/

function SkinObjects(){
    this.mSkinSets = []
    this.mMainCamera = null
    this.mMiniCamera = null
    this.mCurrentPos = 0

    this.mMainCamera = new Camera(
        vec2.fromValues(0, 0), // position of the camera
        1000,                     // width of camera
        [100, 0, 800, 240]         // viewport (orgX, orgY, width, height)
    )
    this.mMainCamera.setBackgroundColor([0.9, 0.9, 0.9, 1])


    this.mMiniCamera =  new Camera(
        vec2.fromValues(0, 0), // position of the camera
        90       ,              // width of camera
        [650, 300, 200, 200]         // viewport (orgX, orgY, width, height)
    )
    this.mMiniCamera.setBackgroundColor([0.9,0.9,0.9,1])
    //initialize 
    let i = 0
    const rowXPos = -450
    let calculateXOffset = (num) => {
        return (num % 10) * 100
    }
    for(let path in gSkinAssets){
        let assets = gSkinAssets[path]
        let skin = null
        //first row 0 - 9
        if(i<10){
            skin = new SpriteRenderable(assets)
            skin.setColor([1, 1, 1, 0])
            skin.getXform().setPosition(rowXPos + calculateXOffset(i), 100)
            skin.getXform().setSize(60,60)
        }
        //second row 10 - 19
        if(i>=10 && i<20){
            skin = new SpriteRenderable(assets)
            skin.setColor([1, 1, 1, 0])
            skin.getXform().setPosition(rowXPos + calculateXOffset(i), 0)
            skin.getXform().setSize(60,60)

        }
        //third row 20 - 29
        if(i>=20){
            skin = new SpriteRenderable(assets)
            skin.setColor([1, 1, 1, 0])
            skin.getXform().setPosition(rowXPos + calculateXOffset(i), -100)
            skin.getXform().setSize(60,60)
        }
        this.mSkinSets.push(skin)
        i++
    }
}

SkinObjects.prototype.getCurrentSkinName = function(){
    let i = 0
    for(let skin in gSkinAssets){
        if(this.mCurrentPos === i){
            return skin.toString()
        }
        i++
    }
}

SkinObjects.prototype.getCurrentSkinPath = function(){
    let i = 0
    for(let skin in gSkinAssets){
        if(this.mCurrentPos === i){
            return gSkinAssets[skin].toString()
        }
        i++
    }
}

SkinObjects.prototype.draw = function(){
    this.mMainCamera.setupViewProjection()
    for(let i = 0; i < 30; i++){
        this.mSkinSets[i].draw(this.mMainCamera)
    }
    let pos = this.mSkinSets[this.mCurrentPos].getXform().getPosition()

    this.mMiniCamera.setWCCenter(pos[0],pos[1])
    this.mMiniCamera.update()
    this.mMiniCamera.setupViewProjection()
    this.mSkinSets[this.mCurrentPos].draw(this.mMiniCamera)
}

SkinObjects.prototype.updateForPlayer1 = function(){
    this.mSkinSets[this.mCurrentPos].getXform().setSize(60,60)
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.W)){
        if(this.mCurrentPos<10){
            this.mCurrentPos += 20
        }else{
            this.mCurrentPos -= 10
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.A)){
        if((this.mCurrentPos % 10) === 0 ){
            this.mCurrentPos += 9
        }else{
            this.mCurrentPos -= 1
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.S)){
        if(this.mCurrentPos>19){
            this.mCurrentPos -= 20
        }else{
            this.mCurrentPos += 10
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.D)){
        if((this.mCurrentPos % 10)===9){
            this.mCurrentPos -= 9
        }else{
            this.mCurrentPos += 1
        }
    }
    this.mSkinSets[this.mCurrentPos].getXform().setSize(90,90)
}

