// This is a comment 

/* An example of 
multiline comment 
*/


// Statements are syntax constructs and commands that perform actions 

alert('Hello'); 

// Semicolons may be omitted in most casses when a line break exists
alert('Hello')

/* JavaScript recognizes that the line doesn't end with a "+"
it is considered an "incomplete expression", so semicolon is not 
required */

alert(3 + 
1 + 
2);

/* There are situations where JavaScript "fails" to assume a semicolon
where it is really needed. */

alert("There will be an error")

[1, 2].forEach(alert)

// No error: 

alert("All fine now");

[1, 2].forEach(alert)


/* The error in the no-semicolon variant occurs because JavaScript does not 
 assume a semicolon before square brackets [..] */


// If statements 

/* The if (…) statement evaluates the expression in its parentheses and 
 converts the result to a boolean */


let year = prompt('What year was your instructor born?', '');

if (year == 1989) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
  }


// "else" clause 

let year = prompt('What year was your instructor born?', '');

if (year == 1989) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

// "else if " clause 

let year = prompt('What year was your instructor born?', '');

if (year < 1989) {
  alert( 'Too early...' );
} else if (year > 1989) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}


// Conditional operator 

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

/* Assign a variable depending on a condition. 
The so-called "conditional" or "question mark" 
operator lets you do that */

// let result = condition ? value1 : value2;

let accessAllowed = (age > 18) ? true : false;

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

