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

Describe: convertNumber()

Test: "It should return false if the number provided is less than or equal to 0."
Code:
const input = 0;
convertNumber(input);
Expected Output: false