/**
 * Created by kkaurav on 6/5/2018.
 */
const express = require('express');
const app = express()
var Db = require('mongodb').Db;
MongoClient = require('mongodb').MongoClient;
let db = require('./model/db')





//var variables = require('./practiceCode/variables');
//var createRoom = require('./practiceCode/this');
//var add = require('./practiceCode/callFundamentals');
//var change = require('./practiceCode/passByRefrence');
//let passObject = require('./practiceCode/exportObjects');
//let Car = require('./objectOriented/constructorsInJavascript');
//let closure = require('./objectOriented/closure')
//let funcPractice= require('./functionsInJavaScript/basicsOfFunctions')
//let iife= require('./functionsInJavaScript/iife');
//let callbackFunc = require('./functionsInJavaScript/callbackFunc');
//let doProcess  = require('./functionsInJavaScript/nestedFunctions');
//let basicObj = require('./objInJavascript/basicObj');
//let basicArr = require('./objInJavascript/arrAsObj');
//let constFunc = require('./objInJavascript/constFunct');
//let constcar = require('./objInJavascript/playingObj');
//let constcar = require('./objInJavascript/objArray');
//let simpleArr = require('./arrayPracticeCode/simpleArr')
//let dyncamicArr = require('./arrayPracticeCode/dyncamicArr')
//let nestedArr =  require('./arrayPracticeCode/nestedArr')

//TODO: below is pending to practice

//let mediumPrototype =  require('./protoTypeInheritence/mediumPrototype')
//let inDepthProto =  require('./protoTypeInheritence/inDepthProto'); 
let jsMap = require('./functionsInJavaScript/jsMap')
//let inDepthProto =  require('./crypto/crypto'); 


//basicObj
//let basicObj2 = new basicObj.BasicObj('member2');
//console.log('basicObj2: ' + basicObj2.member);



//console.log("inside app.js -> nested function " + doProcess.additionofNum);
//doProcess.doProcessInsideFunc();

//doProcess.accessObj();
//callbackFunc.doProcess(10,3,callbackFunc.doLater);
//function expressions
//iife.iife;
//funcPractice.expressionfunc();
//funcPractice.expressionfuncadd(5,2)
//funcPractice.expressionfuncNargument(1,2,3,4)


//closure.closure()
//var passed = 3
//var addTo  = function(){
//    var inner = 2 ;
//    return passed + inner;
//}
//
//console.dir(addTo)
//
//
//
//
//
//let redCar = new Car.Car("red");
//console.log("car -> " + redCar.color)
//
//app.listen(3000);
//console.log('Example app listening on port 3000!');
//
//app.get('/', function(req, res){
//    res.send('hello world');
//});
//app.get('/fruits/:id', function (req,res,next) {
//    res.send( "fruits id "+ req.params.id)
//    next();
//});
////console.log(JSON.stringify(thisVariable))
//variables.varVariables();
//variables.letVariables();
//let jhon = new createRoom.createRoom("jhon");
//
//console.log("--> " + jhon.name)
//
//let createNewObject = passObject.createNewObject('kartik', 'kaurav')
//let calcualteArea = passObject.calcualteArea(5,6);
//console.log(calcualteArea)





//Todo
// how to get window table in global space in app.js file
//thisVariable.cleanTable.call(thisVariable.doe)




