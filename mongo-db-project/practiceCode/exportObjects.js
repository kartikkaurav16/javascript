/**
 * Created by kkaurav on 8/13/2018.
 */
let passObject = exports;

passObject.createNewObject = function(objName, objlastName) {
 return (function(objName, objlastName){
     this.objName = objName;
     this.objlastName;
 })()
};

passObject.calcualteArea = function(a , b){
    return a * b
}





