# JavaScript Basics

## Embedding JavaScript
There are different ways to embed JavaScript in an HTML page.

### Inline
```
<a id="button" href="#" onclick="alert('Hello World')">Click Me</a>
```
What do you think is the downside of using this method?

### Code block
```
<script>
    button = document.getElementById('Button');
    button.addEventListener("click", function(){
        console.log("Hello World!");
    });
</script>
```
What do you think is the downside of using this method?

### External
```
<script src="js/scripts.js" type="text/javascript"></script>
```
This is preferred, why?
<br />
<br />
<hr />
<br />
<br />

## Highly Recommended
I would highly recommend reading [Eloquent Javascript](https://eloquentjavascript.net/) if you are interested in learning more about JavaScript. Most of the exercises and information comes directly from this online book.

## Values
JavaScript values are broken down into:

### Numbers
Just as the name, the number type are just numbers.
* 13
* 9.81
* 2.998e8 (2.998 x 10^8 = 299,800,000)

The main purpose of numbers is **Arithmetic**, or basic math calculations.
JavaScript follows the [PEMDAS](https://www.cuemath.com/numbers/pemdas/) pattern. Please make sure to read it.
* 100 + 4 * 11
* (100 + 4) * 11

There are also some *special numbers* like "Infinity"


### Strings
Strings are used to represent text. They are written by enclosing their content in quotes.
* "The quick brown fox jumps over the lazy dog"
* 'The quick brown fox jumps over the lazy dog'

### Boolean Values
This represents either `true` or `false`, `1` or `0`, `on` or `off`, and `yes` or `no`.
* console.log(3 > 2) // true
* console.log(3 < 2) // false

### Comparison Operators
Given that `x = 5`, the table below explains the comparison operators:

| Operator | Description | Comparing | Returns |
|----------|:------------|:----------|:-------:|
|==| equal to | x == 8<br />x == 5<br />x == "5"|false<br />true<br />true|
|===| equal value and equal type | x === 5<br />x === "5"|true<br />false|
|!=| not equal to | x != 8|true|
|!==| not equal value and not equal type | x !== 5<br />x !== "5"<br />x !== 8|false<br />true<br />true|
|>| greater than | x > 8 | false |
|<| less than | x < 8 | true |
|>=| greater than or equal to | x >= 8 | false |
|<=| less than or equal to | x <= 8 | true |

### Logical Operators
Given that `x = 6` and `y = 3`, the table below explains the logical operators.

| Operator | Description | Example |
|:--------:|:-----------:|:--------|
| && | and | (x < 10 && y > 1) is true |
| \|\| | or | (x == 5 || y == 5) is false |
| ! | not | !(x == y) is true |

### Empty Values (Straight copy from Eloquent JavaScript)
There are two special values, written `null` and `undefined`, that are used to denote the absence of a meaningful value. They are themselves values, but they carry no information.

Many operations in the language that don't produce a meaningful value (you'll see some later) yield undefined simply because they have to yield some value.

The difference in meaning between undefined and null is an accident of JavaScript's design, and it doesn't matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable.

## Practice
Let's compare the following examples

### Equal to Operator
```
const a = 5, b = 2, c = 'hello';

// equal to operator
console.log(a == 5);     // true
console.log(b == '2');   // true
console.log(c == 'Hello');  // false
```

### Not Equal to Operator
```
const a = 3, b = 'hello';

// not equal operator
console.log(a != 2); // true
console.log(b != 'Hello'); // true
```

### Strict Equal to Operator
```
const a = 2;

// strict equal operator
console.log(a === 2); // true
console.log(a === '2'); // false
```

### Strict Not Equal to Operator
```
const a = 2, b = 'hello';

// strict not equal operator
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(b !== 'Hello'); // true
```

### Greater than Operator
```
const a = 3;

// greater than operator
console.log(a > 2); // true
```

### Greater than or Equal to Operator
```
const a = 3;

// greater than or equal operator
console.log(a >= 3); //true
```

### Less than Operator
```
const a = 3, b = 2;

// less than operator
console.log(a < 2); // false
console.log(b < 3); // true
```

### Less than or Equal to Operator
```
const a = 2;

// less than or equal operator
console.log(a <= 3) // true
console.log(a <= 2); // true
```

### Logical AND Operator
```
const a = true, b = false;
const c = 4;

// logical AND
console.log(a && a); // true
console.log(a && b);  // false

console.log((c > 2) && (c < 2)); // false
```

### Logical OR Operator
```
const a = true, b = false, c = 4;


// logical OR
console.log(a || b); // true
console.log(b || b); // false
console.log((c>2) || (c<2)); // true
```

### Logical NOT Operator
```
const a = true, b = false;

// logical NOT
console.log(!a); // false
console.log(!b); // true
```

Other important reads:
* [Programiz - JavaScript Comparison and Logical Operators](https://www.programiz.com/javascript/comparison-logical)
* [W3Schools - JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)
<br />
<br />
<hr />
<br />
<br />

## JavaScript if, else, and else if
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

* Use `if` to specify a block of code to be executed, if a specified condition is true
* Use `else` to specify a block of code to be executed, if the same condition is false
* Use `else if` to specify a new condition to test, if the first condition is false
* Use `switch` to specify many alternative blocks of code to be executed

### The if Statement
Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.
```
if (condition) {
  //  block of code to be executed if the condition is true
}
```

#### Example
```
let greeting = '';
const hour = 10;

if (hour < 18) {
  greeting = "Good day";
}

console.log(greeting);
```

### The else Statement
Use the `else` statement to specify a block of code to be executed if the condition is false.
```
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```

#### Example
```
let greeting = '';
const hour = 19;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);
```

### The else if Statement
Use the `else if` statement to specify a new condition if the first condition is false.
```
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

#### Example
```
let greeting = '';
const hour = 21;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);
```

### The JavaScript Switch Statement
Use the `switch` statement to select one of many code blocks to be executed.
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
This is how it works:
* The switch expression is evaluated once.
* The value of the expression is compared with the values of each case.
* If there is a match, the associated block of code is executed.
* If there is no match, the default code block is executed.

#### Example
```
let day = '';

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day);
```

#### The break Keyword
When JavaScript reaches a `break` keyword, it breaks out of the switch block.

This will stop the execution inside the switch block.

It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

#### The default Keyword
The `default` keyword specifies the code to run if there is no case match:
```
let text = '';

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

console.log(text);
```

The `default` keyword does not have to be the last case in a switch block.

#### Switching Details
If multiple cases matches a case value, the **first** case is selected.

If no matching cases are found, the program continues to the **default** label.

If no default label is found, the program continues to the statement(s) **after the switch**.

#### Strict Comparison
Switch cases use **strict** comparison (===).

The values must be of the same type to match.

A strict comparison can only be true if the operands are of the same type.

In this example there will be no match for x:
```
let text = '';
let x = "0";

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

console.log(text);
```

[W3Schools - JavaScript if, else, and else if](https://www.w3schools.com/js/js_if_else.asp)
[W3Schools - The JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)
<br />
<br />
<hr />
<br />
<br />

## Loops
### *while* Loops
The purpose of the while loop is to allow something to keep repeating while something else is *true*.

For example, we can do a counter that keeps adding 2 as long as the number is less than 100.

```
let number = 0;

while(number <= 100){
  console.log(`The Number is ${number}`);
  number += 2;
}
```

#### *do while* Loop
This is a variant of the *while* loop that runs the *do* or action first and then checks *while*. This would ensure that the loop is executed at least once, even if the condition is false.

```
let number = 0;

do{
  console.log(`The Number is ${number}`);
  number += 2;
}
while(number <= 100);
```

[W3Schools - JavaScript While Loop](https://www.w3schools.com/js/js_loop_while.asp)

### *for* Loops
*for* loops do the same function as *while* loops. However, it follows this pattern:
```
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

For example, if we follow the example above we can do a counter that keeps adding 3 as long as the number is less than 100.

```
for(let number = 0; number <=100; number += 3){
  console.log(`The Number is ${number}`);
}
```

We could also write it this way:
```
for(let number = 0; ; number += 3){
  if(number > 100){
    break
  }
  console.log(`The Number is ${number}`);
}
```

* [W3Schools - JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp)


#### Updating Bindings
You may have seen that there are a few symbols that we are using above that I have not gone into detail. Let me clarify them now.

| Symbol | Description | Example &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|:-------|:------------|:--------|
| += | This would be the same as `number = number + 2` | number = 0;<br />number = number + 2; // 2<br />number += 2 |
| ++ | Increment Operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed. | let x = 3;<br />const y = x++;<br /><br />console.log(\`x:${x}, y:${y}\`);<br />// expected output: "x:4, y:3"<br /><br />let a = 3;<br />const b = ++a;<br /><br />console.log(\`a:${a}, b:${b}\`);<br />// expected output: "a:4, b:4" | 
| -- | Decrement Operator decrements (subtracts one from) its operand and returns the value before or after the decrement, depending on where the operator is placed. | let x = 3;<br />const y = x--;<br /><br />console.log(\`x:${x}, y:${y}\`);<br />// expected output: "x:2, y:3"<br /><br />let a = 3;<br />const b = --a;<br /><br />console.log(\`a:${a}, b:${b}\`);<br />// expected output: "a:2, b:2"
| \` \` | Template literals are literals delimited with backtick (\`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates. | \`string text\`<br /><br />\`string text line 1<br /> string text line 2\`<br /><br />\`string text ${expression} string text\` |


* [mdn web docs - Increment (++)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
* [mdn web docs - Decrement (--)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
* [mdn web docs - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

# Exercises
Write a loop that makes seven calls to console.log to output the following triangle (try it with both for and while loops):


\#<br />
\##<br />
\###<br />
\####<br />
\#####<br />
\######<br />
#######<br />

You would need to read more about: [length](https://www.w3schools.com/jsref/jsref_length_string.asp)

### FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

You would need to read more about: [Remainder (%)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)