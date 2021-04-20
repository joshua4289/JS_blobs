
let car = {id:5000,style:'convertible'};

let {id,style}= car;
console.log(id,style);

//doing de-structure later 
// the compiler does not know if you are starting a 
// block or not 

({id,style} = car);

// note we are putting the brakets over the whole 
// expression 
// the brackets 
//ONLY when destructuring objects 