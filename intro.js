/*All Questions should be printed to your Browser's console using console.log()*/
/*
QUESTON 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
b..Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
c..Use a loop to iterate through the array and calculate the average age.*////

//SOLUTION:
// step 1: Create an array with given values
var ages = (3, 9, 23, 64, 2, 8, 28, 93);

//step 2: Programmatically subtract the value of the first element in the array from the value in the last element of the array.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
let difference = ages[ages.length - 1] - ages[0]; // Subtract the first element from the last
console.log(difference);

 //step 3: Add a new age to the Array to repeat and to insure the subtraction still works dynamically:
 
 ages.push(50);  // Adding a new age to the array
difference = ages[ages.length - 1] - ages[0]; // Still subtracts the first element from the last
console.log(difference);

//Step 4: Use a loop to iterate through the array and calculate the average age.*////

let total = 0;
for (let i = 0; i < ages .length ;i++){
    total += ages[i];     //Summing all the elements
}
let average = total / ages.length;     // Calculating the average
console.log(average);    //The subtraction between the first and last element is dynamic and works no matter how many elements are in the array.
//I calculate the sum of the array elements inside a loop and then divide it by the array's length to get the average.

/* QUESTION 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/

//SOLUTION:
//Step 1: Create an array called names that contains the following values:'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Step 2: (a)Use a loop to iterate through the array 
//(b) calculate the average number of letters per name.
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length; // Calculate the average 
console.log(averageLetters);


//Step 3: (a)Use a loop to iterate through the array again and concatenate all the names together.
//(b) separated by spaces.*/

//SOLUTION:
let allNames = '';

for (let i = 0; i < names.length; i++) {
    allNames += names[i] + ' ';  // Concatenate each name with a space
}

allNames = allNames.trim();  // Trim the extra space at the end
console.log(allNames);

//QUESTION 3: How do you access the last element of any array?
 // To access the last element of any array , I can use the arrays length property.

 //array[array.length - 1];  //Explanation:
 //array.length gives the total number of elements in the array.
//Subtracting 1 from this length gives the index of the last element, since arrays are zero-indexed (meaning the first element has an index of 0).
 

//SOLUTION:
//Example:
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let lastElement = names[names.length - 1];  // Accessing the last element
console.log(lastElement);  // Result: 'Bob'

//QUESTION 4:
//How do you access the first element of any array?
//To access the first element of any array in,simply use the index 0,as arrays are zero-indexed.


//SOLUTION:
//Example:
var person = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let firstElement = names[0];  // Accessing the first element
console.log(firstElement);  // Result: 'Sam'

//QUESTION 5:
//Create a new array called nameLengths. 
//Step 1: Create a new array called nameLengths
//Step 2: Write a loop to iterate over the previously created names array 
//and add the legthh of each name to the nameLengths array.

//SOLUTION:
let value = ('Indra','Scott','Durey','Meme');
let  nameLengths = (5,3,7,5,3);
for (let i = 0; i < value .length; i++ ){
    nameLengths[i] = value[i].length;  // Add the length of each name to nameLengths
}
console.log(nameLengths);  // Output: [5, 3, 7, 5, 3]

//QUESTION 6:
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

//SOLUTION:
let MemeLengths = [5, 5, 5, 4]; // Example array of name lengths
let totalSum = 0;  // Variable to hold the sum

// Loop through the nameLengths array
for (let i = 0; i < nameLengths.length; i++) {
    totalSum += nameLengths[i];  // Add each element to the totalSum
}

console.log(totalSum);  // result //the total sum

//QUESTION 7:
//Write a function that takes two parameters, word and n, 
//as arguments and returns the word concatenated to itself n number of times.
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

//SOLUTION:
function concatenateWord(word, n) {
    let result = '';  // Initialize an empty string to hold the concatenated result

    for (let i = 0; i < n; i++) {
        result += word;  // Concatenate the word to the result
    }

    return result;  // Return the final concatenated string
}

// Example: usage
console.log(concatenateWord('Hello', 3));  // Output: 'HelloHelloHello'

//QUESTION 8: Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.

//Function Definition:
// 1...Parameters:
//firstName: The person's first name.
//lastName: The person's last name.
///2....Logic:
//Concatenate the firstName and lastName with a space in between.

//SOLUTION:
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;  // Concatenate first and last name with a space
}

console.log(getFullName('Durey', 'Shehwar'));  // Result: 'Durey Shehwar'
//Explanation:   .....Concatenation....
//The expression firstName + ' ' + lastName combines the two names into a single string, with a space ' ' between them.
////........Return.......
//The function returns the full name as a single string.
console.log(getFullName('Mamo', 'Mami'));  // Result: 'Mamo Mami'
console.log(getFullName('Pohpo', 'Pohpa'));     // Result:'Pohpo Pohpa'
//This will give you the full name for each set of first and last names you provide!

//QUESTION 9:Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

//SOLUTION:
function isSumGreaterThan100(arr) {
    // Calculate the sum of all numbers in the array
    const sum = arr.reduce((acc, num) => acc + num, 0); //This function uses the reduce method to sum up all the elements in the array,and then checks if the result is greater than 100.

    // Return true if the sum is greater than 100, otherwise false
    return sum > 100;
}
console.log(isSumGreaterThan100([50, 30, 20, 10])); //false
console.log(isSumGreaterThan100([60, 40, 5]));     //true

//QUESTION 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.

//SOLUTION:
function getAverage(arr) {

    // Check if the array is empty to avoid division by zero
    if (arr.length === 0) return 0;

    // Calculate the sum of all numbers in the array
    const sum = arr.reduce((acc, num) => acc + num, 0);

    // Return the average by dividing the sum by the length of the array
    return sum / arr.length;
}
console.log(getAverage([10, 20, 30, 40])); // 25
console.log(getAverage([5, 15, 25]));      // 15
console.log(getAverage([]));               // 0 (for an empty array)

//QUESTION 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//SOLUTION:
function compareAverages(arr1, arr2) {
    
function getAverage(arr) {
        if (arr.length === 0) return 0;
        const sum = arr.reduce((acc, num) => acc + num, 0);
        return sum / arr.length;
    }

    // Calculate the averages of both arrays
    const avg1 = getAverage(arr1);
    const avg2 = getAverage(arr2);

    // Return true if the average of arr1 is greater than the average of arr2
    return avg1 > avg2;
}
console.log(compareAverages([10, 20, 30], [5, 15, 25])); // true (average of first array: 20, second: 15)
console.log(compareAverages([5, 10], [15, 20, 25]));     // false (average of first array: 7.5, second: 20)
console.log(compareAverages([1, 2], [2, 3]));            // false

//QUESTION 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//SOLUTION:
function willBuyDrink (isHotOutside,moneyInPocket){
    // Return true if it's hot outside and money in pocket is greater than 10.50
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 15));   // true (it's hot and money > 10.50)
console.log(willBuyDrink(true, 10));   // false (it's hot but money <= 10.50)
console.log(willBuyDrink(false, 20));  // false (it's not hot outside)


//QUESTION 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//SOLUTION:
function isEven(number) {
    // This function checks if a number is even
    // It returns true if the number is even, and false if the number is odd

    return number % 2 === 0;
}

// Example usage:
console.log(isEven(4));  // true (4 is even)
console.log(isEven(7));  // false (7 is odd)

//Question: 14 
