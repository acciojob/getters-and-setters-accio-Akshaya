class Person {
    constructor(name, age) {
        this._name = name; // Private field for name
        this._age = age;   // Private field for age
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Expose the classes to the global window object
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// Example usage (optional):
const person = new Person("John", 25);
console.log(person._name); // Output: John
console.log(person._age);  // Output: 25

person.age = 30;
console.log(person._age);  // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
