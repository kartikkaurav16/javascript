/**
 * Created by kkaurav on 8/21/2018.
 */


function doProcessInsideFunc(a,b){
    let c = 40;
console.log('do Process in nested function');
  function additionInnerFunc(){
      console.log("addition function " + (a+b));
      return (a+b)
  }
    function differencefunc(){
        console.log("diff function " + (a-b));
        return (a-b)
    }
    function productfunc(){
        console.log("product function " + ((a*b)+c));
        return ((a*b)+c)
    }

    console.log("division "+ (a/b))
    return {additionInnerFunc: additionInnerFunc,differencefunc:differencefunc,productfunc:productfunc }
}

let accessObj = doProcessInsideFunc(10,20)

let additionofNum = accessObj.additionInnerFunc();
accessObj.differencefunc();
accessObj.productfunc();


module.exports= {
    doProcessInsideFunc: doProcessInsideFunc,
    additionofNum: additionofNum
};


