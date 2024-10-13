// Person class attached to window
window.Person = class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(newAge) {
        if (typeof newAge === 'number' && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a non-negative number");
        }
    }
};

// Student class extending Person
window.Student = class Student extends window.Person {
    study() {
        console.log(`${this.name} is studying`); // Fixed string interpolation
    }
};

// Teacher class extending Person
window.Teacher = class Teacher extends window.Person {
    teach() {
        console.log(`${this.name} is teaching`); // Fixed string interpolation
    }
};

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
