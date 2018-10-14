/**
 * Created by kkaurav on 8/16/2018.
 */

module.exports= {
    doProcess : doProcess,
    doLater: doLater,
    productOfThree: productOfThree
};


function doProcess(a,b, doLater){
    let c = a +b;
    doLater(c)
    console.log("callback Do process")
}

function doLater(c){
   console.log("callback execution "+ c)
};


function productOfThree (a,b,cb){
    let e = cb(100,50, function(value1, value2){
        console.log("exe first multiplyagain and will return 2*3 " + (value1*value2))
        return value1*value2;
    })
    console.log("product from cb: " + e)
    let finalProduct = a*b*e
    console.log(" product of all 5000*6*100*5 : "+ finalProduct)
}


productOfThree(10,20, function(d,c, multiplyAgain){
    let f = multiplyAgain(2,3)
    let product = d*c*f;
    //5000 after 1 sec
    console.log("product of all 5000*6 after 1 sec :" + product )
    return product
}
);

function personNameUpdate(firstName, lastName, cb){
    var newAge = cb(1)

    console.log("already got my age wht are we waiting: "+ cb(1))
    console.log("name: " + firstName + lastName + " age "+ cb(1))
};

personNameUpdate("kartik", "kaurav", function(age){
    let newAge;
    if (age < 29){
        for (newAge = 0; age<35; newAge++){
            //console.log("incrementing newAge: "+ newAge)
            age++
        }
        //console.log("newAge"+ newAge)
        return newAge = age;
    }else if(age == 29){
       // console.log("age"+ age)
        newAge = age++
       // console.log("newAge"+ newAge)
        return newAge;
    }else{return newAge = 50;}
});

//url: https://eb-api-prod.cisco.com/decision/swc?ccoUserId=james.bliss&mdfLeafNodeId=282600534
//making api calls with call back













