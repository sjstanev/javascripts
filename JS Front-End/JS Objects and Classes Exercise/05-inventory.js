function solve(params) {
    const heroes = []

    for (const element of params) {
        const [hero, level, items] = element.split(' / ');
        const herous = {
            hero,
            level: Number(level),
            items
        }
        heroes.push(herous);
    }
    //console.log(heroes);
    heroes
        .sort((a, b)  => 
        a.level - b.level
        )

    for (const element of heroes) {
        console.log(`Hero: ${element.hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    }
}

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ])