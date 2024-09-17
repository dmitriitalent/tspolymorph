import { Person } from "./Person";

export class Party
{
    Greetings(persons: Person[]) {
        persons.forEach(person => {
            person.Greetings();
        });
    }
} 
