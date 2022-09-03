// java script class
// class ClasskaNaam{
//     constructor() {//... }
//   method1() { //... }
//   method2() { //... }
//   method3() { //... }

// }

//this keyword refers to the object it belongs to.
//in a method. this referes to the owner object.

/*function User(name) {
    this.name = name;
    this.isAdmin = false;
    this.title="jha"
  }
  
  let user = new User("Jack");
  
  console.log(user.name); // Jack
  console.log(user.isAdmin);
  console.log(user.title); */
  
  
  /*function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  const calling= new BigUser();
  console.log(calling)
*/


function User(name,age,address) {
    this.name = name;
    this.age=age;
    this.address=address;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name + ` my age is ${age}` );
    };
  }
  
  let john = new User("John");
  let ritesh = new User("Ritesh",25);
  
  john.sayHi(); 
  ritesh.sayHi();