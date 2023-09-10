const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let numbers = [[], []];
let result = "";
let operator = "";
let numberID = 0;

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!e.target.id) {
      numbers[numberID].push(e.target.innerText);
      input.value = numbers[numberID].join("");
    } else {
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

      if (e.target.id === "=") {
        if (numbers[0].length > 0 && numbers[1].length > 0) {
          switch (operator) {
            case "+":
              result =
                Number(numbers[0].join("")) + Number(numbers[1].join(""));
              break;
            case "-":
              result =
                Number(numbers[0].join("")) - Number(numbers[1].join(""));
              break;
            case "x":
              result =
                Number(numbers[0].join("")) * Number(numbers[1].join(""));
              break;
            case "/":
              result =
                Number(numbers[0].join("")) / Number(numbers[1].join(""));
              break;
          }

          numbers[0] = result.toString().split("");
          numbers[1] = [];
          numberID = 0;
          input.value = numbers[numberID].join("");
        }
      }
    }

    if (numbers[numberID].length === 0) {
      input.value = "0";
    }

    console.log(numbers);
  });
});
