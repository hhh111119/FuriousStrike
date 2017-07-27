let Skill = (function(){
    const bigManFrozenTime = 800
    const flexManFrozenTime = 800
    const normalManFrozenTime = 800

    const bigManLastTime = 320
    const flexManLastTime = 320
    const normalManLastTime = 320
    let bigManSkill = function(time,rigidBody){
        if(time>=bigManFrozenTime){
            
            rigidBody.setAngularVelocity(15)
            //rigidBody.setMass(0)
            return true
        }
        return false
    }
    let flexManSkill = function(time,rigidBody){
        if(time>=flexManFrozenTime){
           
            //alert('speedman')
            return true
        }
        return false
    }
    let normalManSkill = function(time,player){
        if(time>=normalManFrozenTime){
           
            // alert('normal')
            return true
        }
        return false
    }

    let relieveBigManSkill = function(time,rigidBody){
        if(time>=bigManLastTime){
            
            //alert('bigman')
            alert(2)
            rigidBody.setAngularVelocity(0)
            rigidBody.autoSetMass()
            rigidBody.setVelocity(0,0)
            return true
        }
        return false
    }
    let relieveFlexManSkill = function(time,rigidBody){
        if(time>=flexManLastTime){
           
            // alert('speedman')
            return true
        }
        return false
    }
    let relieveNormalManSkill = function(time,player){
        if(time>=normalManLastTime){
           
            // alert('normal')
            return true
        }
        return false
    }

    let getBigManFrozenTime = function(){
        return bigManFrozenTime
    }

    let getFlexManFrozenTime = function(){
        return flexManFrozenTime
    }

    let getNormalManFrozenTime = function(){
        return normalManFrozenTime
    }

    let publicApi = {
        'bigManSkill' : bigManSkill,
        'flexManSkill' : flexManSkill,
        'normalManSkill' : normalManSkill,
        'getBigManFrozenTime':getBigManFrozenTime,
        'getFlexManFrozenTime':getFlexManFrozenTime,
        'getNormalManFrozenTime':getNormalManFrozenTime,
        'relieveBigManSkill' :relieveBigManSkill,
        'relieveFlexManSkill' : relieveFlexManSkill,
        'relieveNormalManSkill' : relieveNormalManSkill
    }
    return publicApi
}())