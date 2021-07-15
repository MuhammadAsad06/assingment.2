/*CHAPTER 35-38*/

// 1. Write a function that displays current date & time in your browser.
/*
function currentTime(){
    var date = new Date;
    alert(date);
}
currentTime();
*/

// 2. Write a function that takes first & last name and then it greets the user using his full name.
/*
function greeting(){
    var firstname = prompt('Enter you first name');
    var lastname = prompt('Enter you Last name');
    alert('Welcome '+firstname +' '+lastname);
}
greeting();
*/

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
/*
function addition(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter Second number');
    var total = num1 + num2;
    return total;
}
var total = addition();
alert(total);
*/

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

/*
function calculator(){
    alert('1: For Addition'+'\r\n'+'2: For Subtraction'+'\r\n'+'3: For Multiplication'+'\r\n'+'4: For Division'+'\r\n');
    
    var choice = +prompt('Enter your choice');
    
    switch (choice) {
        case 1:
            add();
            break
            case 2:
                sub();
                break
                case 3:
                    mul();
                    break
                    case 4:
                        div();
                        break
                        
                        default:
                            alert('you have entered wrong choice')
                        }
function add(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter Second number');
    var total = num1 + num2;
    total = total.toFixed(2);
    alert(total);
}
function mul(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter Second number');
    var total = num1 * num2;
    total = total.toFixed(2);
    alert(total);
}
function sub(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter Second number');
    var total = num1 - num2;
    total = total.toFixed(2);
    alert(total);
}
function div(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter Second number');
    var total = num1 / num2;
    total = total.toFixed(2);
    alert(total);
}
}
calculator();
*/

// 5. Write a function that squares its argument.
/*
function square(num){
    alert(num*num);
}
square(prompt('Enter the number to find it square'));
*/

// 6. Write a function that computes factorial of a number.
/*
var userInput;
var num;
var i =1;
var fact;
function myFactor (num){    
  fact = num * i;
  for (i; i < num; i++) {
    fact = fact * i;
  }
  return fact
}
var result;
userInput = prompt("Enter Value:","");  
num = parseInt (userInput);         
result = myFactor(num);
document.write(result);
*/


// 7. Write a function that take start and end number as inputs & display counting in your browser.
/*
function counting(){
    var num1 = prompt('enter the first number');
    var num2 = prompt('enter the Second number');
    // alert(num1);
    while (num1 <= num2)
    {
        document.write(num1);
        num1++;
    }
} 
counting();
*/

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
/*
var base;
var perpendicular;
function calculateHypotenuse(){
    base = prompt('Enter the value of base');
    perpendicular = prompt('Enter the value of perpendicular');
    hyp= (perpendicular * perpendicular) + (base * base);
    alert('The hypotenuse is '+ hyp);
}
calculateHypotenuse();
*/

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
/*
(i)
function Areaofrectangle(){
    var width = prompt('Enter the width to find the area');
    var height = prompt('Enter the height to find the area');
    var A = width * height;
    alert(A);
}
Areaofrectangle();
(ii)
function Areaofrectangle(width,height){
    var A = width * height;
    alert(A);
}
Areaofrectangle(prompt('Enter the width to find the area'),prompt('Enter the height to find the area'));
*/

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// Write a JavaScript function that checks whether a passed string is palindrome or not? 
/*
function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            console.log("Nothing found!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    check_Palindrome(prompt('enter the string is palindrome'));
*/

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

/*
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase(prompt('Enter the string to convert first letter of every word')));
*/


// 12. Write a JavaScript function that accepts a string as a parameter and
// find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

/*
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word(prompt('Enter the string to find the longest word in string')));
*/

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and
// the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'
/*
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
console.log(char_count(prompt('Enter the string'),prompt('Enter the letter to count it string')));
*/

// 14. The GeometrizerCreate 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr

/*
function calcCircumference(radius){
    var circumference = 2 * 3.142 * radius;
    alert('The circumference of the circle is: '+ circumference);
}
calcCircumference(prompt('enter the radius to calculate the circumference of the string'));*/
/*
function calcArea(radius){
    var area =  3.142 * radius;
    area = area.toFixed(2);
    alert('The Area of the circle is: '+ area);
}
calcArea(prompt('Enter the radius to calculate the area of the string'));
*/