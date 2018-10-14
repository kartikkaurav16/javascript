module.exports = {

}

/*Associative Array
1: Java scrit can have string bases indexes. 
2.  Array which have string based indexes are called Associative Arr. 

*/

let empArr = []; 
empArr[0]= '_id'
empArr["name"] =  'Jhon'; 
empArr['sal'] =  '5000'; 
empArr['age'] =  '30'; 
empArr['address'] =  {"street":"135 rio Robles",
"city":"san Jose",
                     "state":"CA",
                     "apt":"161"}; 


function traverseArr(){  
for(var objKey in empArr){
     if (objKey == 'name'){
        objKey = empArr[objKey]
        
         console.log("key: " + objKey +" value: "+ empArr[objKey] + " size: "  )
     }
     empArr[objKey]
    

    console.log("\nkey: " + objKey +" value: "+empArr[objKey] + " size: "   +  Object.keys(empArr).length)
}
}

traverseArr()
                

module.exports = {
    empArr: empArr
}

