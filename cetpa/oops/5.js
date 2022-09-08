class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
        console.log(`In constructor ${this.name} and  ${this.speed}.`)

    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with  ${this.speed}.`)
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still.`)
    }
}

let AnimalObj = new Animal("Dog");
AnimalObj.run(10)

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} hides!`)
    }

    stop(){
        super.stop(); //call parent stop
        this.hide();// and then hide
    }
}

let rabbitObj = new Rabbit("white Rabbit")
rabbitObj.run(5);// white rabbit runs with speed 5
rabbitObj.stop();