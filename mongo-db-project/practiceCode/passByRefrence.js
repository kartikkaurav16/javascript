/**
 * Created by kkaurav on 8/13/2018.
 */
// java screipt its always pass by refrence
module.exports = {
    change: change,
    car:car
}

function change(){
    return name;
}

var name = 'max'
 console.log("name "+ name)

var secondName = name;
console.log("second Name "+secondName)

var name = 'cris'
console.log("second Name "+secondName)

let person = {
    name: 'max',
    hobbies: ['sports', 'humor comics']
    }


let secondPerson = Object.assign({},person);
person.name = 'chris'
let personHobbies = person.hobbies.slice();

console.log("person : " + JSON.stringify("name: "+ person.name + " hobbies are "+ personHobbies ));

person.hobbies.push('comic movies');
person.hobbies.push('horror movies');

console.log("person Hobbie after sclice and push:  " + personHobbies );
console.log("second person: " + secondPerson.name + "hobies are : " + personHobbies);
console.log("when i jus do person.hobbies  " +  person.hobbies)

 function car (name, model){
    this.name= name;
    this.model = model
}

const maruti = new car("maruti", 800);












