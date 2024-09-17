import { Employee } from "./classes/Employee";
import { Party } from "./classes/Party";
import { Person } from "./classes/Person";
import { Student } from "./classes/Student";

const person: Person = new Person("Dmitriy", "Gavshin");
const employee: Employee = new Employee("Dmitriy", "Gavshin");
const student: Student = new Student("Dmitriy", "Gavshin");

const party: Party = new Party();

let array: Person[] = [person, employee, student];
party.Greetings(array);



