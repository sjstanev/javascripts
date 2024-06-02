function extract(content) {
    const contentElement = document.querySelector('#content');
    const pattern = /\(([A-Za-z\s]+)\)/g;

    const matches = contentElement.textContent.matchAll(pattern);
    console.log(matches);

    /*
        matches is RegExp String Iterator {  } which looks like:
        Array [ "(Bulgaria)", "Bulgaria" ]
        Array [ "(Kazanlak)", "Kazanlak" ]
        Array [ "(Rosa damascena Mill)", "Rosa damascena Mill" ]
    */

    const result = Array.from(matches)
        // take only the 1st Capturing Group
        .map(match =>match[1])
        .join('; ');

    return result;

}