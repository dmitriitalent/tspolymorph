export class Person {
    public Name: string;
    public Surname: string;

    constructor(name: string, surname: string) 
    {
        this.Name = name;
        this.Surname = surname;
    }
    
    Greetings() {
        console.log("Hello, my name is " + this.Name + " " + this.Surname + "!");
    }
}

