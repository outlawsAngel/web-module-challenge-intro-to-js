/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS INSIDE OF A FUNCTION (tasks 1d through task 7), IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

// task 1a, 1b, and 1c are not autograded

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age (not auto tested)

Do the following:   
   1. Create a variable called votingAge and assign it a number value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
const votingAge = 21;
if(votingAge >= 18) {
  console.log(true);
} 



/*
Task 1b - Values (not auto tested)

Do the following:   
   1. Declare two variables and assign them values (good names for these might be firstThing and secondThing)
   2. Use a conditional to check the value of the 1st variable versus the value assigned to the 2nd variable
   3. Change the value of the 1st variable if the conditional in step 2 is true
   4. Console log the value of the 1st variable

   HINT: no function required
*/

let firstThing = 'start';
let secondThing = 'start';
if(firstThing === secondThing) {
  secondThing = 'finish';
  console.log(firstThing);
}



/*
Task 1c - Convert Strings to Numbers (not auto tested)

Do the following:   
   1. Declare a variable with the string type value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

let year = "1999";
year = Number(year);
console.log(year);

/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(num1, num2){
  return num1 * num2;
}

multiply(3, 10);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
 1. Invoke the dogYears function below and pass an age value to it
 2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
 3. Return the newly calculated age
*/

function dogYears(age){
  const years = age * 7;
  return years;
}

dogYears(36);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
1. Invoke the hungryDog function below and pass it a weight value in pounds, followed by an age value in years
2. 🌟 NOTE: if the dog is a puppy, the age will be a decimal (rounded to two places). For example: 3 months = .25 (3 divided by 12)
3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day

REMEMBER: This program should handle correctly adult AND puppy ages and weights
HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters

Feeding Requirements:

Adult Dogs 1 year and older 
   up to 5 lbs - 5% of their body weight
   6 - 10 lbs - 4% of their body weight 
   11 - 15 lbs - 3% of their body weight 
   > 15lbs - 2% of their body weight 

Puppies less than 1 year
   2 - 4 months 10% of their body weight
   4 - 7 months 5% of their body weight 
   7 - 12 months 4% of their body weight
  
NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
NOTE 2: This is a great time to check the tests to see what it expects, versus what is actually 
        returned from your function. This is an example of the output to look for on each test point. 
          ● hungryDogFunction › Dog is 1 year and is 5lbs or less

            expect(received).toBe(expected) // Object.is equality

            Expected: 0.2
            Received: undefined

              21 | describe('hungryDogFunction', ()=>{ 
              22 |   it('Dog is 1 year and is 5lbs or less', ()=>{
            > 23 |     expect(functions.hungryDog(4, 1)).toBe(0.2);
                |
          ^
              24 |   })
      
        Notice the expected and received, expected is what the test is looking for, and received is what was actually returned from this function. You can also see it's passing in two values, the number 4 and the number 1. 
        So, on this one test, the weight would be 4 pounds, and the age would be 1 years old. It's expecting your function to return a decimal number of 0.2
*/  

function hungryDog(weight, age){
  let food;
  if(age >= 1){
    if(weight > 15){
      food = 0.02 * weight;
    }
    if(weight <= 15 && weight > 10){
      food = 0.03 * weight;
    }
    if(weight <= 10 && weight > 5){
      food = 0.04 * weight;
    }
    if(weight <= 5){
      food = 0.05 * weight;
    }
  } else if (age < 1 && age >= 0.58) {
    food = 0.04 * weight;
  } else if(age < 0.58 && age >= 0.33){
    food = 0.05 * weight;
  } else if (age < 0.33 && age >= 0.17){
    food = 0.1 * weight;
  }
  return food;
}
hungryDog(4, 1);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Do the following:
1. Create a new variable that randomly generates the computer's choice, this must not be done inside the function
2. Use Math.random to determine the computer's choice (Math.random gives a random number between 0 and 1)
3. Make a conditional that changes the variable to "rock", "paper", or "scissors" based on it's random number

Use the game function below to do the following:
1. Receive 2 parameters: a string with the user's choice of "rock", "paper", or "scissors" 
   and the computer's choice of "rock", "paper", or "scissors".
   Note: make sure the strings are all lower case or it will not pass the test
2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match these strings below exactly.
 - win should return "you win!"
 - lose should return "you lose!"
 - tie should return "it's a tie"

RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
*/
const random = Math.ceil(Math.random() * 3)
let computerChoice;
if(random === 1){
  computerChoice = 'rock';
} else if(random === 2){
  computerChoice = 'paper';
} else if(random === 3){
  computerChoice = 'scissors'
}

function game(user, computer){
  console.log(user, computer);
  if(user === computer){
    return "it's a tie";
  } else{
    if(user === 'rock' && computer === 'scissors'){
      return 'you win!';
    }else if(user === 'rock' && computer === 'paper'){
      return 'you lose!';
    }else if(user === 'paper' && computer === 'rock'){
      return 'you win!';
    }else if (user === 'paper' && computer === 'scissors'){
      return 'you lose!';
    }else if (user === 'scissors' && computer === 'paper'){
      return 'you win!';
    }else if (user === 'scissors' && computer === 'rock'){
      return 'you lose!';
    }
  }
}

console.log(game('rock', computerChoice));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - Kilometers to Miles 
/*
Using the miles function below do the following:
1. Receive a number of kilometers
2. Convert the number of kiolmeters received to miles
3. Return the number of miles
*/

function miles(km){
  let miles = km * 0.621371;
  return miles
}

miles(15);


//Task 5b - Centimeters to Feet
/*
Using the feet function below do the following:
1. Receive a number of cm
2. Convert the number of cm to feet
3. Return number of feet
*/

function feet(cm){
  let feet = cm/30.48;
  return feet;
}

feet(200);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
1. Receive a starting number
2. The annoying song function should return the following string exactly one time:

    "{number you gave as an argument} bottles of soda on the wall, {number you gave as an argument} bottles of soda, take one down pass it around {number you gave as an argument minus 1} bottles of soda on the wall"

3. Outside of the function, Make a loop that invokes annoying song with a number that decreases until it gets to 1 bottle left. 
4. Each time the annoyingSong is run from this loop, it should console.log the string that was returned. 
*/

function annoyingSong(number){
      let newNumber = number - 1;
      return number + " bottles of soda on the wall, " + number + " bottles of soda, take one down pass it around " + newNumber + " bottles of soda on the wall";
}

annoyingSong(99);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
1. Receive a score out of 100 
2. Return the corresponding letter grade following this grade scale:

 90-100 should return 'you got an A' 
 80-89 should return 'you got a B'
 70-79 should return 'you got a C'
 60-69 should return 'you got a D'
 below should return 'you got an F'
*/

function grade(grade){
  console.log(grade);
  if(grade <= 100 && grade >= 90) {
    return 'you got an A';
  } else if ( grade <90 && grade >= 80){
    return 'you got a B';
  } else if ( grade < 80 && grade >= 70){
    return 'you got a C';
  } else if ( grade < 70 && grade >= 60){
    return 'you got a D';
  } else if(grade < 60){
    return 'you got an F';
  }
}

grade(59);



/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
1. Receive a string as a parameter
2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

HINT - you may need to study tomorrow's content on arrays 
HINT - try looking up the .includes() method
*/


function vowelCounter(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for(let letters of string.toLowerCase()){
    if(vowels.includes(letters)){
      count++;
    }
  }
  console.log(count);
}

vowelCounter('This is a test sentence made by Kim and Earl');


/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
module.exports = {
  foo,
  multiply,
  dogYears,
  hungryDog,
  game,
  miles,
  feet,
  annoyingSong,
  grade
}
