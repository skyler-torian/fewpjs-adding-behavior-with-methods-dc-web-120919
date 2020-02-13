// Your code here
class Cat {
    constructor(name, sex) {
        this.name = name
        this.sex = sex

    }
    speak() {
    return `${this.name} says meow!`
    }
}
 
class Dog {
    constructor(name, sex) {
        this.name = name
        this.sex = sex

    }
    speak() {
    return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak(){
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
}

let maggie = new Dog('Maggie', 'female')
let stella = new Cat('Stella', 'female')
let bird1 = new Bird('Birdo', "male")
let bird2 = new Bird('Jangles', 'female')



