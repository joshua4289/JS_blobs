  // this will give you  properties like configurable? 
  // and writeable 
  display(Object.getOwnPropertyDescriptor(person,"age"));

  //making the writeable attribute false 

  Object.defineProperty(person,"first",{writable:false});
  Object.freeze(person.first);
  person.first ="Kris";
  