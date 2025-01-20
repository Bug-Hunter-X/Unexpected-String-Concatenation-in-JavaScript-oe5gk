# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript error: unexpected string concatenation due to loose typing.  The `foo` function is intended to add two numbers, but it concatenates them as strings if one of the inputs is a string.

## Bug

The `bug.js` file contains the function `foo`, which demonstrates the unexpected behavior. 

## Solution

The `bugSolution.js` file provides a solution using type checking or explicit type conversion to ensure the inputs are numbers before performing addition.