function colorize() {
    // TODO
    rowsElements = document.querySelectorAll('table tr:nth-child(2n)');

    for (let row of rowsElements){

        row.style.backgroundColor = "teal";
    }
}