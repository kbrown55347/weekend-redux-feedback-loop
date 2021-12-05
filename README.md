# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).



To Do:

### Setup

- [x] npm installs, create database
- [x] setup index.js for reducers, store, and provider
- [x] create components for feelings, understanding, support, comments, review, confirmation
- [x] create routes for each component

### feelings component
- [x] setup return of html (input - num, next button)
- [x] create feelings reducer in index.js, import to component

- On click of next button:
- [x] alert user if input field is empty (if)
- [x] (else) use value of input to dispatch to feelings reducer
- [x] setup function for user to be wired to understanding component on click of Next button

### understanding component
- [x] setup return of html (input - num, next button)
- [x] create understanding reducer in index.js, import to component

- On click of next button:
- [x] alert user if input field is empty (if)
- [x] (else) use value of input to dispatch to understanding reducer
- [x] setup function for user to be wired to support component on click of Next button

### support component
- [x] setup return of html (input - num, next button)
- [x] create support reducer in index.js, import to component

- On click of next button:
- [x] alert user if input field is empty (if)
- [x] (else) use value of input to dispatch to support reducer
- [x] setup function for user to be wired to comments component on click of Next button

### comments component
- [x] setup return of html (input - string, next button)
- [x] create comments reducer in index.js, import to component
- [x] use value of input to dispatch to comments reducer
- [x] setup function for user to be wired to review component on click of Next button

### review component
- [x] setup return of html (<p> and submit button)
- [x] import reducers for each component
- [x] display each reducer value in p tag on page

- [x] bundle reducers in object

SETUP POST:
- [ ] Add post route in server.js (express route)
- [ ] Create FeedbackRouter file, add router.post to insert into database

On click of submit:
- [ ] axios POST object to database
- [ ] route to confirmation component

### confirmation component
- [ ] setup return html (with button)
- [ ] import each reducer

On click of leave new feedback:
- [ ] reset each reducer to empty
- [ ] route to feelings component