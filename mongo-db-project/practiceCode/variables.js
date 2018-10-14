/**
 * Created by kkaurav on 8/11/2018.
 */
//'user strict'
module.exports= {
    varVariables: varVariables,
letVariables: letVariables
}
//console.log("-- variables fundamentals --")
//var
var i =999;
function varVariables (){
    var i;
    for ( i = 0 ; i<10; i++ ){
    };
    console.log("inside var function letVariable " + i);
}


//console.log("outside var function letVariable  "+ i)


//var let
function letVariables (){
    let j;
    for ( j = 0 ; j<10; j++ ){
    };
    console.log("inside let function letVariable " + j);
}
let j =8888;
//console.log("outside let function letVariable  "+ j)




