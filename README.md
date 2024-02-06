# week-3-javascript-password-generator

## Description 

The aim of this project was to create a password generator using JavaScript, that can randonly generate a password to the user. The password would need to meet a number of different criteria in order to be considered a strong password that can provide greater security and protect sensitive data. 

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Characteristics

The Random Password consists of the following characteristics:

* The password has been set to consist of a mix of characters including, uppercase letters, lowercase letters, special characters and numbers.
* The password will need to be at least 8 characters and at most 128 characters 
* When looking to generate a random password, the user must confirm that they want each of the character type and they are given a question for each and will need to confirm before being able to move forward.
    * If they do not select at least one of the character types, an alert will be shown to remind them they they will need to select at least one character type in order to generate a password.
* The user will then be asked to specify the number of characters they will like to have and if not between 8 and 128, they will be provided with an alert that states that they need to choose a number within those parameters. 
* Once characters have been confirmed and a suitable password length has been chosen a message will be provided to state that the password meets the correct criteria and a random password will be generated to meet to chosen length.

## Image

**Image of application**

Without output 

<img width="913" alt="Password Generator - Without Output" src="https://github.com/e-aji/week-3-javascript-password-generator/assets/156595423/5e1dd541-ea3e-4e51-95c3-4031092b1095">


With output

<img width="883" alt="Password Generator - With Output" src="https://github.com/e-aji/week-3-javascript-password-generator/assets/156595423/e26b86b4-5ad9-475a-8463-89ac40bc9fc6">

## Link 

Link to deployed application - 
