module.exports = {
    ConstFuncofArr : ConstFuncofArr
}

function ConstFuncofArr (name, address, sal){
this.name = name; 
this.address = address;

this.sal = sal; 

this.anualSal = function(){
    return this.sal*12;
};

};

let aryEmp  = []; 

aryEmp[0] = new ConstFuncofArr("kartik", "Rio Robles", 4000); 
aryEmp[1] = new ConstFuncofArr("Rakesh", "Rio Robles 135", 5000); 
aryEmp[2] = new ConstFuncofArr("Sagnik ", "Rio Robles East", 6000); 
aryEmp[3] = new ConstFuncofArr("Meg", "Rio Robles Apt 161", 7000); 


for( let i = 0; i<aryEmp.length ; i++){
    console.log("-> " + aryEmp[i].name) 
    for (let keys in aryEmp[i] ){
        if(typeof aryEmp[i][keys] == 'function'){
            console.log(keys +" => " + aryEmp[i][keys]())
        }
else console.log(keys +" => " + aryEmp[i][keys] )
    }

}







