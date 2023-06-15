const API_URL =
  " https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

fetch(API_URL)
  .then((res) => res.json())
  .then((student) => app(student));

function app(student) {
  const averageGrade = student.filter((student) => student.averageGrade > 3);
  console.log(averageGrade);
  const femaleStudents = student
    .filter(
      (student) => student.gender === "Female" && student.averageGrade == 5
    )
    .map((name) => name.firstName);
  console.log(femaleStudents);
  const maleStudents = student
    .filter(
      (student) =>
        student.gender === "Male" &&
        student.age >= 18 &&
        student.city === "Skopje"
    )
    .map((name) => `${name.firstName}  ${name.lastName}`);
  console.log(maleStudents);

  const femaleAverageGrades = student
    .filter((student) => student.gender === "Female" && student.age >= 24)
    .map(
      (student) => `${student.firstName} ${student.age} ` + student.averageGrade
    );
  console.log(femaleAverageGrades);

  const maleStudentWithB = student
    .filter(
      (student) =>
        student.gender === "Male" &&
        student.firstName[0] === `B` &&
        student.averageGrade > 2
    )
    .map(
      (student) => `${student.firstName} ${student.age} ` + student.averageGrade
    );
  console.log(maleStudentWithB);
}
