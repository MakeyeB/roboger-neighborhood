Describe: hasNumber()

Test: "It should return true if the second number provided is at any location in the first number provided."
Code:
const findFrom = 24;
const toFind = 2;
hasNumber(findFrom, toFind);
Expected Output: true

Describe: replaceLettersInString()

Test: "It should return the second string provided repeated for each letter in the first string provided."
Code:
const firstWord = "Hello!";
const convertTo = ".";
replaceLettersInString(firstWord, convertTo);
Expected Output: '......'

Describe: changeNumber()

Test: "It should return "Won't you be my neighbor?" if the number 13 is provided."
Code:
const input = 13;
changeNumber(input);
Expected Output: "Won't you be my neighbor?"

Test: "It should return 'Boop' if the number 21 is provided."
Code:
const input = 21;
changeNumber(input);
Expected Output: 'Boop'

Test: "It should return "Won't you be my neighbor?" if the number 32 is provided."
Code:
const input = 32;
changeNumber(input);
Expected Output: "Won't you be my neighbor?"

Test: "It should return 'Beep!' repeated per each number provided if the number has 1 in it."
Code:
const input = 11;
changeNumber(input);
Expected Output: 'Beep!Beep!'

Test: "It should return 'Boop!' repeated per each number provided if the number has 2 in it."
Code:
const input = 22;
changeNumber(input);
Expected Output: 'Boop!Boop!'

Test: "It should return 'Won't you be my neighbor?' repeated per each number provided if the number has 3 in it."
Code:
const input = 33;
changeNumber(input);
Expected Output: "Won't you be my neighbor?Won't you be my neighbor?"

Describe: convertNumber()

Test: "It should return false if the number provided is less than or equal to 0."
Code:
const input = 0;
convertNumber(input);
Expected Output: false