// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(x, y) {
    if (x > y) {
        return x + " is the largest number";
    } else if (x < y) { 
         
        return y + " is the largest number";
    } else {
        return "The numbers are equal"       
        
    }
  }

max(11,100);


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    var vowels = [a, e, i, o, u];
    var words = prompt("What is your letter");
    
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(a,b) 
{ 
    return a + b;     
}

sum(2,9);



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function sum(a,b,c) 
{ 
    return (a + b + c)/3;     
}

sum(2,9,14);


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A: 
function getLength(x) 
{
  return x.length; 
  
}
getLength("Gary")



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(a,b) 
{
  if (b > a) 
  {
    return true; 
  } else 
  {
    return false; 
  }
}
greaterThan(9,3); 


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name)
{
  return "Hello " + name;
}
greet("Gary");


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlibs(noun,verb,adjective,object)
{
  return "The " + noun + " " + verb + " " + adjective + "over the " + object; 
}
madlibs("cow", "jumped", "quickly", "fence");