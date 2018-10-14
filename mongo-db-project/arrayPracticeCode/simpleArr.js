
let fruits = ['apple','orange']
fruits['mango'] = {'name': 'mango'}  //assigning keys as values 
fruits['jackFruit'] = 'jackFruit'
fruits['straberry'] = {'name': 'straberry'} 


//console.log("=>   array:  "+ fruits +   " array length " + fruits.length); 
function assigningKeys(){
    fruits.forEach(function(item, elements){
       console.log("item: "+item);
       console.log("elements "+ elements ); 
    })
}

function loopKeysAsString(){
    for (let objKey in fruits){
        
        console.log("objKey : " + objKey )
        console.log(" =  "+ typeof objKey !== 'string')
        if(typeof objKey !== 'string'){
            //console.log("keys : "+ objKey )
            objKey = fruits[objKey]
        }
        console.log("keys: " + objKey + " value -> "+ JSON.stringify(fruits[objKey]))
    }
}

//console.log(fruits)

// fruits['mango'].name
// console.log(" --> "+ JSON.stringify(fruits['mango']))
// console.log(" --> "+ JSON.stringify(fruits['mango']['name']))

function modifyKey (){
    for(let i= 0 ; i<fruits.length; i++){
        i = fruits[i]
        console.log(" value: " + fruits[i]);
        console.log("index : " + i);
    }
}


loopKeysAsString();

// console.log("=>   array:  "+fruits +  " array length " + fruits.length); 

// console.log("=>   array:  "+fruits['apple'] + fruits['orange'] + fruits['mango'] );


// console.log("=>   array:  "+fruits[0] + fruits[1] + fruits['mango'] );



module.exports = {
    fruits : fruits
}


