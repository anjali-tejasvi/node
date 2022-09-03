// stntax of class
 /*class ClassKaNaam{
    constructor(){

    }
 } */



 /*class User {

    constructor(name,age, adress) {
      this.name = name;
      this.age=age;
      this.adress=adress
    }
    sayHi() {
        console.log(`my name is${this.name} `);
      }
      welcome() {
        console.log(`welcome ${this.name} `);
      }
    
  
  }
  
  // Usage:
  let user = new User("John","","nodia");
  let user1 = new User("cetpa","","nodia");
console.log(user)
user.sayHi()
user1.welcome() */
/*class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  console.log(user.name); // John
  
  user = new User("ritesh"); // Name is too short.
  console.log(user.name)*/
 /* class Person {
    constructor(name,age) {
        this.setName(name);
        this.setAge(age)
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }


    getAge(){
        return this.age
    }
    setAge(newAge){
        return this.age=newAge
    }
}

let person = new Person('Ritesh',25);
console.log(person); // Jane Doe

person.setName('Jane Smith',28);
person.setAge(28);
console.log(person.getName()); // Jane Smith
console.log(person.getAge());
*/
let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);