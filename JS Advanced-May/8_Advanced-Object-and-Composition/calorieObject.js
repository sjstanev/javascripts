function calorieObject(data){
    const result = {};
    for (let i = 0; i < data.length; i += 2 ){
        let key = data[i];
        let value = Number(data[i+1]);
        result[key] = value;
    }
    console.log(result);
}   

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
)