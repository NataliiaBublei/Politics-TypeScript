import {Faction} from "./Faction.model";
import {Deputy} from "./Deputy.model";

export class VerkhovnaRada {
    listOfFactions: Faction[] = [];

    constructor(listOfFactions: Faction[] = []) {
        this.listOfFactions = listOfFactions;
    }

    addFaction(factionName: Faction) {
        this.listOfFactions.push(factionName);
    }

    deleteFaction(factionName: Faction) {
        const indexToDelete = this.listOfFactions.findIndex((fac: Faction) => fac === factionName);
        this.listOfFactions.splice(indexToDelete, 1);
    }

    showAllFactions() {
        this.listOfFactions.forEach((fac: Faction) => {
            console.log(fac)
        })
    }

    showFactionByName(factionName: Faction) {
        const findFaction = this.listOfFactions.find((fac: Faction) => fac === factionName);

        console.log(findFaction);
    }

    addDeputyToFaction(factionName: Faction, dep: Deputy) {
        factionName.addDeputy(dep)
    }

    deleteDeputyFromFaction(deputyToDelete: Deputy, factionName?: Faction) {
        if (factionName) {
            factionName.deleteDeputy(deputyToDelete);
        } else {
            this.listOfFactions.forEach((fac: Faction) => {
                fac.deleteDeputy(deputyToDelete);
            })
        }
    }

    deleteDeputyFromFactionBySurname(deputySurname: string, factionName?: Faction) {
        if (factionName) {
            factionName.deleteDeputyBySurname(deputySurname);
        } else {
            this.listOfFactions.forEach((fac: Faction) => {
                fac.deleteDeputyBySurname(deputySurname);
            })
        }
    }


}