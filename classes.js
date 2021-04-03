
    // this is how you create a constructor in JS 
    // nothing special it is just a function 
    // it uses the 'this' keyword 
    //methods are also bound to this similar to OO in python 
    //but less song and dance
    
    function Person(firstName,lastName,age){

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age 

        this.isAdult = function() { return this.age >= 18};

    }

    let Jim = new Person('Jim','Cooper',29);
    let Sophia = new Person('Sophia','Vegara',17);

    display(Jim.isAdult());
    display(Sophia.isAdult());
