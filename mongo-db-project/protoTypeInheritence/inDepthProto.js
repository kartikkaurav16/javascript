module.exports = {
    Animal: Animal
}

//todo: build a prototypal chain 

let mediumPrototype =  require('./mediumPrototype')

function Animal (animaltype){
this.animaltype = animaltype
}; 

function F(){}

Animal.prototype.animalType = function(){
    console.log('dog ' + this.animaltype)
}

let cat = new Animal('cat'); 


F.prototype = Animal.prototype; 

mediumPrototype.Dog.prototype = new F(); 

mediumPrototype.Dog.prototype.constructor = mediumPrototype.Dog
 


mediumPrototype.Dog.prototype.animalType(); 

mediumPrototype.dex.price(6)




