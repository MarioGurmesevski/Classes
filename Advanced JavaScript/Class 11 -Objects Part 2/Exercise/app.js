class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, academyName, studentId) {
    super(firstName, lastName, age);
    this.academyName = academyName;
    this.studentId = studentId;
  }
  study() {
    console.log(
      `The student ${this.firstName} is studying in the ${this.academyName} academy`
    );
  }
}
const studentOne = new Student("Bob", "Bobski", 20, "SEDC", 5512);

const studentTwo = new Student("Bill", "Brown", 21, "SEDC", 4552);

studentOne.study();

class DesignStudent extends Student {
  constructor(firstName, lastName, age, studentID) {
    super(firstName, lastName, age, "design", studentID);
    this.isStudentOfTheMonth = false;
  }
  attendAdobeExam() {
    `The student ${this.firstName} is doing an adobe exam!`;
  }
}

class CodeStudent extends Student {
  constructor(firstName, lastName, age, studentID) {
    super(firstName, lastName, age, "code", studentID);
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
  }
  doProject(type) {
    if (type == "individual") {
      this.hasIndividualProject = true;
      this.hasGroupProject = false;
      console.log(`${this.fullName} is working on a individual project`);
    } else if (type == "group") {
      this.hasIndividualProject = false;
      this.hasGroupProject = true;
      console.log(`${this.fullName} is working on a group project`);
    } else {
      console.log(`${this.fullName} is not working on any project`);
    }
  }
}

const codeStudentOne = new CodeStudent("Bob", "Jamies", 32, 5412);

codeStudentOne.doProject("individual");

class NetworkStudent extends Student {
  constructor(firstName, lastName, age, studentID, academyPart) {
    super(firstName, lastName, age, "network ", studentID);
    this.academyPart = academyPart;
  }
  attendCiscoExam() {
    console.log(`${this.fullName} is doing a cisco exam`);
  }
}

const designStudentOne = new DesignStudent("Bobby", "Bobovski", 30, 5942);

designStudentOne.study();
