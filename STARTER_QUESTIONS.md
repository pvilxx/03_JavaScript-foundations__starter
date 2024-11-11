# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

JavaScript makes websites interactive—stuff like button clicks, pop-ups, and content changes without reloading the page. Originally, it just ran in browsers, but now it can work on servers too. It’s everywhere on the web, making sites feel way less static and more like apps.

## About values

### What is a primitive value?

A primitive value is a basic, single piece of data in programming—like a number, string, or boolean.

```js
const foo = 54
const bar = "hello"
const baz = true
```

### Which are primitive values? Explain them with at least one example for primitive.

In JavaScript, primitive types include number(like 42 or 5), string (a text, "like this"), boolean (True or False), null (No value, empty), undefined (Not set, like let = x), bigint (Super large numbers like 123456789), and symbol (A unique identifier like 'id').

```js
const numxl = 81723871
```

## About variables

### What is a variable in JS?

A variable is a piece of code we assign a value to. 

```js
const variable = 10 
```

### How many ways can we define a variable in JS? Is there any not recommended way?
The different variable types we have in javascript are let, const and the now obsolete var. Let is used for variables that will change its value over time, while we assign const to variables that will never change it's value. Var is unused nowadays because of the integration of let and const, since they are just better to define variables.

### Which are the most used var naming conventions in JS?

the most used are camelCase(for variables) and PascalCase(for classes), snake_case(used for some json data), UPPER_SNAKE_CASE(used for constants)

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

* == Equal value, ignores type
```js
5 == "5"; True
```
* === checks if value and type are equal
```js
5 === "5"; False
```
* != checks if values are different
```js
5 != "6"; True
```
* !== checks if values or types are different
```js
5 !== "5"; True
```
* ">" greater than
```js
10 > 5; True
```
* < less than
```js
10 > 5
```
* ">=" greater or equal than
```js
8 >= 8; True
```
* <= less or equal than
```js
4 <= 5; True
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

&& (AND): Returns true if both sides are true.
|| (OR): Returns true if at least one side is true.
! (NOT): Reverses the truth value. If it's true, it becomes false; if it's false, it becomes true.
