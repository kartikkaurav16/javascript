/**
 * Created by kkaurav on 8/27/2018.
 */
module.exports={
    ConstFunc : ConstFunc
};

function ConstFunc (name, age,  address){
    let hours = 40;
   this.name = name;
        this.age = age,
    this.address = address
    this.salary = function(sal){
        return sal*hours*4;
    };
    this.setName = function (name){
        this.name = name
    };
    this.getHours = function(){
        return hours;
    };
    this.setHours = function (hours){
        this.hours = hours
    };
};


let employee = new ConstFunc("Kartik Kaurav","29","135 Rio Robles")
let newEmployee = new ConstFunc("Rakesh Bob","26","135 Rio Robles")
let returnObjKeyArr = function returnObjKeyArr (employee){
    return Object.keys(employee)
};


 let constObjKeynewEmp = returnObjKeyArr(newEmployee);
let contObjKeyemp = returnObjKeyArr(employee);


//console.log(contObjKeyemp[0] + ": " + employee.name +  "\n " + contObjKeyemp[1] + ": " +employee.age + "\n" +
//    contObjKeyemp[ 2] + ": " + employee.salary(40) + "$"+ "\n" +contObjKeyemp[3] + ": " +  employee.address  );
//
//console.log(constObjKeynewEmp[0] + ": " + newEmployee.name +  "\n " + constObjKeynewEmp[1] + ": " +newEmployee.age + "\n" +
//    constObjKeynewEmp[ 2] + ": " + newEmployee.salary(65) + "$"+ " \n" +constObjKeynewEmp[3] + ": " +  newEmployee.address  );

for (let objProp in newEmployee){
    if( typeof newEmployee[objProp] == 'function' ) {
        console.log(objProp +": " + newEmployee[objProp](65))
    }else console.log(objProp +": " + newEmployee[objProp])
}


let ciscoEmployee = new ConstFunc(20, "135 East rio Robles")

 console.log("cisco emp name : " + ciscoEmployee.name);
ciscoEmployee.setName("Kartik Kumar Kaurav");

console.log("cisco emp name after set  : " + ciscoEmployee.name);
ciscoEmployee.setHours(50);
console.log("cisco emp name  : " + ciscoEmployee.name + "\n " + "number of Hours " +   ciscoEmployee.getHours() + " sal " + ciscoEmployee.salary(50) );



// function returning function

function returnFunc (name){
     return   function runFunc (){
         console.log("accessed run func :) " + name)
     }
}

let value = returnFunc("kartik");

value();








