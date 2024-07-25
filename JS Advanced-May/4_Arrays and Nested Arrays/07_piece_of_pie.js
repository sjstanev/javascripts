/**
 * 
 * @param {array} array 
 * @param {string} startStringIndex 
 * @param {string} endStringIndex 
 */
function pieceOfPie(array, beginingString, endingString){

    const startStringIndex = array.indexOf(beginingString)
    const endStringIndex = array.indexOf(endingString)

    return array.slice(startStringIndex,endStringIndex + 1);
}

console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));