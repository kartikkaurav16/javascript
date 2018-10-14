/**
 * Created by kkaurav on 8/15/2018.
 */

// module pattern
module.exports = {
    closure: closure,
    createPerson: createPerson
    //myAccessors: myAccessors
}

function closure(){
    console.log('reading closure')
}


function createPerson(){
    let firstName = "kartik";
    let lastName =  "kaurav"
    let personObj = {
        getFirstName: function(){
            return firstName;
        },
        getLastName: function(){
            return LastName
        },
        setLastName: function(name){
           lastName = name;
        },setFirstName: function(name){
            firstName = name;
        },

    }
    return personObj
}
let newPerson = createPerson();
console.log(newPerson.getFirstName());
console.log(newPerson.setFirstName('sagnik'));
console.log(newPerson.getFirstName())





//myAccessors = (function(){
//    let data = 'intresting Data'
//
//    let getData = function(){
//       console.log(data);
//    }
//    let setData = function(val){
//         data = val
//    }
//
//    let dataObj = {getData: getData, setData: setData}
//
//    console.log("data return OBJ : " + JSON.stringify({getData: getData, setData: setData}))
//    return {getData: getData, setData: setData}
//
//})();
//
//
//myAccessors.getData();
//myAccessors.setData('modifying data');
//myAccessors.getData();
