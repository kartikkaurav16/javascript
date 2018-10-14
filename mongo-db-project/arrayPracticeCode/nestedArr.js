let empArrOne = [];
let empArrTwo = [];
let empArrThree = [];

/* 
nested Array emps
*/ 
let employee = [empArrOne,empArrTwo,empArrThree]; 


empArrOne[0] = '_id'
empArrOne['name'] = 'Jhon';
empArrOne['sal'] = '5000';
empArrOne['age'] = '30';
empArrOne['address'] = {
    "street": "135 rio Robles",
    "city": "san Jose",
    "state": "CA",
    "apt": "161"
};
 
empArrTwo[0] = '_id'
empArrTwo['name'] = 'Doe';
empArrTwo['sal'] = '5999';
empArrTwo['age'] = '32';
empArrTwo['address'] = {
    "street": "Chatham",
    "city": "Richmond",
    "state": "VA",
    "apt": "162"
};

empArrThree[0] = '_id'
empArrThree['name'] = 'Sag';
empArrThree['sal'] = '7099';
empArrThree['age'] = '33';
empArrThree['address'] = {
    "street": "Ann Arbour",
    "city": "Detroit",
    "state": "MI",
    "apt": "170"
}; 

employee.forEach(function(data, elements){
console.log( "for element " + elements)
for(let objKey in data){
    console.log("key: " + objKey + " \n employee data: " + JSON.stringify(data[objKey]))
}
})





module.exports = {
    employee: employee
}; 


