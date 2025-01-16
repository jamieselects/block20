//definte the starting number arrays
const numberBank = [];
const odds = [];
const evens = [];

//define all the document objects we're going to use
const form = document.querySelector("form");
const numberInput = document.getElementById("number");
console.log("numberInput is",numberInput);
const numberBankNumbers = document.getElementById("numberBankNumbers");
const sortOneButton = document.getElementById("sortOneButton");
const sortAllButton = document.getElementById("sortAllButton");
const oddsBank = document.getElementById("oddsBank");
const evensBank = document.getElementById("evensBank");

//create event listener function for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //convert form submission string to number
  const numberValue = Number(numberInput.value.trim());
  numberBank.push(numberValue);

  //call update numberBank function to update the doc object
  updateNumberBank();
  numberInput.value = "";
});

//funtion to update the numberBank
function updateNumberBank() {
  numberBankNumbers.innerHTML = "";
  numberBankNumbers.textContent = numberBank.join(", ");
}

//function to update the evens / odds
function updateSortedNumbers () {
  oddsBank.textContent = odds.join(", ");
  evensBank.textContent = evens.join(", ");
}

//sort 1 button functionality
sortOneButton.addEventListener("click", (event) => {
  const currentNumber = numberBank.shift();
  if (currentNumber % 2 !== 0) {
    odds.push(currentNumber);
  } else {
    evens.push(currentNumber);
  }

  updateNumberBank();
  updateSortedNumbers();
})

//sort all button functionality
sortAllButton.addEventListener("click", (event) => {
  while (numberBank.length > 0) {
    const number = numberBank.shift();

    if (number % 2 !== 0) {
      odds.push(number);
    } else {
      evens.push(number);
    }
  }

  updateNumberBank();
  updateSortedNumbers();
})


  

