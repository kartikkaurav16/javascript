// let fs = require('fs')
// let output = fs.readFileSync('./data.txt','utf8')
// .trim()
// .split('\n')
// .map(line => line.split('\r'))

module.exports={

}

//map
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

//with foreach

officersIds = []; 

officers.forEach(function(officer, i){
   //  console.log(officer.id +" : " + i  ) 
    officersIds.push(officers.id)
})

//MAP RETURN AN Array 

let officersIdsArr = officers.map(function(officer){
        console.log("value > "+ officer)
    return officer.id
})

// console.log("officersIdsArr: " + JSON.stringify(officersIdsArr,null,2)); 
 
let IdsArr = officers.map(officer => officer.id)


//reduce

var pilots = [
    [
      '10',
     "willson Jon",
       14,
      2000.00
    ],
    [
      2,
      "willson Jon",
      30,
      5000.00
],
    [  2,
         "Nikita Will",
        16,
      4500.00],
    [      99,
        "Nikita Will",
       22,
        2500.00]
  ];

  
  forcepilot = {}
pilots.forEach(function(element){ 
console.log("for each element "+ element)
forcepilot[element[1]] = forcepilot[element[1]] || []
forcepilot[element[1]].push({
    name : element[1], 
    sal: element[3], 
    id: element[0], 
    years: element[2]
})
return forcepilot
})

console.log("for each Airforcepilot "+ JSON.stringify(forcepilot,null,2))



  let output = pilots.reduce((pilot, line) => {
  //below line will create only 2 array because it will over write the property of the name...!!    
  pilot[line[1]] =  pilot[line[1]] || []
  pilot[line[1]].push({
      name : line[1], 
      sal: line[3], 
      id: line[0], 
      years: line[2]
  })
  return pilot
  },{})

  console.log("output: ==> "+ JSON.stringify(output))


  var totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
  }, 0);

  var obj = pilots.reduce((total, pilot)=>{
     total.sal = pilot.sal
     total.name = pilot.name
     return total
  },{})

  console.log("obj: " + JSON.stringify(obj,null,2))
  
  const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
  const count = fruitBasket.reduce( (tally, fruit) => {
      if(!tally[fruit]){
        tally[fruit] = 1
      }else{
        tally[fruit] =  tally[fruit] + 1   
      }

  return tally
  } , {})

  //console.log(count); 

  console.log('output ' , output )











