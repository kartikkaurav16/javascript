/**
 * Created by kkaurav on 9/1/2018.
 */

module.exports = {
    Car: Car
}

function Car(model, year, color){
    let registrationNumber;
    let carName;
    this.color = color;
    this.model = model;
    this.year = year
    this.setName = function(name){
        carName = name;
    };
    this.setRegistrationNumber= function(){
        registrationNumber = "REG" + Math.floor(Math.random() * 9999999)

return registrationNumber;
    };

    this.getRegistrationNumber= function(){
   return registrationNumber
    };

    this.getName = function(){
        return carName;
    };

    this.resaleCar = function(carObj){
        this.name = carObj.getName(); 
        this.resaleRegistrationNumber = "Res"+carObj.getRegistrationNumber();
        this.model = carObj.model;
        this.year = carObj.year;
        this.color = carObj.color;
    }

    this.returnDetailsofCurrentObj = function(){
        let obj = {
            name: carName,
            color: this.color,
            registrationNumber: registrationNumber,
            model : this.model,
            year : this.year,
            resaleCarName : this.name, 
            resaleRegistrationNumber : this.resaleRegistrationNumber
        }

        return obj;  
       
    }
}

let maruti = new Car("model: 800cc", 2018, "black" );
maruti.setName("Maruti suzuki");
maruti.setRegistrationNumber();

console.log("maruti => "+ "carName: " + maruti.getName() + "\n" +  " year "
    + maruti.year+ "\n" + "registrationNumber : "
    + maruti.getRegistrationNumber()+ " color: "+maruti.color
    +" \n model" + maruti.model);

let maruti2019 = new Car("Model: 1300" , 2019, "red");
maruti2019.setRegistrationNumber();
maruti2019.setName("new Maruti suzuki 1300cc");

console.log("\n maruti2019 car name => " + maruti2019.getName() + "\n registration Number => " + maruti2019.getRegistrationNumber())


maruti.resaleCar(maruti2019);

console.log( "\n =>  after resale: "+"\n color => " + maruti.color +
 "\n resale registration: " + maruti.resaleRegistrationNumber +
    "\n car Name: " + maruti.carName
    + "\n old car model: " +  maruti.model
    + "\n year: " + maruti.year);


let newObj = maruti.returnDetailsofCurrentObj(); 


console.log("\n new obj resaleregistration " +JSON.stringify(newObj,undefined,4))

