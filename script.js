const increasebuttonEl = document.querySelector(".counter_button--increase");
const decreasebuttonEl = document.querySelector(".counter_button--decrease");
const counterValueEl = document.querySelector(".counter_value");
const resetbuttonEl = document.querySelector(".counter_reset-button");
const counterEl = document.querySelector(".counter");
const countertitleEl = document.querySelector(".counter_title");

function inceamentcounter() {
  //get current value of counter
  const currentValue = counterValueEl.textContent;

  //Convert To Number
  const currentValueAsNumber = +currentValue;
  //Calculate New Value
  let newValue = currentValueAsNumber + 1;

  if (newValue > 5) {
    newValue = 5;
    counterEl.classList.add("counter-limit");
    countertitleEl.textContent = "limited";
  }

  counterValueEl.textContent = newValue;
}

function decreasecounter() {
  //get current value of counter
  const currentValue = counterValueEl.textContent;

  //Convert To Number
  const currentValueAsNumber = +currentValue;
  //Calculate New Value
  let newValue = currentValueAsNumber - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  counterEl.classList.remove("counter-limit");
  countertitleEl.textContent = "Counter project";
  counterValueEl.textContent = newValue;
}

increasebuttonEl.addEventListener("click", inceamentcounter);
document.addEventListener("keydown", inceamentcounter);

decreasebuttonEl.addEventListener("click", decreasecounter);

resetbuttonEl.addEventListener("click", function () {
  counterValueEl.textContent = 0;
  counterEl.classList.remove("counter-limit");
  countertitleEl.textContent = "Counter project";
});
