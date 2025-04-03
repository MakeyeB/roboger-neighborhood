// business logic

function hasNumber(fullNumber, number) {
  return fullNumber.toString().includes(number);
}

function changeNumber(number) {
  if (number === 13) {
    return "Won't you be my neighbor?";
  } else if (number === 21) {
    return "Boop";
  }
}

function convertNumber(number) {
  if (number <= 0) {
    return false;
  }
}