import { Person } from "./Person";

export class Student extends Person
{
    Greetings() {
        console.log(`Hello I am student and my name is ${this.Name} ${this.Surname}!`)
    }
}