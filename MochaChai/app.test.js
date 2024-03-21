const operations = require("./app");
 
it("should multiply two numbers", function(){
     
    const expectedResult = 15;
    const result = operations.multiply(3, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});
it("should add two numbers", function(){
     
    const expectedResult = 16;
    const result = operations.add(9, 7);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});