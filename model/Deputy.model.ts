import {Person} from "./Person.model";

export class Deputy extends Person {
    surname: string;
    name: string;
    age: number;
    bribery: boolean;
    sizeBribery: number;

    constructor(weight: number, height: number, surname: string, name: string, age: number,
                bribery: boolean, sizeBribery: number) {
        super(weight, height);
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.bribery = bribery;
        this.sizeBribery = sizeBribery;
    }

    giveBribe(): void {
        if (!this.bribery) {
            console.log('No');
            return;
        }

        const takeOrNot: number = Math.random();

        (takeOrNot > .5) ? console.log('Yes') : console.log('No');
    }
}