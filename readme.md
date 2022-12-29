# JavaScript Password Generator

## About

This project is a password generator utilizing Javascript to create a random password after asking for the specific requirements:
<ul>
<li>A Password length between 8 and 128 characters.</li>
<li>Would you like Uppercase letters?</li>
<li>Would you like Lowercase letters?</li>
<li>Would you like Numbers?</li>
<li>Would you like Special characters?</li>

## Usage
This password generator is made to create random passwords using JavaScript, displayed through the use of HTML and CSS. Before generating password please be aware MDN warnings regarding the randomization method used in this project. 

 Note: Math.random() does not provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the window.crypto.getRandomValues() method.

 ### Method
Follow prompts that appear once you have clicked the 'Generate Password' button.
Note: If no upper and lower case letters, symbols and numbers are selected the return 'password' will be undefined. 

## Licence
please refer to Github licencing. 

MIT licence. 

## Links
Github: https://github.com/Zim40/passwordGenerator-JavaScript

!["Password Generator"](./JS%20screenshot.png) )