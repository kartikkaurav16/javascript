

function Dog(name, age){
this.name = name;
this.age = age
}; 
Dog.prototype.bark = function(){
    console.log('bow bow'); 
}

Dog.prototype.weight = function(weight){
    this.weight = weight
}

Dog.prototype.price = function(variableFactor){
    console.log(this.age * variableFactor)
   return  (this.age + this.weight)* variableFactor
}

let fido = new Dog('fido', 10); 
let dex = new Dog('dex', 2);
fido.price(2)

fido.eat = function(){
    console.log('Hi from : '+ this.name)
};
dex.bark()
fido.eat(); 
dex.price(4)
console.log(dex.__proto__ === Dog.prototype)
console.log(fido.__proto__.age === Dog.prototype.age)
console.log(Dog === dex.constructor)


module.exports={
Dog : Dog,
dex: dex, 
fido: fido
}; 



















