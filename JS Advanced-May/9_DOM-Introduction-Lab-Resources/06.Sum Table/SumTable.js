// function sumTable() {
//     const tdPriceElements = document.querySelectorAll('table td:nth-of-type(even):not(#sum)');
//     const sumElement = document.querySelector('#sum');

//     const totalSum = Array.from(tdPriceElements)
//         .reduce((acc, curr) => acc + Number(curr.textContent), 0);

//     sumElement.textContent = totalSum;
// }

function sumTable() {
    let table = document.querySelectorAll("table tr");
    let total = 0;
    for (let i = 1; i < table.length; i++) {
        let cols = table[i].children;
        console.log(cols);
        let cost = cols[cols.length - 1].textContent;
        total += Number(cost);
    }
    document.getElementById("sum").textContent = total;
}