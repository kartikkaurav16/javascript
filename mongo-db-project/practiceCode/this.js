/**
 * Created by kkaurav on 8/11/2018.
 */
module.exports = {
    createRoom: createRoom
} ;

this.table = 'window table';
//console.log(" this file "+ this.table);

function createRoom(name) {
    // always initialize all instance properties
    this.name = name;
}
createRoom.prototype.cleanTable = function(soap){
    console.log("clean" +  this.name +  " table with this "+ soap )
}

