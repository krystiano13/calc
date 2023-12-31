const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let numbers = [[], []];
let result = "";
let operator = "";
let numberID = 0;

const addInput = (e) => {
  if (e.target.innerText === "." && numbers[numberID].length <= 0) return;
  numbers[numberID].push(e.target.innerText);
  input.value = numbers[numberID].join("");
};

const checkOperator = (e) => {
  switch (e.target.id) {
    case "+":
      operator = "+";
      break;
    case "-":
      operator = "-";
      break;
    case "x":
      operator = "x";
      break;
    case "/":
      operator = "/";
      break;
  }
};

const specialFunctions = (e) => {
  if (e.target.id !== "=") {
    numberID = 1;
    input.value = numbers[numberID].join("");
  }

  if (e.target.id === "ce") {
    numbers = [[], []];
    numberID = 0;
  }

  if (e.target.id === "c" && numbers[numberID].length > 0) {
    numbers[numberID].pop();
  }
};

const calculate = (e) => {
  if (numbers[0].length > 0 && numbers[1].length > 0) {
    switch (operator) {
      case "+":
        result = Number(numbers[0].join("")) + Number(numbers[1].join(""));
        break;
      case "-":
        result = Number(numbers[0].join("")) - Number(numbers[1].join(""));
        break;
      case "x":
        result = Number(numbers[0].join("")) * Number(numbers[1].join(""));
        break;
      case "/":
        result = Number(numbers[0].join("")) / Number(numbers[1].join(""));
        break;
    }

    numbers[0] = result.toString().split("");
    numbers[1] = [];
    numberID = 0;
    input.value = numbers[numberID].join("");
  }
};

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!e.target.id) {
      addInput(e);
    } else {
      checkOperator(e);
      specialFunctions(e);
      if (e.target.id === "=") {
        calculate(e);
      }
    }

    if (numbers[numberID].length === 0) {
      input.value = "0";
    }
  });
});
