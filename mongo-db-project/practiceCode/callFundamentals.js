/**
 * Created by kkaurav on 8/12/2018.
 */
module.exports = {
    add: add
}

function add(a){
  return this.num + a;
}

let arr = [5];

let obj = {
    num  :6
}

console.log("call practice -> " + add.call(obj, 8));
console.log("apply practice -> " + add.apply(obj,arr));
let bindObj = add.bind(obj)

console.log(bindObj(6));



