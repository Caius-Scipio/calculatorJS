# Calculator - An Advanced Calculator made with JavaScript

The REACT version of the simple calculator was the catalyst for this project as it was one of the projects I made along the way to get META's Front-End Developer Professional Certificate.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Changes made](#changes-made)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge was simple: 
  - Create a simple calculator in React 
  - Perform four basic mathematical operations: 
    - addition
    - subtraction
    - multiplication
    - division

### Screenshot

Simple Calculator using React and JavaScript:

![](img/META-5-Details.png)

Advanced Calculator using JavaScript:

![](img/Advanced-Calculator-JS-thumnail.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- REACT

### Changes made

This game was modeled after the Head First Battleship game found within their JavaScript Programming book. However, here are the changes I made to make it uniquely mine:

While working my way through the META certification course, most of the simple REACT calculator app was set up: CSS, file structure, and HTNL. I was responsible for making the code to make the calculator function properly.

After the course, I translated the same code from REACT to vanilla JavaScript. So those two calculators function identically.

Knowing that this little guy could do more, I set about adding functionality with the advanced JavaSscript calculator:
  - created a background
  - styled it more like a calculator
  - gave it a screen
  - added the factorial function
  - added the exponent function
  - added the square root function
  - added the percent function
  - used a more Object Oriented method

### What I learned

Making this game was a pleasure, and if I had to summarize the three major takeaways, I'd have to say:
- Learned the debug feature of my editor, finally
- Refactoring code to be less verbose
- How data tags can be used in JavaScript

Here is some code I am particularly proud of, or think was interesting:

```html
<button data-operation>√</button>
```
```css
.output {
  .
  .
  .
  word-wrap: break-word;
  word-break: break-all;
}
```
```js
if (isNaN(prev)) return;
  switch (this.operation) {
    case "+":
      if (isNaN(current)) {
        return;
      } else {
        computation = prev + current;
        break;
      }
```

### Continued development

This ccalculator is not quite done yet. Here are some things I'd like to do in the future with it:
  - Add the parenthesis functionality
  - Add the trigonometric functionality
  - Turn in into a simple graphing calculator

### Useful resources

- [META](https://www.coursera.org/professional-certificates/meta-front-end-developer) - This is where I got the project started from.
- [w3schools](https://www.w3schools.com/) - My reference to remember the syntax and possibilites.

## Author

- Website - [Caius Scipio](https://caius-scipio.github.io/Portfolio/)
