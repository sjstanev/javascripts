function heroicInventory(input){


    const heroes = [];

    for (let heroData of input){

        if (heroData){
            [heroName, heroLevel, heroItems] = heroData.split(' / ');

            heroName = heroName.trim();
            heroLevel = Number(heroLevel);
            heroItems = heroItems ? heroItems.split(', ') : []; 

            // Create and Hero Object 
            let hero = {
                name: heroName,
                level: heroLevel,
                items: heroItems
            }

            heroes.push(hero)
        }

    }
    console.log(JSON.stringify(heroes));

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])


// [
//     {"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
//     {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
//     {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}
// ]
