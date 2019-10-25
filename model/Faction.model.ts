import {Deputy} from "./Deputy.model";

export class Faction {
    listOfDeputies: Deputy[] = [];

    constructor(listOfDeputy: Deputy[] = []) {
        this.listOfDeputies = listOfDeputy;
    }

    addDeputy(obj: Deputy) {
        this.listOfDeputies.push(obj)
    }

    deleteDeputies(deputyToDelete: Deputy) {
        const indexToDelete = this.listOfDeputies.findIndex((deputy: Deputy) => {
            return deputyToDelete.name == deputy.name && deputyToDelete.surname == deputy.surname
        });

        this.listOfDeputies.splice(indexToDelete, 1);
    }

    deleteAllBriberDeputies() {
        const honestDeputies = this.listOfDeputies.filter((deputy: Deputy) => !deputy.bribery);

        this.listOfDeputies.splice(0, this.listOfDeputies.length);

        this.listOfDeputies = [...honestDeputies];
    }

    findTheBiggestBriberDeputy() {
        const [theBiggestBriberDeputy] = this.listOfDeputies.sort((deputy1: Deputy, deputy2: Deputy) => {
            return deputy2.sizeBribery - deputy1.sizeBribery
        });

        console.log(theBiggestBriberDeputy);
    }

    showAllDeputies() {
        this.listOfDeputies.forEach((deputy: Deputy) => {
            console.log(deputy)
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