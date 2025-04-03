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
  }
}

function convertNumber(number) {
  if (number <= 0) {
    return false;
  }
}