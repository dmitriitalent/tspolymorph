import { Person } from "./Person";

export class Employee extends Person
{
    Greetings() {
        console.log(`Hello I am employee and my name is ${this.Name} ${this.Surname}!`)
    }
}