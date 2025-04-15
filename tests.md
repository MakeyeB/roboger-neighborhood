Describe: hasNumber()

Test: "It should return true if the second number provided is at any location in the first number provided."
Code:
const findFrom = 24;
const toFind = 2;
hasNumber(findFrom, toFind);
Expected Output: true

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

Test: "It should return a string version of the number provided if the number meets none of the requirements."
Code:
const input = 47;
changeNumber(input);
Expected Output: '47'

Describe: convertNumber()

Test: "It should return false if the number provided is less than or equal to 0."
Code:
const input = 0;
convertNumber(input);
Expected Output: false

Test: "It should return an array of values returned by the changeNumber function between 0 and the number provided."
Code:
const input = 5;
convertNumber(input);
Expected Output: ['0', 'Beep!', "Won't you be my neighbor?", '4', '5']