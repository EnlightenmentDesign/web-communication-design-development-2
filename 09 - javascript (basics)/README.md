# JavaScript Basics

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

Many operations in the language that don’t produce a meaningful value (you’ll see some later) yield undefined simply because they have to yield some value.

The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable.

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
* [Programiz](https://www.programiz.com/javascript/comparison-logical)
* [W3Schools](https://www.w3schools.com/js/js_comparisons.asp)