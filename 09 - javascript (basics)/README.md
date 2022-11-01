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

## Comparison Operators
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

## Logical Operators
Given that `x = 6` and `y = 3`, the table below explains the logical operators.

| Operator | Description | Example |
|:--------:|:-----------:|:--------|
| && | and | (x < 10 && y > 1) is true |
| || | or | (x == 5 || y == 5) is false |
| ! | not | !(x == y) is true |