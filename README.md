# Trivia Bootcamp

This is a web-based app for practicing trivia questions.

## Installing files

(Node v14.4 and npm v6.14.5 were used)

Clone the repo to your workspace.

From the root project directory, run:

`npm install`


## Running the App

From the root project directory, run:

`npm start`

## Running Tests

From the root project directory, run:

`npm test`

## Known Issues

A small item I might change would be to define global variables using Sass variables for colors used in this main theme and items like font sizes, colors, common spacings. For this project instance it was not difficult to keep this relatively consistent because I was working independently but in a project with larger scope, I think it would be more effective to have global styles centrally organized.

In this version I used the App.module.css file as a kind of global style container. I also chose to use CSS modules in order to avoid classname conflicts across different components.

## Additional Feature Ideas

In order to help the user gauge their progress over time, I would like to save game results over time (per user). My high level idea is to add content to the questions JSON file like "category" and "keywords" properties. Then at each game end, the user could see some analytics such as % of questions missed by category (like geography, food, animals, etc) or by keywords. That way the user would understand where they might want to study more. Also the app would accumulate this sort of data across all games played by the user and they would be able to see the aggregate scoring performance by category (or keywords) over time. 

It might be fun to add a timer.

It might be more fun to add a way to play against random players who are online at the same time.

To enforce consistency, it would be helpful to use TypeScript. I have used it on a couple of projects but lately ran into hiccups configuring it with webpack along with CSS processors and decided to leave it out here.

## Requirements

* A round of trivia has 10 Questions
* All questions are multiple-choice questions
* Your score does not need to update in real time
* Results can update on form submit, button click, or any interaction you choose
* We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

## Acceptance Criteria

* A user can view questions.
* Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
* A user can select only 1 answer out of the 4 possible answers.
* The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round

# Misc

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
