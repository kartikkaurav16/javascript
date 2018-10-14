/**
 * Created by kkaurav on 8/16/2018.
 */

//immedietly invoked function



var iife = (function canInvokedItself(a,b){
   console.log("immidietly invoked function sum: " + (a+b))
})(10,20);

module.exports ={
    iife: iife
}