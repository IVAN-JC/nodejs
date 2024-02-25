function test() {
    console.log('Ohaio!')
}
test();
function call(func){
    func();
}
var printsmth = function() {
    console.log('Only text');
};
printsmth();

call(printsmth);