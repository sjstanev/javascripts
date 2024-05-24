function registry(townsArr) {

    // Assosiative array
    let townRegistry = {};

    for (const townAsString of townsArr) {
        let [townName, townPopulaltion] = townAsString.split(' <-> ')
        townPopulaltion = Number(townPopulaltion);

        if (townRegistry.hasOwnProperty(townName)) {
            //Update the 'townRegistry' object with the new 'townPopulaltion' value for the 'townName'
            townRegistry[townName] = townRegistry[townName] + townPopulaltion;
        } else {
            townRegistry[townName] = townPopulaltion;
        }
    }

    for (let town in townRegistry) {
        console.log(`${town} : ${townRegistry[town]}`);
    }
}

registry(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])