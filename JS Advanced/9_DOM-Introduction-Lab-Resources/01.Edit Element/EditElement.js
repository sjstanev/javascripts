// function editElement(element, match, replacer) {
//     // TODO

//     let result = element.textContent.replace(match, replacer)

//     element.textContent = result;
// }

function editElement(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    ref.textContent = edited;
}