/**
 * Created by kkaurav on 8/15/2018.
 */
"use strict"

let expressionfunc = function(){
    // function expression Or Annonomus functions
    console.log("excecuting function expression ")
};


let expressionfuncadd = function(a,b){
    // function expression Or Annonomus functions
    console.log("excecuting function expression add " + (a+b));
};
let expressionfuncNargument = function(){
    // function expression Or Annonomus functions
    let s = 0;
    for(let l=0; l<arguments.length; l++){
        s+=arguments[l];
    }
    console.log("sum of arguments in expression func with no arguments" + s);
    console.log("excecuting function expression with N arguments  " + (arguments.length));
};




module.exports = {
    expressionfunc: expressionfunc,
    expressionfuncadd:expressionfuncadd,
    expressionfuncNargument:expressionfuncNargument
}