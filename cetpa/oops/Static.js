// class User{
//     static staticMethod(){
//         console.log(this === User)
//     }
// }

// User.staticMethod();
// static method are called without creating obj and cannot be called
// through a class instance
//Used to define a static method for a class.
class User{
    static show(){
        return "Static method"
    }
}
console.log(User.show());

//compare function
const numbers =[0,1,20, 10,40,8,60];
//output 0,1,8,10,20,40,60
// output return 0,  1, 10, 20, 40, 60,  8
numbers.sort(function(a,b){
    if(a>b){
        return 1;
    }
    if(a<b){
        return -1;
    }
    if(a == b){
        return 0;
    }
})

console.log(numbers);