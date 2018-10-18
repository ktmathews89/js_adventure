
# After Variable & Conditionals Sections
# After Functions & Scope Section (3, 4)

* Re-assign Scroll World - Update Variables

# Challenge 1 - choose the correct password to lower the drawbridge [variables, reassignments]
- Create a const variable passwordOne and assign it to string "Insufficient facts always invite danger."
- Create a let variable called passwordTwo and assign it to string "Sometimes a feeling is all we humans have to go on."
- Challenge 1 is to reassign the variable that can be reassigned to a new phrase: "Change is the essential process of all existence." and then console.log() to confirm it is reassigned.

#This will pass the first test, which is to go around a wall.  When they come across an obstacle, the screen should show some text explaining the level.

# Challenge 2 - melt the ice to get through the wall by converting [variables, assigning statements, template literals]
- Oh no!  Looks like we're going to need to generate 820 smarlfUnits (alien temperature units) to melt the ice to get through to the other side of this wall.
- Let's store our smarlfUnits in a constant variable.
- We know that 1 smarlfUnits = 4.45 Kelvin
- Well, I think we can get a Kelvin conversion with that information.  Let's store that in a constant variable called Kelvin. // [const kelvin = smarlfUnits * 4]
- Now since we know Kelvin, let's create a variable called Celsius. Celsius is Kelvin - 273.
- Wait...we also know Fahrenheit = Celsius * (9/5) + 32
- We can now store that in a const variable too called Fahrenheit
- Now, use a template literal to log this: "The temperature we need to melt the ice is TEMPERATURE smarlfUnits, or TEMPERATURE degrees Fahrenheit."

#Challenge 3 - Trick the alien guards by posing as an alien using if else statements

- You come across a mob of alien guards.  They don't look super nice...in fact, that look downright furious.  And they have weird spears in their hands [their 35 hands].  You don't want to mess with them. Your stomach drops, and you dive behind a bush so they don't see you.  You find a vase in the bush as you hide, and pull out a crumbled piece of paper.  It says: "You must pass these guards, but the only way you can do it is to trick them with your code.  You must bribe them with coins and pose as an alien to get through.  If you do not...well, hopefully you don't get to that point."  You remember that you have some coins hidden in your coat, and pull them out and begin to count.  Time to get coding!

// rules
*You must move forward by more than 3000 miles to advance*
*If you pass as an alien and your coins are greater than 700, then should get through*

let isAlien = true
let coinNumber = 300
let moveForwardBy = 2050

- 1. Create a control flow statement that checks whether the being is an alien AND coins are greater than 700.  Add 1000 to the moveForwardBy number if this is true.

// solution
to make it pass:
if (isAlien && coinNumber > 700){
  moveForwardBy += 1000;
}

- 2. Create a separate control flow statement below the first (starting with if again). This statement will check isAlien and coinNumber to determine the outcome for the being.

- 3. For beings with coins over 700 and who are aliens, log a statement to the console telling them that they will pass. Include their moveForwardBy number in the statement.

- 4. For beings with coins less than 700 and who are aliens, log a statement to the console telling them that they will not pass. Include their moveForwardBy number in the statement.

- 5. For beings with coins over 700 and who are not aliens, log a statement to the console telling them that they will not pass. Include their moveForwardBy number in the statement.

- 6. Finally, for all other situations, log a statement to the console telling them that they will not pass. Include their moveForwardBy number in the statement.

// solution
if (isAlien && coinNumber > 700){
  console.log('You will pass. Your will move forward by " + moveForwardBy + ".");
} else if (!isAlien && coinNumber > 700){
  console.log('You will not pass. Your will move forward by " + moveForwardBy + ".");
} else if (isAlien && coinNumber < 700){
  console.log('You will not pass. Your will move forward by " + moveForwardBy + ".");
} else {
  console.log('You will not pass. Your will move forward by " + moveForwardBy + ".");
}

- 7. Reassign the coin number to a new amount to get the outcome needed to pass through the guards.

#Challenge 4 - Change the words on the scrolling panel from "Hello World" to "Goodbye World by creating and calling a function called getAndChangeMessage that takes in a parameter called newMessage and changes the words to the new message."

*Do all of these steps in the chrome console*
- 1. Create a function that takes in one parameter called newMessage and changes the words on the scrolling panel from "Hello World" to "Goodbye World" using document.getElementById('<target id>').innerHTML to target that element.  
Try to use ES6 syntax to create this function.
- 2. The function should assign the innerHTML to the value of newMessage
- 3. Create a constant variable called myMessage and assign it the value of "Goodbye World".
- 3. Then, call your function and pass in myMessage.  See what happens!

//  solution
const myMessage = "Goodbye World";

const getAndChangeMessage = (newMessage) => {
  return document.getElementById('message').innerHTML = newMessage;
};

getAndChangeMessage(myMessage);

#Challenge 5 - write a few functions to get your working hours and your hours of free time

- 1. First, write a function that takes in no parameters that returns the total hours in a week (assuming it is 7 days), called getTotalHours.  Try to write it using ES6 syntax.  Then, log the result of calling function to the console using a template literal that says "Your total hours per week are HOURS.".

// solution -->
const getTotalHours = () => 24 * 7;
console.log(`Your total hours per week are ${getTotalHours()}.`);

- 2. Now, let's see how much time you spend working in a week (assuming it is 5 days) with another ES6 function. Create another function called getTotalWorkingHours, that takes in a parameter called workHours (your work hours each day) with a default parameter of 8 hours (a new ES6 feature) and returns how many total working hours there are in a week.  Print the results of the function call to the console as "Your total working hours are VALUE per week."  Try passing in different hour amounts to the function call and see what happens.

// solution -->
const getTotalWorkingHours = (workHours = 8) => {
  return workHours * 5;
}
console.log(`Your total working hours per week are ${getTotalWorkingHours(10)}.`);

- 3. Let's make a function that gets total hours you have off of work in a week.  Create a function called getTotalHoursFree which has no parameters.  Inside the function block, assign a variable called totalHours to the value of getTotalHours(). Create a variable called totalWorkingHours and assign it to getTotalWorkingHours(10). Return the value of totalHours - totalWorkingHours.  Create a variable called freeTime and assign it the value of calling getTotalHoursFree().  Print the results to the console as "Your total hours off of work are HOURS per week.".

// solution -->
  const getTotalHoursFree = () => {
    const totalHours = getTotalHours();
    const totalWorkingHours = getTotalWorkingHours(10);
    return totalHours - totalWorkingHours;
  }
  const freeTime = getTotalHoursFree();
  console.log(`Your total hours off of work are ${freeTime}.`);



  /////////////////////////////////
  MORE CHALLENGES


* Challenge Make Keys work... if else if challenge


* On Next Level Click ... move spaceship





# After Array, Loops, Iterators (5, 6, 7)



# After Objects & Classes (8, 9)
