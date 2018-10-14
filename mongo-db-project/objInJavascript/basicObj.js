/**
 * Created by kkaurav on 8/22/2018.
 */

module.exports ={
    BasicObj : BasicObj
}


function BasicObj(member){
    let id = 'BasicObj'
this.member = member;
this.name = function(){
    return id;
};
}

BasicObj.prototype.address = function(address){
    this.address = address;
    return address;
}



let basicObj = new BasicObj('member');
console.log(basicObj.member);
console.log("--> "+basicObj.id);
console.log("--> "+basicObj.name());
//console.log("closure => " +  basicObj.name());

basicObj.address('135 rio Robles');

console.log(basicObj.address)

function modifyObjProp(obj){
    let modifiedObjProp = obj.member;
    modifiedObjProp = 'newMember'
    return modifiedObjProp;
}
console.log("--> "+modifyObjProp(basicObj));
