import {Deputy} from "./Deputy.model";

export class Faction {
    listOfDeputies: Deputy[] = [];

    constructor(listOfDeputy: Deputy[] = []) {
        this.listOfDeputies = listOfDeputy;
    }

    addDeputy(obj: Deputy) {
        this.listOfDeputies.push(obj)
    }

    deleteDeputy(deputyToDelete: Deputy) {
        const indexToDelete = this.listOfDeputies.findIndex((dep: Deputy) => {
            return  deputyToDelete.surname === dep.surname && deputyToDelete.name === dep.name
        });

        this.listOfDeputies.splice(indexToDelete, 1);
    }

    deleteDeputyBySurname(deputySurname: string) {
        const indexToDelete = this.listOfDeputies.findIndex( (dep: Deputy) => deputySurname === dep.surname);

        this.listOfDeputies.splice(indexToDelete, 1)
    }

    deleteAllBriberDeputies() {
        const honestDeputies = this.listOfDeputies.filter((dep: Deputy) => !dep.bribery);

        this.listOfDeputies.splice(0, this.listOfDeputies.length);

        this.listOfDeputies = [...honestDeputies];
    }

    showTheBiggestBriberDeputy() {
        const [theBiggestBriberDeputy] = this.listOfDeputies.sort((dep1: Deputy, dep2: Deputy) => {
            return dep2.sizeBribery - dep1.sizeBribery
        });

        console.log(theBiggestBriberDeputy);
    }

    showAllDeputies() {
        this.listOfDeputies.forEach((dep: Deputy) => {
            console.log(dep)
        })
    }

    showAllBriberDeputies(){
        const briberDeputies = this.listOfDeputies.filter((dep: Deputy) => dep.bribery);

        briberDeputies.forEach( dept => {
            console.log(dept);
        })
    }

    deleteAllDeputies() {
        this.listOfDeputies.splice(0, this.listOfDeputies.length);
    }

    showTheTotalAmountOfBribes() {
        const totalAmount = this.listOfDeputies.reduce((previousValue: number, currentItem: Deputy) => {
            return previousValue + currentItem.sizeBribery
        }, 0);

        console.log(totalAmount);
    }
}