const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

let numbers = [[], []];
let operator = "";
let numberID = 0;

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        if (!e.target.id) {
            numbers[numberID].push(e.target.innerText);
            input.value = numbers[numberID].join("");
        }
        else {
            numberID = 1;
            input.value = numbers[numberID].join("");
        }

        console.log(numbers);
    });
})