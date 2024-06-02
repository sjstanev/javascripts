// function extractText() {
//     // TODO
//     const liElements = document.querySelectorAll('li');
//     const textAreaElement = document.querySelector('#result');

//     Array.from(liElements)
//         .map((e) => e.textContent)
//         .forEach((e) => textAreaElement.value += e +"\n")
// }


function extractText() {
    let itemNodes = document.querySelectorAll("ul#items li");
    let textarea = document.querySelector("#result");
    for (let node of itemNodes) {
        textarea.value += node.textContent + "\n";
    }
}