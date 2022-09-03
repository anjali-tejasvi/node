// class Papa{
//     constructor(car){
//         this.car = car;
//         console.log(this.car)
//     }

//     papaCarDo(){
//         console.log(this.car)
//     }
// }

// const papa = new Papa("car")
// papa.papaCarDo();

// class Son extends Papa{
//     papaCar(){

//     }
// }

// const son = new Son("BMW")
// son.papaCarDo();


class PMO{
    constructor(amount){
        this.amount = amount;
        console.log(`total amount in PMO is ${this.amount}`)
    }
}

const obj = new PMO("$500");

 const obj1 = {
    First_name: "Anjali",
    Last_name: "Tejasvi"
    
}
console.log(obj1);