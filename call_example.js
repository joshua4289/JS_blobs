let o = {
    card:123,
    getId: function(){
        return this.card;

    }
};

// a new instance of object 
let newCar = {card:456};

// calling getID and passing 
// a different object completely 
//  is not related to the object o 
// works because 'this' holds the 
// context of the place it's called 

console.log(o.getId.call(newCar));
