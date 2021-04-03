  // this will give you  properties like configurable? 
  // and writeable 
  display(Object.getOwnPropertyDescriptor(person,"age"));

  //making the writeable attribute false 

  Object.defineProperty(person,"first",{writable:false});
  Object.freeze(person.first);
 
  person.first ="Kris";

  //making objects non-enuberable 
  // this will hide properties from a for in loop 
  // OR JSON.stringify
  // OR Object.keys() 

  Object.defineProperty(person,"age",{enumerable:false});
  JSON.stringify(person);
  