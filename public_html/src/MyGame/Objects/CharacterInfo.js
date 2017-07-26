function CharacterInfo(){
    this.mName = null
    this.mColor = null
    this.mWeight = null
    this.mSkill = null
    this.mFeature = null
}

CharacterInfo.prototype.draw = function(camera){
    if(this.mName !== null)
        this.mName.draw(camera)
    if(this.mColor !== null)
        this.mColor.draw(camera)
    if(this.mWeight !== null)
        this.mWeight.draw(camera)
    if(this.mSkill !== null)
        this.mSkill.draw(camera)
    if(this.mFeature !== null)
        this.mFeature.draw(camera)
}

CharacterInfo.prototype.setName = function(name, size, pos){
    let str = 'Name: '
    str += name
    this.mName = new FontRenderable(str)
    this.mName.getXform().setPosition(pos[0], pos[1])
    this.mName.setTextHeight(size)
}

CharacterInfo.prototype.setSkill = function(skill, size, pos){
    let str = 'Skill: '
    str += skill
    this.mSkill = new FontRenderable(str)
    this.mSkill.getXform().setPosition(pos[0], pos[1])
    this.mSkill.setTextHeight(size)
}

CharacterInfo.prototype.setWeight = function(weight, size, pos){
    let str = 'Weight: '
    str += weight
    this.mWeight = new FontRenderable(str)
    this.mWeight.getXform().setPosition(pos[0], pos[1])
    this.mWeight.setTextHeight(size)
}

CharacterInfo.prototype.setFeature = function(feature, size, pos){
    let str = 'Feature: '
    str += feature
    this.mFeature = new FontRenderable(str)
    this.mFeature.getXform().setPosition(pos[0], pos[1])
    this.mFeature.setTextHeight(size)
}

CharacterInfo.prototype.setColor = function(color,size,pos){
    this.mColor = new Renderable()
    this.mColor.setColor(color)
    let xf = this.mColor.getXform()
    xf.setPosition(pos[0],pos[1])
    xf.setSize(size[0],size[1])
}