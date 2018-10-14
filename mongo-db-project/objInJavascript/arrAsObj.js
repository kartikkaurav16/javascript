/**
 * Created by kkaurav on 8/26/2018.
 */
module.exports ={

};

let emp  = [];

emp[0] = 'first'

emp ["empNum"] = '1001';
emp["deptNum"] = '2002'
console.log(emp)
console.log("emp[empNum] : "+emp["empNum"])

console.log("emp.empNum : "+emp.empNum);
function printArr(emp){
    console.log("printArr")
    let i
    for(i = 0;i < emp.length; i++){
        console.log(i +" = "+emp[i]);
    }
}

printArr(emp);
console.log("return Keys "+Object.keys(emp))


module.exports ={
    emp: emp
};

