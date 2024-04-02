function solve(towns){

    function createObject(town, latitude, longitude){
        city = {
            town: town.trim(),
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }
        return city;
    }
    
    for (const line of towns) {
        const [town, latitude, longitude] = line.split('|');
        console.log(createObject(town, latitude, longitude));
    }   
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])