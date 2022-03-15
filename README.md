# Arithmetical Expression Interpreter
### This is a simple interpreter written in JavaScript. This Interpreter doesn't involve advanced parsing and lexing techniques and it is really straightforward.
###   This Interpreter is not practical for a real use case because of how simple it is. This is for learning purposes only.

## **Features:**
### - _Addition_
### - _Subtraction_
### - _Multiplication_
### - _Division_
### - _Parantheses_

## **Operators:**
### - _Plus (+):_ for Addition
### - _Minus (-):_ for Subtraction
### - _Asterisk (*):_ for Multiplication
### - _Slash (/):_ for Division

## **Usage**
### Open index.html in your browser write your Arithmetical Expression in the textbox and click run. If nothing happens check the console to see if there is a syntax error.

## **Code Explanation**
### First lets talk about a little interpreter design.
![InterpreterPhases](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fruslanspivak.com%2Flsbasi-part13%2Flsbasi_part13_img03.png&f=1&nofb=1)
### You can see the phases of a simple interpreter from above. Of course our Interpreter is much simpler than this so We don't have a Semantic Analyzer stage or an AST (Abstract Syntax Tree).
### Our interpreter only has two phases _Lexer_ and _Parser_. First let's start with the first phase of the interpreter _Lexer_. Basically a Lexer is a program that seperates the source code to something we called tokens. What is a token you may ask? Token is the smallest piece of meaninful code.
![Tokens](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F702b36_ed8b6468e3d64b10b45a2a2011354181~mv2.png%2Fv1%2Ffit%2Fw_1000%252Ch_740%252Cal_c%2Ffile.png&f=1&nofb=1)
### Above you can see the expression _'2 + 3'_ divided into tokens by lexer.
### Each token has a type. For example token '2' has a type of 'INT' and token '+' has a type of 'ADDITION'. Token Types helps us to differentiate the tokens at the parsing stage.

---

### Lexer was basically this. Now let's talk about the Parser.
### Parser makes our meaningless tokens mean something. We pass our tokens to the parser and in our interpreter it gives us the result. Parser takes those tokens and processes them. For Example when we pass tokens _[2, +, 3]_ our parser will look through all of our tokens process them for our plus token it will take the left and the right value and sum them.

### A big problem when writing an interpreter for arithmetical expressions is _PRESEDENCE_ but when we do a little thinking you can see that it all comes to addition and subtraction. To solve the presedence problem we just process multiplication and division before addition and subtraction. For example expression _'2 + 3 * 5'_ will be turned into '2 + 15' and now when there are only addition and subtraction we can process normally. You can add support for parantheses using this way to.

### This simple interpreter basically works like this. You can extend this to your usage.
