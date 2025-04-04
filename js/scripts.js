// business logic

function hasNumber(fullNumber, number) {
  return fullNumber.toString().includes(number);
}

function replaceLettersInString(baseString, replaceWith) {
  return replaceWith.repeat(baseString.length);
}

function changeNumber(number) {
  if (number === 13 || number === 32) {
    return "Won't you be my neighbor?";
  } else if (number === 21) {
    return "Boop";
  } else if (hasNumber(number, "1")) {
    return replaceLettersInString(number.toString(), "Beep!");
  } else if (hasNumber(number, "2")) {
    return replaceLettersInString(number.toString(), "Boop!");
  } else if (hasNumber(number, "3")) {
    return replaceLettersInString(number.toString(), "Won't you be my neighbor?");
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
  const convertedInput = convertNumber(document.getElementById("input").value);
  const newOutput = createNewOutput();
  if (!convertedInput) {
    const warning = document.createElement("p");
    warning.innerText = "Input a valid number.";
    newOutput.append(warning);
    return;
  }
  const newList = document.createElement("ul");
  convertedInput.forEach(function(value) {
    const newItem = document.createElement("li");
    newItem.innerText = value;
    newList.append(newItem);
  });
  newOutput.append(newList);
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", onSubmit)
});