function solved(array) {

    array
        .sort((a, b) => a.localeCompare(b))
        .forEach((element, index) => {
            console.log(`${index + 1}.${element}`)

        });
}

solved(["John", "Bob", "Christina", "Ema"]);