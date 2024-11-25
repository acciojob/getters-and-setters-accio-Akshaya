class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this.name;
	}
	set age(newAge){
		this.age = newAge;
		console.log("age set");
	}
}

class Student extends Person(){
	constructor(name,age){
	  super(name,age);
	}
	study(){
	    return this.name + " is studying";	
	}
}
class Teacher extends Person(){
	constructor(name,age){
	  super(name,age);
	}
	teach(){
		return this.name + " is teaching";
	}
}

const person = new Person("john",25);
console.log(Person.name);

Person.age = 20;
console.log(Person.age);

const student = new Student("shakshi",22);
console.log(Student.study());

const teacher = new Teacher("Gob",34);
console.log(teacher.teach());