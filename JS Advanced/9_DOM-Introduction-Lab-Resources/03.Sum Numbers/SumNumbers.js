function calc() {
    // TODO:
    const num1Element = document.querySelector('#num1');
    const num2Element = document.querySelector('#num2');
    const sumElement = document.querySelector('#sum');

    const sum = Number(num1Element.value) + Number(num2Element.value);

    sumElement.value = sum;
}
