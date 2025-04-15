// business logic

let neighborName = null;

function hasNumber(fullNumber, number) {
  return fullNumber.toString().includes(number);
}

function replaceLettersInString(baseString, replaceWith) {
  return replaceWith.repeat(baseString.length);
}

function changeNumber(number) {
  if (hasNumber(number, "3")) {
    if (neighborName) {
      return "Won't you be my neighbor, " + neighborName + "?";
    }
    return "Won't you be my neighbor?";
  } else if (hasNumber(number, "2")) {
    return "Boop!"
  } else if (hasNumber(number, "1")) {
    return "Beep!"
  }
  return number.toString();
}

function convertNumber(number) {
  if (!number || number <= 0) {
    return false;
  }
  const convertedNumbers = [];
  for (let index = 0; index <= number; index ++) {
    convertedNumbers.push(changeNumber(index));
  }
  return convertedNumbers;
}

// ui logic

function createNewOutput() {
  if (document.getElementById("output")) {
    document.getElementById("output").remove();
  }
  const newOutput = document.createElement("div");
  newOutput.id = "output";
  document.querySelector("form").after(newOutput);
  return newOutput;
}

function onSubmit(event) {
  event.preventDefault();
  neighborName = document.getElementById("name-input").value;
  const convertedInput = convertNumber(document.getElementById("input").value);
  const newOutput = createNewOutput();
  if (!convertedInput) {
    const warning = document.createElement("p");
    warning.classList.add("padding-left");
    warning.innerText = "Input a valid number.";
    newOutput.append(warning);
    return;
  }
  let newList = null;
  let showNumber = false;
  if (document.getElementById("show-number").checked) {
    newList = document.createElement("ol");
    showNumber = true;
  } else {
    newList = document.createElement("ul");
  }
  convertedInput.forEach(function(value, index) {
    const newItem = document.createElement("li");
    if (showNumber) {
      newItem.value = index;
    }
    newItem.innerText = value;
    newList.append(newItem);
  });
  newOutput.append(newList);
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", onSubmit);
});