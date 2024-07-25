function cityTaxes(name, population, treasury){
    let obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        applyGrowth(percentage){
            this.population += Math.floor(this.population * percentage / 100)
        },
        applyRecession(percentage){
            this.population -= Math.floor(this.treasury * percentage / 100)
        },
        collectTaxes : function() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
    }

    return obj
}

// const city =
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);


const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

/*

population = 20
precentege = 5

applyGrowth = 20 + 20*5/100 = 20 + 20 * 0.

*/