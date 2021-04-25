
// the important part is 
// that the iife holds cardId
// which has it's own state 


let app = (function(){
    let cardId = 123;
    console.log('in function..');
    return {};
})();

console.log(app);

console.log(app.cardId);